import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, FeaturedProduct } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <FeaturedProduct/>
  </React.StrictMode>,
)
