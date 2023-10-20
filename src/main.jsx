import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, FeaturedProduct, Hombres, Footer } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <FeaturedProduct />
    <Hombres />
    <Footer />
  </React.StrictMode>,
)
