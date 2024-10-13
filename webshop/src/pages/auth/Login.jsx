import React from 'react'
import Button from 'react-bootstrap/esm/Button'



function Login() {
  return (
    <div>
     <br />
        <label>Username</label><br />
        <input  type="text" /><br /><br />
        <label>Password </label><br />
        <input  type="password" /><br /><br />
        <Button variant="dark">Login</Button>
        <span className="span" >OR</span>
        <Button variant="light" href='/signup'>Register</Button>
       
    </div>
  )
}

export default Login