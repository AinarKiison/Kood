import React, { useEffect, useRef, useState } from 'react'

function MaintainCategories() {

  const url = "https://webshop-ainar-dab59-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  const categoryRef = useRef();
  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    fetch(url)
    .then(res=> res.json())
    .then(json=> setCategories(json || []))
  }, []);



  const addCategory =()=>{
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    fetch(url,{method: "PUT", body:JSON.stringify(categories)});
    categoryRef.current.value="";
  }

  const kustuta = (index) => {
    console.log(index);
    categories.splice(index,1);
    setCategories(categories.slice());
    fetch(url,{method: "PUT", body:JSON.stringify(categories)});
  }

  return (
    <div>
      <label>Kategooria</label>
      <input ref ={categoryRef} type="text" />
      <button onClick={addCategory}>Sisesta</button>
      <br />
      {categories.map((category, index)=>
         <div>
          {category.name}
          <button onClick={()=> kustuta(index)}>X</button>
          </div> )}
    </div>
  )
}

export default MaintainCategories