import React, {useState} from 'react'
import { Link } from 'react-router-dom'
//import cartJSON from "../../data/cart.json"
import CloseButton from 'react-bootstrap/CloseButton';
import ParcelMachines from '../../components/ParcelMachines';


function Cart() {
  const [products, setProducts] = useState (JSON.parse(localStorage.getItem("cart")) || [] );

  const empty = () => {
    products.splice(0);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }

  const remove = (index) => {
    products.splice(index,1);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }
  
  const addAll = () => {
    let sum = 0;
    products.forEach(product => sum = sum + product.price);
    return sum;
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
      
      {products.length > 0 && <button onClick={empty}>{"Clear all"}</button>}

      {products.length > 0 && <div>Items in cart: {products.length} pcs</div>}

      {products.map((product, index) =>  
        <div key={index}>
          {index}
          {product.title} <br /> <img src={product.image} alt={product.title} style={{ width: '40px', height: 'auto' }} /> {product.price} <br /> 
           
           <CloseButton  onClick={() => remove(index)}/> 
        </div>)}
        { products.length === 0 &&
       <>
        <div>Cart is empty</div>
        <div>Go back to <Link to="/">Homepage</Link></div> 
      </>}


        {products.length > 0 && <div>
          <ParcelMachines/>
          Amount: {addAll()}€ </div>}

          {/* <Payment></Payment> */}
    </div>

  )
}

export default Cart