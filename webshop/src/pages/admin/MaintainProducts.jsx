import React, { useState, useRef, useEffect} from 'react'
// import productsJSON from "../../data/products.json"
import { Link } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MaintainProducts() {
  const [products, setProducts] = useState ([]);

  const searchRef = useRef();
  const url = "https://webshop-ainar-dab59-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  useEffect (()=> {
    fetch(url)
    .then(res=> res.json())
    .then(json=> setProducts (json || []))
  }, []);


  const deletes = (index)=>{
    products.splice(index, 1);
    setProducts(products.slice());
   }

   const search=()=>{
    const answer = products.filter(product => product.title.includes(searchRef.current.value)); 
    setProducts(answer);
  }

if(products.length === 0){

}
 

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
        <tr key={index} className={product.active === true ? "active":"inactive"}>
          <td><img style={{"width":"50px"}} src={product.image} alt="" /></td>
          <td>{product.title}</td>
          <td>{product.price}€</td>

        
          <td>
          <button onClick={() => deletes(index)}>X</button>

          <Link to={"/admin/edit-product/" + index}>
          
            <button >Change</button>

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