import React, { useState} from 'react'
import productsJSON from "../../data/products.json"
import { Link } from 'react-router-dom'

function MaintainProducts() {
  const [products, changeProducts] = useState (productsJSON.slice());

  const deletes = (index)=>{
    productsJSON.splice(index, 1);
    changeProducts(productsJSON.slice());
   }

  return (
    <div>
<br />
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
          
            <button>Change</button>
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