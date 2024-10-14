import React ,{useRef} from 'react'
import{useParams} from "react-router-dom"
import productsFromFile from "../../data/products.json"

function EditProduct() {
  const{index} = useParams();
  const found = productsFromFile[index];

  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const rateRef = useRef();
  const countRef = useRef();
  const activeRef = useRef();


  const edit = () => {
    productsFromFile[index] = {
       "id":idRef.current.value,
        "name":titleRef.current.value,
        "price":Number(priceRef.current.value),
        "description":descriptionRef.current.value,
        "category":categoryRef.current.value,
        "image": imageRef.current.value,
        "rating":{
          "rate":Number(rateRef.current.value),
          "count":Number(countRef.current.value)},
        "active":activeRef.current.value 
  }
}

  return (
    
    <div>
      <label>Product Name: </label><br />
      <input ref={titleRef} type="text" defaultValue={found.title}/><br />
      <label>ID:</label><br />
      <input ref={idRef} type="text" defaultValue={found.id}/><br />
      <label>Image:</label><br />
      <input ref={imageRef} type="text" defaultValue={found.image}/><br />
      <label>Price:</label><br />
      <input ref={priceRef} type="number"defaultValue={found.price} /><br />
      <label>Description:</label><br />
      <input ref={descriptionRef} type="text" defaultValue={found.description}/><br />
      <label>Category:</label><br />
      <input ref={categoryRef} type="text" defaultValue={found.category}/><br />
      <label>Rating (Rate):</label><br />
      <input ref={rateRef} type="number" step="0.1" defaultValue={found.rate}/><br />
      <label>Rating (Count):</label><br />
      <input ref={countRef} type="number" defaultValue={found.count}/><br />
      <label>Active:</label><br />
      <input ref={activeRef} type="text" defaultValue={found.active}/><br />

      <button onClick={edit}>Edit</button>

    </div>

    
  )
}

export default EditProduct