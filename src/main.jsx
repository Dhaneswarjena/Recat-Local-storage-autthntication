import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createContext } from 'react'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
export const Context=createContext()
const arr=['ddd','ssss','zzz']
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Context.Provider value={arr}>
  <Provider store={store}>
  <App />
  </Provider>
    
  </Context.Provider>
  </React.StrictMode>
)

