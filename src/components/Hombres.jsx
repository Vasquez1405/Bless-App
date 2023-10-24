import React from 'react'

import './styles/Hombres.css'

import portadaHombres from '../assets/images/portada-hombres.png'
import prontoHombresImg from '../assets/images/pronto-hombres.png'

export const Hombres = () => {
    return (
        <div className='hombres'>

            <div className='hombres-hero'>
                <img className='hombres-hero-img' src={portadaHombres} alt="" />
            </div>

            <div className='hombres-container'>
                <div className='hombres-card'>
                    <img className='hombres-card-img' src={prontoHombresImg} alt="" />
                    <h3 className='hombres-card-title'>Descubre lo nuevo</h3>
                    <p className='hombres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='hombres-card-link' href="">Ver Coleccion</a>
                </div>
                <div className='hombres-card'>
                    <img className='hombres-card-img' src={prontoHombresImg} alt="" />
                    <h3 className='hombres-card-title'>Descubre lo nuevo</h3>
                    <p className='hombres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='hombres-card-link' href="">Ver Coleccion</a>
                </div>
                <div className='hombres-card'>
                    <img className='hombres-card-img' src={prontoHombresImg} alt="" />
                    <h3 className='hombres-card-title'>Descubre lo nuevo</h3>
                    <p className='hombres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='hombres-card-link' href="">Ver Coleccion</a>
                </div>
                <div className='hombres-card'>
                    <img className='hombres-card-img' src={prontoHombresImg} alt="" />
                    <h3 className='hombres-card-title'>Descubre lo nuevo</h3>
                    <p className='hombres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='hombres-card-link' href="">Ver Coleccion</a>
                </div>
                <div className='hombres-card'>
                    <img className='hombres-card-img' src={prontoHombresImg} alt="" />
                    <h3 className='hombres-card-title'>Descubre lo nuevo</h3>
                    <p className='hombres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='hombres-card-link' href="">Ver Coleccion</a>
                </div>
            </div>
        </div>
    )
}
