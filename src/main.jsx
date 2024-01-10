import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createContext } from 'react'
export const Context=createContext()
const arr=['ddd','ssss','zzz']
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Context.Provider value={arr}>
     <App />
  </Context.Provider>
  </React.StrictMode>
)

