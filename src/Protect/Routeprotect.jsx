import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'

const Routeprotect = ({children,adminroute,admin}) => {
    const isAuthneticate=useSelector(state=>state.RootStore.isAuthneticate)
    
  if(!isAuthneticate){
    return <Navigate to={'/login1'}/>
  }
  if(adminroute && !admin){
    return <Navigate to={'/profile'}/>
  }
  return children?children:<Outlet/>
}

export default Routeprotect