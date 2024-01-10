import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [tabledata,settabledata]=useState([])
  const [load,setload]=useState(false)
  const [search,setsearch]=useState('')
  const [calcinput,setcalcinput]=useState('')
   const logouthandle=()=>{
    localStorage.removeItem('loggedin')
   }
    const username=JSON.parse(localStorage.getItem('register'))
    useEffect(()=>{
   const commentadd=async()=>{
    setload(true)
    const res=await fetch('https://jsonplaceholder.typicode.com/comments');
    const data=await res.json();
    settabledata(data)
    setload(false)
   }
   commentadd();
  //  document.addEventListener('contextmenu',(e)=>{
  //   e.preventDefault();
  //   document.body.style.background='red'
  //  })
    },[])
    const equalevent=()=>{
      setcalcinput(eval(calcinput))
    }
    const backevent=()=>{
      setcalcinput(calcinput.slice(0,calcinput.length-1));
    }
  return (
    
    <div className="Home">
     {
      load? <h2>Loading...</h2>:<div>
        <h2>Home -- {username.name}</h2>
        <button onClick={logouthandle}>
            <Link to="/login">Logout</Link>
        </button>
        <div>
        <div>
          <input type="text" placeholder="Search Here" id="serchval" value={search} onChange={(e)=>setsearch(e.target.value)} />
        </div>
        <div id="calc">
          <input type="text" value={calcinput} />
          <div className="btn">
          <button onClick={()=>setcalcinput('')}>C</button>
          <button onClick={backevent}>Back</button>
          <button name="%" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>%</button>
          <button name="/" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>/</button>
          <button name="*" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>*</button>
          <button name="+" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>+</button>
          <button name="-" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>-</button>
          <button name="1" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>1</button>
          <button name="2" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>2</button>
          <button name="3" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>3</button>
          <button name="4" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>4</button>
          <button name="5" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>5</button>
          <button name="6" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>6</button>
          <button name="7" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>7</button>
          <button name="8" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>8</button>
          <button name="9" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>9</button>
          <button name="0" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>0</button>
          <button name="00" onClick={(e)=>setcalcinput(calcinput.concat(e.target.name))}>00</button>
          <button onClick={equalevent}>=</button>
          </div>
        </div>
          <table style={{border:'1px solid red'}}>
            <thead>
              <tr>
                <th>postId</th>
                <th>ID</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {
                tabledata.filter((i)=>{
                     if(search===''){
                      return i;
                     }else if(i.name.toLowerCase().includes(search.toLowerCase())){
                      return i;
                     }
                }).map((item)=>{
                  return(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.postId}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.body}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
     }
    </div>
  );
};

export default Home;
