import React, { useState, useRef } from 'react'
import productsJSON from "../../data/products.json"

function AddProduct() {
  const [message, changeMessage] = useState("Add new product");
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  
  function add(){
    if(titleRef.current.value === ""){
      changeMessage("Cant add product without a name");
      return;
    }
      changeMessage("Product added!: " + titleRef.current.value);
      const addedProduct = {
        "id":idRef.current.value,
        "name":titleRef.current.value,
        "price":Number(priceRef.current.value),
        "description":descriptionRef.current.value,
        "category":categoryRef.current.value,
        "image": imageRef.current.value
      }
      productsJSON.push(addedProduct);
    }
  
    const control =() => {
      if (titleRef.current.value === "") {
        changeMessage("Add new product name!");
        return;
      }
      if (titleRef.current.value[0] === titleRef.current.value[0].toLowerCase()) {
        changeMessage("Product name must start with a Capital letter!");
        return;
      }
      if (titleRef.current.value.length < 2) {
        changeMessage("Product name must be at least 2 length");
        return;
      }
      changeMessage("");
    }


  return (
    <div>
      
      <div>{message}</div>
      {/* ctrl + ä */}
      <label htmlFor="nimi">Product Name: </label><br />
      <input onChange={control}  ref={titleRef} id="nimi"type="text" /><br />
      <label>ID:</label><br />
      <input ref={idRef} type="text" /><br />
      <label>Image:</label><br />
      <input ref={imageRef} type="text" /><br />
      <label>Price:</label><br />
      <input ref={priceRef} type="number" /><br />
      <label>Description:</label><br />
      <input ref={descriptionRef} type="text" /><br />
      <label>Category:</label><br />
      <input ref={categoryRef} type="text" /><br />
      
      <br />
    
      <button onClick={add}>Add Product</button><br />
      
    </div>
  )
}

export default AddProduct