import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './reducer'

const Login1 = () => {
  const dispatch=useDispatch()
  return (
    <div>
    Login1
    <button onClick={()=>dispatch({type:login})}>login</button>
    </div>
  )
}

export default Login1