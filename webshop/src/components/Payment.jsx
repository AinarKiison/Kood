import { Button } from '@mui/material';
import React from 'react'

function Payment(props) {
    const pay=()=>{
        const paymentUrl="https://igw-demo.every-pay.com/api/v4/payments/oneoff"; 
        const paymentBody = {
            "account_name": "EUR3D1",
            "nonce": "165kj345hju6yty65f65879876ry6f5466yhgddfgfhjkiofkm" + new Date() + Math.random() * 99999,
            "timestamp": new Date(),
            "amount": props.sum,
            "order_reference": Math.random() * 99,
            "customer_ip": "53.62.137.190",
            "customer_url": "https://webshop-ainar-webshop.web.app/",
            "api_username": "92ddcfab96e34a5f"
          }
        
        const paymentHeaders = {
            "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
            "Content-Type":"application/json"
        };

        fetch(paymentUrl, {method: "POST" , body: JSON.stringify(paymentBody), headers: paymentHeaders})
            .then(res=>res.json())
            .then(json=>window.location.href = json.payment_link)
    }

  return (
    <div>
        <Button variant="contained" onClick={pay}>Pay</Button>
    </div>
  )
}

export default Payment