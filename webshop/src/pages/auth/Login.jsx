import React, { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { AuthContext } from '../../store/AuthContext'



function Login() {

  const{setLoggedIn} = useContext(AuthContext)

  function logIn() {
    setLoggedIn(true);
    sessionStorage.setItem("token", "token123");
  }

  return (
    <div>
     <br />
        <label>Username</label><br />
        <input  type="text" /><br /><br />
        <label>Password </label><br />
        <input  type="password" /><br /><br />
        <Button variant="light" href='/signup'>Register</Button>
        <span className="span" >OR</span>
        <Button onClick={logIn}>Login</Button>
       
    </div>
  )
}

export default Login