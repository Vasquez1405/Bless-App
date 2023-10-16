import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, BlessApp } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <BlessApp/>
  </React.StrictMode>,
)
