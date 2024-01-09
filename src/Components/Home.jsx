import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
   const logouthandle=()=>{
    localStorage.removeItem('loggedin')
   }
    const username=JSON.parse(localStorage.getItem('register'))
  return (
    <div className="Home">
      <div>
        <h2>Home -- {username.name}</h2>
        <button onClick={logouthandle}>
            <Link to="/login">Logout</Link>
        </button>
      </div>
    
    </div>
  );
};

export default Home;
