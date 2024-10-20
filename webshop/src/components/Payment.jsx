import React from 'react'

function Payment() {
    const pay=()=>{
        const paymentUrl="https://igw-demo.every-pay.com/api/v4/payments/oneoff"; 
        const paymentBody = {
            "account_name": "EUR3D1",
            "nonce": "165kj345hju6yty65f65879876ry6f5466yhgddfgfhjkiofkm" + new Date() + Math.random() * 99999,
            "timestamp": new Date(),
            "amount": Math.random() * 99,
            "order_reference": Math.random() * 99,
            "customer_ip": "53.62.137.190",
            "customer_url": "https://webshop-ainar-webshop.web.app/",
            "api_username": "92ddcfab96e34a5f"
          }
        
        const paymentHeaders = {
            "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
            "Content-Type":"application/json"
        };

        fetch(paymentUrl, {mehtod:" POST" , body: JSON.stringify(paymentBody), headers: paymentHeaders})
            .then(res=>res.json())
            .then(json=>window.location.href = json.payment_link)
    }

  return (
    <div>
        <button onClick={pay}>Pay</button>
    </div>
  )
}

export default Payment