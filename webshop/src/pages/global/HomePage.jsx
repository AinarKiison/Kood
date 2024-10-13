
import React, { useState } from 'react';
import productsFromJSON from "../../data/products.json";
import cartJSON from "../../data/cart.json";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


function HomePage() {
  const [products, setProducts] = useState(productsFromJSON.slice());

  const reset = () => {
    setProducts (productsFromJSON.slice());
  }

  const addToCart = (addedProduct) => {
    cartJSON.push(addedProduct);
    toast.success("Item added to cart");
  };

  const sortAZ = () => {
    products.sort((a,b) => a.title.localeCompare(b.title))
    setProducts(products.slice());
  }
  const sortZA = () => {
    products.sort((a,b) => b.title.localeCompare(a.title))
    setProducts(products.slice());
  }
  const sortAscendingPrice = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
    }
    const sortDecendingPrice = () => {
      products.sort((a, b) => b.price - a.price);
      setProducts(products.slice());
      }

      const filterElectronics = () => {
        const filteredProducts = productsFromJSON.filter(product => product.category.includes ("electronics"));
      setProducts(filteredProducts);
      }
      const filterJewelery = () => {
        const filteredProducts = productsFromJSON.filter(product => product.category.includes ("jewelery"));
      setProducts(filteredProducts);
      }
      const filterMensClothing = () => {
        const filteredProducts = productsFromJSON.filter(product => product.category === "men's clothing" );
      setProducts(filteredProducts);
      }
      const filterWomensClothing = () => {
        const filteredProducts = productsFromJSON.filter(product => product.category.includes ("women's clothing"));
      setProducts(filteredProducts);
      }

       // Sorting by Rating Ascending
    const sortRatingAscending = () => {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }

  // Sorting by Rating Descending
    const sortRatingDescending = () => {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  }

  const notify = () => toast("RESET!");
 

  return (
    <div>
      <Button onClick={() => { reset(); notify(); }} className='reset-btn' variant="secondary">
  Reset
</Button>
      
      <ButtonGroup>
      <Button onClick={sortAZ}>Sort A-Z</Button>
      <Button onClick={sortZA}>Sort Z-A</Button>
      <Button onClick={sortAscendingPrice}>Price ascending</Button>
      <Button onClick={sortDecendingPrice}>Price decending</Button>
      <Button onClick={sortRatingAscending}>Rating ascending</Button>
      <Button onClick={sortRatingDescending}>Rating descending</Button>
     
      <DropdownButton as={ButtonGroup} title="Select Category" id="category-dropdown">
        <Dropdown.Item onClick={filterMensClothing} >Men's clothing</Dropdown.Item>
        <Dropdown.Item onClick={filterWomensClothing}>Women's clothing</Dropdown.Item>
        <Dropdown.Item onClick={filterJewelery} >Jewelery</Dropdown.Item>
        <Dropdown.Item onClick={filterElectronics} >Electronics</Dropdown.Item>
      </DropdownButton>
      </ButtonGroup>
    
     


      {products.map((product, index) =>
        <div key={index}><br />
          <img className="frame"   style={{width:"150px"}} src={product.image} alt="" />
          
          <div className='productitle'>{product.title}</div>
          <div className='productitle'>{product.price}€</div>

          <div>Rating: {product.rating.rate}</div> {/* Display the rating */}

          <Link to={"/product/" +  product.title}>
        <Button variant="">More</Button> 
          </Link>

          {< button className='buttoncart' onClick={() => addToCart(product)}>Add to cart</button> }
          </div>

      )}
        <ToastContainer
            position="top-right" 
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