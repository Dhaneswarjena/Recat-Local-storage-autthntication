import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Protextroute from './Components/Protextroute'
import './Styles/app.scss'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Protextroute />}>
           <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App