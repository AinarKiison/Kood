
import React, { useContext, useEffect, useState } from 'react';
// import productsFromJSON from "../../data/products.json";
// import cartJSON from "../../data/cart.json";

// import Button from 'react-bootstrap/Button';
import {Button as MuiButton} from '@mui/material';

import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import SortButtons from '../../components/SortButtons';
import { CartSumContext } from '../../store/CartSumContext';
import styles from "../../css/HomePage.module.css";


function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const {setCartSum} = useContext(CartSumContext);

const url = "https://webshop-ainar-dab59-default-rtdb.europe-west1.firebasedatabase.app/products.json"

const[categories, setCategories] = useState([]);
  const categoryDburl =  "https://webshop-ainar-dab59-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  useEffect (()=> {
    fetch(categoryDburl)
    .then(res=> res.json())
    .then(json=> setCategories (json || []))
  }, []);

useEffect (()=> {
  fetch(url)
  .then(res=> res.json())
  .then(json=> {
    setProducts (json || [])
    setDbProducts (json || [])
  });
}, []);

const reset = () => {
  setProducts (products.slice());
  toast("RESET");
}


//  SIIN on kodune. Viia andmebaasi üle
const addToCart =(addedProduct)=>{
  // ostukorvJSON.push(lisatudToode);
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  const cartProduct = cartLS.find(product => product.toode.id === addedProduct.id); 
  if(cartProduct !== undefined){
//koguse suurendus kui 1 olmeas
cartProduct.kogus = cartProduct.kogus + 1;
  } else{ cartLS.push({kogus:1, toode: addedProduct});
//lõppu 1 juurde
  }
  localStorage.setItem("cart", JSON.stringify(cartLS));

  let sum = 0;
  cartLS.forEach(product => sum = sum + product.toode.price * product.kogus);
  setCartSum(sum);

};





     
  const filter = (categoryClicked) => {
    const filteredProducts = dbProducts.filter(product => product.category === categoryClicked);
  setProducts(filteredProducts);
  }





   // const filterElectronics = () => {
      //   const filteredProducts = products.filter(product => product.category === "electronics");
      // setProducts(filteredProducts);
      // }
      // const filterJewelery = () => {
      //   const filteredProducts = products.filter(product => product.category === "jewelery");
      // setProducts(filteredProducts);
      // }
      // const filterMensClothing = () => {
      //   const filteredProducts = products.filter(product => product.category === "men's clothing" );
      // setProducts(filteredProducts);
      // }
      // const filterWomensClothing = () => {
      //   const filteredProducts = products.filter(product => product.category === "women's clothing");
      // setProducts(filteredProducts);
      // }
 

  return (
    <div>
    <MuiButton variant="contained" color="success"onClick={ reset} >
    Reset
    </MuiButton>
      
      <ButtonGroup>
        <SortButtons products={products} setProducts={setProducts}></SortButtons>
     
      <DropdownButton as={ButtonGroup} title="Select Category" id="category-dropdown">
        {/* <Dropdown.Item onClick={filterMensClothing} >Men's clothing</Dropdown.Item>
        <Dropdown.Item onClick={filterWomensClothing}>Women's clothing</Dropdown.Item>
        <Dropdown.Item onClick={filterJewelery} >Jewelery</Dropdown.Item>
        <Dropdown.Item onClick={filterElectronics} >Electronics</Dropdown.Item> */}
        {categories.map(category=>
          <DropdownItem onClick={()=> filter(category.name)} >{category.name}</DropdownItem>
        )}
      </DropdownButton>
      </ButtonGroup>
    
     

<div className={styles.products}> 
      {products.map((product, index) =>
        <div className={styles.product} key={index}><br />
          <img className={styles.image}  style={{width:"150px"}} src={product.image} alt="" />
          
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>{product.price}€</div>

          <div>Rating: {product.rating.rate}</div> {/* Display the rating */}
          <div>Count: {product.rating.count}</div> {/* Display the rating count*/}

          <Link to={"/product/" +  product.title}>
             <button variant="">More</button> 
          </Link>

          {< button className={styles.buttoncart} onClick={() => addToCart(product)}>Add to cart</button> }
          </div>
      )}
</div>

        <ToastContainer
            position="bottom-right" 
            autoClose={3000} 
            hideProgressBar={false} 
            newestOnTop={false} 
            closeOnClick 
            pauseOnHover 
            draggable 
            pauseOnFocusLoss /> 
    </div>
  );
}

export default HomePage