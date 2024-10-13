import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function Signup() {
  return (
    <div>
     <br />
        <label>Name</label><br />
        <input  type="text" /><br />
        <label>Username </label><br />
        <input  type="text" /><br />
        <label>Password </label><br />
        <input  type="text" /><br /><br />

      
        <Button variant="light" href='/signup'>Register</Button>
       
    </div>
  )
}

export default Signup