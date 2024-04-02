import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import './login.css'

function Signup() {

    const [name,setName] = useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();


    const handleSubmit = async (e)=>{
        e.preventDefault()
       await axios.post('http://localhost:3000/',{
        name:name,
        email:email,
        password:password
       })
        .then(result=>console.log(result))
        .catch(err=>{console.log(err)
            navigate('/Login')
        })
    }
  return (
    <div className="signup-container">
      <h1>SIGN UP</h1>
      <form action="#" method="POST">
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" onChange={(e) =>setName(e.target.value)} id="fullname" name="fullname" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={(e) =>setEmail(e.target.value)} id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" onChange={(e) =>setPassword(e.target.value)} id="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="login">
        Already have an account?{" "}
        <Link to="/Login" type="submit" onClick={handleSubmit}>Login</Link>
      </div>
    </div>
  );
}

export default Signup;
