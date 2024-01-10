import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../main";
const Login = () => {
  const value=useContext(Context)
    const[input,setinput]=useState({
        email:'',
        password:''
    })
    const navigate=useNavigate()
    const Rgval=JSON.parse(localStorage.getItem('register'))
const loginsubmit=(e)=>{
e.preventDefault();
   if(Rgval.email===input.email && Rgval.password===input.password){
       
       localStorage.setItem('loggedin',true)
       navigate('/')
   }else{
    alert('wrong email and password');
   }
}
  return (
    <div className="login">
      <form onSubmit={loginsubmit}>
      <div className="section_input">
          <h2>Login</h2>
        </div>
        <div className="section_input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={input.email} onChange={(e)=>setinput({...input,[e.target.name]:e.target.value})} placeholder="Enter Email" />
        </div>
        <div className="section_input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" name="password" value={input.password} onChange={(e)=>setinput({...input,[e.target.name]:e.target.value})}/>
        </div>
        <div className="button_input">
          <button type="submit">Login</button>
        </div>
        <div className="button_input">
          <p>
            New user Create an Account?<Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
