import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, FeaturedProduct, Hombres, Footer, Mujeres, Niños } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <FeaturedProduct />
    <Hombres />
    <Mujeres />
    <Niños />
    <Footer />
  </React.StrictMode>,
)
