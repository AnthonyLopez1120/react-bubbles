import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Login = (props) => {

  const [credentials, setCredenttials] = useState({
    username: '', 
    password: ''
  })
  
  const handleChange = (e) => {
    setCredenttials({...credentials,[e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('api/login', credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      props.history.push('/bubbles')
    })
    .catch(err =>{
      console.log(err)
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='username' onChange={handleChange} value={credentials.username}/>
        <input type='password' name='password' placeholder='password' onChange={handleChange} value={credentials.password}/>
        <button type='submit'>Log In</button>
      </form>

    </>
  );
};

export default Login;
