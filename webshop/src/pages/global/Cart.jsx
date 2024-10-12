import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import cartJSON from "../../data/cart.json"
import CloseButton from 'react-bootstrap/CloseButton';


function Cart() {
  const [product, changeProduct] = useState (cartJSON.slice());

  const empty = () => {
    cartJSON.splice(0);
    changeProduct(cartJSON.slice());
  }

  const remove = (index) => {
    cartJSON.splice(index,1);
    changeProduct(cartJSON.slice());

  }
  
  const addAll = () => {
    let summa = 0;
    product.forEach(product => summa = summa + product.price);
    return summa;
  }
//   const aggregatedItems = product.reduce((acc, { id, quantity }) => {
//     if (!acc[id]) {
//         acc[id] = { id, quantity: 0 };
//     }
//     acc[id].quantity += quantity;
//     return acc;
// }, {});

 
  return (
    <div>
      
      {product.length > 0 && <button onClick={empty}>{"Clear all"}</button>}

      {product.length > 0 && <div>Items in cart: {product.length} pcs</div>}

      {product.map((product, index) =>  
        <div key={index}>
          {index}
          {product.title} <br /> <img src={product.image} alt={product.title} style={{ width: '40px', height: 'auto' }} /> {product.price} <br /> 
           
           <CloseButton  onClick={() => remove(index)}/> 
        </div>)}
        { product.length === 0 &&
       <>
        <div>Cart is empty</div>
        <div>Go back to <Link to="/">Homepage</Link></div> 
      </>}


        {product.length > 0 && <div>Amount: {addAll()}€ </div>}
    </div>

  )
}

export default Cart