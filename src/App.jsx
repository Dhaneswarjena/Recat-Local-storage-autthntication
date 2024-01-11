import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
//import Home from './Components/Home'
//import Signup from './Components/Signup'
//import Login from './Components/Login'
//import Protextroute from './Components/Protextroute'
import './Styles/app.scss'
//import Home from './Components/Home1'
import Header from './Components/Header'
import Home1 from './Components/Home1'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Mylogs from './Components/Mylogs'
import Login1 from './Components/Login1'
import { useSelector } from 'react-redux'
import Routeprotect from './Protect/Routeprotect'
const App = () => {
  //const isAuthneticate=useSelector(state=>state.RootStores.isAuthneticate)
  return (
    <>
    <Router>
    <Header />
      <Routes>
       <Route path="/home1" element={<Home1/>}/>
       <Route path="/dashboard" element={
       <Routeprotect adminroute={true}>
       <Dashboard />
       </Routeprotect>
       }/>
       <Route element={<Routeprotect/>}>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/mylogs" element={<Mylogs/>}/>
       </Route>
       <Route path="/login1" element={<Login1/>}/>
      </Routes>
    </Router>
 <Passwordgenerate/>
    </>
  )
}
const Passwordgenerate=()=>{
  const [password,setpassword]=useState('**************')
  const [color,setcolor]=useState([])
  //console.log(color)
let col=((Math.random()+1)*120).toFixed(0)+','+((Math.random()+1)*120).toFixed(0)+','+((Math.random()+1)*120).toFixed(0)

  return(
    <>
    <h1>{password}</h1>
    <div style={{backgroundColor:`rgb(${color})`}}>syblue</div>
    <button onClick={()=>setpassword(Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2))}>Password generate</button>
    <button onClick={
      ()=>setcolor(col)
      }>Password generate</button>
    </>
    
  )
}
export default App