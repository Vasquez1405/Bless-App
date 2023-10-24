import React from 'react'

import './styles/Mujeres.css'

import portadaMujeres from '../assets/images/portada-mujeres.png'
import prontoMujeresImg from '../assets/images/pronto-mujeres.png'

export const Mujeres = () => {
    return (
        <div className='mujeres'>
            <div className='mujeres-hero'>
                <img className='mujeres-hero-img' src={portadaMujeres} alt="" />
            </div>

            <div className='mujeres-container'>
                <div className='mujeres-card'>
                    <img className='mujeres-card-img' src={prontoMujeresImg} alt="" />
                    <h3 className='mujeres-card-title'>Descubre lo nuevo</h3>
                    <p className='mujeres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='mujeres-card-link' href="">Ver Coleccion</a>
                </div>
                <div className='mujeres-card'>
                    <img className='mujeres-card-img' src={prontoMujeresImg} alt="" />
                    <h3 className='mujeres-card-title'>Descubre lo nuevo</h3>
                    <p className='mujeres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='mujeres-card-link' href="">Ver Coleccion</a>
                </div>
                <div className='mujeres-card'>
                    <img className='mujeres-card-img' src={prontoMujeresImg} alt="" />
                    <h3 className='mujeres-card-title'>Descubre lo nuevo</h3>
                    <p className='mujeres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='mujeres-card-link' href="">Ver Coleccion</a>
                </div>
                <div className='mujeres-card'>
                    <img className='mujeres-card-img' src={prontoMujeresImg} alt="" />
                    <h3 className='mujeres-card-title'>Descubre lo nuevo</h3>
                    <p className='mujeres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='mujeres-card-link' href="">Ver Coleccion</a>
                </div>
                <div className='mujeres-card'>
                    <img className='mujeres-card-img' src={prontoMujeresImg} alt="" />
                    <h3 className='mujeres-card-title'>Descubre lo nuevo</h3>
                    <p className='mujeres-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='mujeres-card-link' href="">Ver Coleccion</a>
                </div>
            </div>
        </div>
    )
}
