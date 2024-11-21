import React from 'react'

function MaintainShops() {
  const url = "https://webshop-ainar-dab59-default-rtdb.europe-west1.firebasedatabase.app/shops.json"

//shops.push({
// "name": nameRef.current.value})
//"latitude":latitudeRef.current.value,
//"longitude":longitudeRef.current.value,
//"openTime":openTimeRef.current.value,
//"googleMapsAddress":mapsRef.current.value,
//})


  return (
    <div>
      <label htmlFor="">Nimi</label>
      <input type="text" />

      <label htmlFor="">Latitude</label>
      <input type="text" />

      <label htmlFor="">Longitude</label>
      <input type="text" />

      <label htmlFor="">Avatud</label>
      <input type="text" />

      <label htmlFor="">Map</label>
      <input type="text" />
    </div>
  )
}

export default MaintainShops