import React from 'react'

export const Navbar = () => {
    return (
        <nav className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
            <span className='navbar-brand'>Bless</span>
            <div className='nav navbar-collapse d-flex flex-wrap justify-content-center'>
                <span className=' nav-item nav-link text-primary'>Hombre</span>
                <span className=' nav-item nav-link text-primary'>Mujer</span>
                <span className=' nav-item nav-link text-primary'>Niño</span>
                <span className=' nav-item nav-link text-primary'>Nosotros</span>
            </div>
        </nav>
    )
}
