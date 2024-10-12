import React from 'react';
import { useParams } from 'react-router-dom';
import productJSON from '../../data/products.json';

function SingleProduct() {
  const { productName } = useParams();  // Ensure this matches your route definition
  const foundProduct = productJSON.find(product => product.title === productName);

  if (!foundProduct) {
    return <div>No product found</div>;
  }

  return (
    <div>
      <div>Product id: {foundProduct.id}</div>
      <div>Product name: {foundProduct.title}</div>
      <div>Product price: {foundProduct.price}€</div>
      <div>Product description: {foundProduct.description}</div>
      <div>Product category: {foundProduct.category}</div>
      <div>
        <img src={foundProduct.image} alt={foundProduct.title} style={{ width: '150px' }} />
      </div>
      <div>Product rating: {foundProduct.rating.rate}</div>
    </div>
  );
}

export default SingleProduct;