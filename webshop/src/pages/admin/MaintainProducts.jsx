import React, { useState, useRef} from 'react'
import productsJSON from "../../data/products.json"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MaintainProducts() {
  const [products, changeProducts] = useState (productsJSON.slice());

  const searchRef = useRef();

  const deletes = (index)=>{
    productsJSON.splice(index, 1);
    changeProducts(productsJSON.slice());
   }

   const search=()=>{
    const answer = productsJSON.filter(product => product.title.includes(searchRef.current.value)); 
    changeProducts(answer);
  }


  const notify = () => toast("Changed!");

  return (
    <div>
<br />
<div>Search Products</div>
<input ref={searchRef} onChange={search} type="text" />
<br /><br />
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Price</th>
          
        </tr>
      </thead>
      <tbody>
      {products.map((product, index)=>
        <tr key={index}>
          <td><img style={{"width":"50px"}} src={product.image} alt="" /></td>
          <td>{product.title}</td>
          <td>{product.price}€</td>
         
          <td>
          <button onClick={() => deletes(index)}>X</button>

          <Link to={"admin/maintain-products/" + index}>
          
            <button  onClick={notify}>Change</button>

            <ToastContainer
             position="top-right" 
             autoClose={3000} 
             hideProgressBar={false} 
             newestOnTop={false} 
             closeOnClick 
             pauseOnHover 
             draggable 
             pauseOnFocusLoss/>
          </Link>
          </td>
        </tr>
)}
      </tbody>
      
    </table>

  <br />
 

</div>
  )
}

export default MaintainProducts