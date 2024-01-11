import React from 'react'
import { useDispatch } from 'react-redux'
import {logout } from './reducer'
const Profile = () => {
  const displatch=useDispatch()
  return (
    <div>
    Profile
    <button onClick={()=>displatch({type:logout})}>logout</button>
    </div>
  )
}

export default Profile