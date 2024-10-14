import React, {useState, useEffect} from 'react'

function Electricity() {
    const [prices, setPrices] = useState([]);

    useEffect(()=>{
        fetch("https://dashboard.elering.ee/api/nps/price")
            .then(res => res.json())
            .then(json=> setPrices(json.data.ee))
    }, []);

  return (
    <div>
        <div>{new Date().getDate()}.{new Date().getMonth() +1}.{new Date().getFullYear()}</div><br />
        {prices.map(price => 
        <div>
            {new Date(price.timestamp*1000).getHours()}:00 : {price.price} €
        </div>)}

    </div>
  )
}

export default Electricity