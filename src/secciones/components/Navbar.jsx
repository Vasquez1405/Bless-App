import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../styles/Navbar.css'
import usuarioImg from '../../../assets/images/usuario.png'
import logoBless from '../../../assets/images/logo-bless.png'

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className='header'>

            <Link className='navbar-brand' to="/inicio">
                <img className='header-logo navbar-brand' src={logoBless} alt="" />
            </Link>

            <div className='navbar'>
                <ul className="navbar-nav">
                    <NavLink className=' nav-item nav-link text-primary' to="/hombres">
                        Hombre
                    </NavLink>
                    <NavLink className=' nav-item nav-link text-primary' to="/mujeres">
                        Mujeres
                    </NavLink>
                    <NavLink className=' nav-item nav-link text-primary' to="/niños">
                        Niño
                    </NavLink>
                </ul>
            </div>

            <div className="">
                <ul className="navbar-nav ml-auto">
                    <button className='nav-item nav-link btn btn-primary' onClick={onLogout}>
                        LogOut
                    </button>
                </ul>
            </div>
            {/* <img className='header-usuario' src={usuarioImg} alt="" /> */}
        </nav>
    )
}
