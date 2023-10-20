import React from 'react'
import './styles/Navbar.css'
import usuarioImg from '../assets/images/usuario.png'
import logoBless from '../assets/images/logo-bless.png'

export const Navbar = () => {
    return (
        <nav className='header'>
            <img className='header-logo navbar-brand' src={logoBless} alt="" />
            <ul className='nav navbar-collapse d-flex flex-wrap justify-content-center'>
                <span className=' nav-item nav-link text-primary'>Hombre</span>
                <span className=' nav-item nav-link text-primary'>Mujer</span>
                <span className=' nav-item nav-link text-primary'>Niño</span>
                <span className=' nav-item nav-link text-primary'>Nosotros</span>
            </ul>
            <img className='header-usuario' src={usuarioImg} alt="" />
        </nav>
    )
}
