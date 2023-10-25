import React from 'react'

import '../../styles/Niños.css'
import portadaNiños from '../../../assets/images/portada-niños.png'
import prontoNiñosImg from '../../../assets/images/pronto-niños.png'
import { FeaturedProduct } from '../components/FeaturedProduct'

export const Niños = () => {
    return (
        <div className='niños'>
            <div className='niños-hero'>
                <img className='niños-hero-img' src={portadaNiños} alt="" />
            </div>

            <div className='niños-container'>
                <div className='niños-card'>
                    <img className='niños-card-img' src={prontoNiñosImg} alt="" />
                    <h3 className='niños-card-title'>Descubre lo nuevo</h3>
                    <p className='niños-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='niños-card-link' href="">Ver Coleccion</a>
                </div>
                <div className='niños-card'>
                    <img className='niños-card-img' src={prontoNiñosImg} alt="" />
                    <h3 className='niños-card-title'>Descubre lo nuevo</h3>
                    <p className='niños-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='niños-card-link' href="">Ver Coleccion</a>
                </div><div className='niños-card'>
                    <img className='niños-card-img' src={prontoNiñosImg} alt="" />
                    <h3 className='niños-card-title'>Descubre lo nuevo</h3>
                    <p className='niños-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='niños-card-link' href="">Ver Coleccion</a>
                </div><div className='niños-card'>
                    <img className='niños-card-img' src={prontoNiñosImg} alt="" />
                    <h3 className='niños-card-title'>Descubre lo nuevo</h3>
                    <p className='niños-card-info'>Le dimos al mundo un Original. Ustedes crearon miles</p>
                    <a className='niños-card-link' href="">Ver Coleccion</a>
                </div>
            </div>

            <FeaturedProduct seccion='Niños' />
        </div>
    )
}
