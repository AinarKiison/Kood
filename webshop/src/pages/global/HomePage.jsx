
import React, { useState } from 'react';
import productsFromFile from "../../data/products.json";
import cartJSON from "../../data/cart.json";


function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const reset = () => {
    setProducts (productsFromFile.slice());
  }

  const addToCart = (addedProduct) => {
    cartJSON.push(addedProduct);
  }

  return (
    <div>
      <br />
      {products.map(product =>
        <div key={product.id}><br />
          <img className="frame"   style={{width:"150px"}} src={product.image} alt="" />
          
          <div>{product.title}</div>
          <div>{product.price}€</div>
          {< button onClick={() => addToCart(product)}>Add to cart</button> }
          </div>
      )}
    </div>
  )
}

export default HomePage