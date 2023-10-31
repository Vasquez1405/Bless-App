import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { BlessApp } from './BlessApp'
import { Footer } from './secciones'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlessApp />
    </BrowserRouter>
    {/* <Footer /> */}
  </React.StrictMode>,
)
