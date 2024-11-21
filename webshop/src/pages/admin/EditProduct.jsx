import React ,{useEffect, useRef, useState} from 'react'
import{useParams} from "react-router-dom"
// import productsFromFile from "../../data/products.json"

function EditProduct() {
  const{index} = useParams();
  const [products, setProducts] = useState([]);
  const found = products[index];
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const rateRef = useRef();
  const countRef = useRef();
  const activeRef = useRef();

  const[categories, setCategories] = useState([]);
  const categoryDburl =  "https://webshop-ainar-dab59-default-rtdb.europe-west1.firebasedatabase.app/categories.json"

  useEffect (()=> {
    fetch(categoryDburl)
    .then(res=> res.json())
    .then(json=> setCategories (json || []))
  }, []);


  const url = "https://webshop-ainar-dab59-default-rtdb.europe-west1.firebasedatabase.app/products.json"

useEffect (()=> {
  fetch(url)
  .then(res=> res.json())
  .then(json=> setProducts (json || []))
}, []);

  
  const edit = () => {
    products[index] = {
       "id":Number(idRef.current.value),
        "title":titleRef.current.value,
        "price":Number(priceRef.current.value),
        "description":descriptionRef.current.value,
        "category":categoryRef.current.value,
        "image": imageRef.current.value,
        "rating":{
          "rate":Number(rateRef.current.value),
          "count":Number(countRef.current.value)},
        "active":activeRef.current.checked
  }
  fetch(url, {method: "PUT", body: JSON.stringify(products)});
}

if(found === undefined){
  return <div>Product not found</div>
}

  return (
    
    <div>
      <label>Product Name: </label><br />
      <input ref={titleRef} type="text" defaultValue={found.title}/><br />
      <label>ID:</label><br />
      <input ref={idRef} type="number" defaultValue={found.id}/><br />
      <label>Image:</label><br />
      <input ref={imageRef} type="text" defaultValue={found.image}/><br />
      <label>Price:</label><br />
      <input ref={priceRef} type="number"defaultValue={found.price} /><br />
      <label>Description:</label><br />
      <input ref={descriptionRef} type="text" defaultValue={found.description}/><br />


      <label>Category:</label><br />
      <select ref={categoryRef} defaultValue={found.category}>
        {categories.map(category => <option>{category.name}</option>)}
      </select>
      {/* <input ref={categoryRef} type="text" defaultValue={found.category}/><br /> */}

      <br />
      <label>Rating (Rate):</label><br />
      <input ref={rateRef} type="number" step="0.1" defaultValue={found.rating.rate}/><br />
      <label>Rating (Count):</label><br />
      <input ref={countRef} type="number" defaultValue={found.rating.count}/><br />
      <label>Active:</label><br />
      <input ref={activeRef} type="checkbox" defaultValue={found.active}/><br />

      <button onClick={edit}>Edit</button>

    </div>

    
  )
}

export default EditProduct