import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Signup = () => {
    const[input,setinput]=useState({
        name:'',
        email:'',
        password:''
    })
    const navigate=useNavigate()
    const changehadler=(e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }
    const submithandler=(e)=>{
     e.preventDefault();
     localStorage.setItem('register',JSON.stringify(input));
     setinput('');
     navigate('/login')
    }
  return (
    <div className="signup">
      <form onSubmit={submithandler}>
      <div className="section_input">
          <h2>Create an Account</h2>
        </div>
        <div className="section_input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={input.name} onChange={changehadler} placeholder="Enter Name" />
        </div>
        <div className="section_input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={input.email} onChange={changehadler} placeholder="Enter Email" />
        </div>
        <div className="section_input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={input.password} onChange={changehadler} placeholder="Enter password" />
        </div>
        <div className="button_input">
          <button type="submit">Sign Up</button>
        </div>
        <div className="button_input">
          <p>
            If Register Please?<Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
