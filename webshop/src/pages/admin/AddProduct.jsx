import React, { useState, useRef, useEffect } from 'react'
// import productsJSON from "../../data/products.json"

function AddProduct() {
  const [message, changeMessage] = useState("Add new product");
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const rateRef = useRef();
  const countRef = useRef();

  const url = "https://webshop-ainar-dab59-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  const[products, setProducts] = useState([]);

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
    .then(json=> setProducts (json || []))
  }, []);

  
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
        "image": imageRef.current.value,
        "active":true,
        "rating":{
          "rate":Number(rateRef.current.value),
          "count":Number(countRef.current.value)
        }
      }
      // productsJSON.push(addedProduct);
      products.push(addedProduct);
      fetch(url, {method: "PUT", body: JSON.stringify(products)});
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
      <select ref={categoryRef}>

        {categories.map(category => <option>{category.name}</option>)}

      
      </select>
      {/* <input ref={categoryRef} type="text" /> */}
      <br />

      <label>Rating (Rate):</label><br />
      <input ref={rateRef} type="number" step="0.1" /><br />
      <label>Rating (Count):</label><br />
      <input ref={countRef} type="number" /><br />
      
      <br />
    
      <button onClick={add}>Add Product</button><br />
      
    </div>
  )
}

export default AddProduct