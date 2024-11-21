import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
//import cartJSON from "../../data/cart.json"
import CloseButton from 'react-bootstrap/CloseButton';
import ParcelMachines from '../../components/ParcelMachines';
import Button from '@mui/material/Button';
import Payment from '../../components/Payment';
import { CartSumContext } from '../../store/CartSumContext';
import  styles from "../../css/Cart.module.css";



function Cart() {
  const [products, setProducts] = useState (JSON.parse(localStorage.getItem("cart")) || [] );
  const {setCartSum} = useContext(CartSumContext);

  const empty = () => {
    products.splice(0);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(0);
  }

  const remove = (index) => {
    products.splice(index,1);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(addAll);
  }
  
  const addAll = () => {
    let sum = 0;
    products.forEach(product => sum = sum + product.toode.price * product.kogus);
    return sum.toFixed(2);
    

  }

  const countAll = () => {
    let sum = 0;
    products.forEach(product => sum = sum + product.kogus);
    return sum;
  }

  const decreaseQuantity = (index) => {
    products[index].kogus = products[index].kogus -1;
    if (products[index].kogus === 0) {
      products.splice(index,1);
    }
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(addAll);
  }
  const increaseQuantity = (index) => {
    products[index].kogus = products[index].kogus +1;
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(addAll);
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
      
      {products.length > 0 && <Button variant="contained" onClick={empty}>{"Clear all"}</Button>}
      {products.length > 0 && <div>Items in cart: {countAll()} pcs</div>}


      {products.map((product, index) =>  
        <div className={styles.cart_product} key={index}>
          <img className={styles.cart_image} src={product.toode.image} alt={product.toode.title} /> 
          <div className={styles.cart_title}>{product.toode.title}</div> <br />
          <div className={styles.cart_price}>{product.toode.price}€</div><br /> 
          <img className= {styles.cart_button}  onClick={()=> decreaseQuantity(index)} src="/minus.png" alt=""></img>
          {/* <button onClick={()=> decreaseQuantity(index)}>-</button> */}
          <div className={styles.cart_quantity}>{product.kogus} pcs</div><br /> 
          <img className={styles.cart_button}  onClick={()=> increaseQuantity(index)} src="/plus.png" alt=""></img>
          {/* <button onClick={()=> increaseQuantity(index)}>+</button> */}
          <div className={styles.cart_sum}>{product.toode.price * product.kogus}€</div><br /> 
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

           <Payment sum={addAll()}></Payment> 
    </div>

  )
}

export default Cart