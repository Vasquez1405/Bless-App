import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../styles/Navbar.css'
import logoBless from '../../../assets/images/logo-bless.png'
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {

        logout();

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
                        Hombres
                    </NavLink>
                    <NavLink className=' nav-item nav-link text-primary' to="/mujeres">
                        Mujeres
                    </NavLink>
                    <NavLink className=' nav-item nav-link text-primary' to="/niños">
                        Niños
                    </NavLink>
                </ul>
            </div>

            <div className="">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>
                    <button className='nav-item nav-link btn btn-primary' onClick={onLogout}>
                        LogOut
                    </button>
                </ul>
            </div>
        </nav>
    )
}
