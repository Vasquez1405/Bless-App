import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, FeaturedProduct, Hombres, Footer, Mujeres, Niños, Inicio } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Inicio />
    {/* <FeaturedProduct /> */}
    {/* <Hombres /> */}
    {/* <Mujeres /> */}
    {/* <Niños /> */}
    <Footer />
  </React.StrictMode>,
)
