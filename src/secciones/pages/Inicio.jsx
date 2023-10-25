import React from 'react'

import '../../styles/Inicio.css'

import portadaInicioImg from '../../../assets/images/portada-inicio.png'
import seccionHombreImg from '../../../assets/images/seccion-hombre.png'
import seccionMujerImg from '../../../assets/images/seccion-mujer.png'
import seccionNiñosImg from '../../../assets/images/seccion-niño.jpg'
import articulosBuzoImg from '../../../assets/images/buzo.jpg'

export const Inicio = () => {
    return (
        <div className='inicio'>
            <div className='inicio-hero'>
                <img className='inicio-hero-img' src={portadaInicioImg} alt="" />
                <button className='inicio-hero-button'>VER AHORA</button>
            </div>
            <div className='secciones-container'>
                <div className='secciones-card'>
                    <img className='secciones-card-img' src={seccionHombreImg} alt="" />
                    <h3 className='secciones-card-title'>Hombres</h3>
                    <a className='secciones-card-link' href="">COMPRAR AHORA</a>
                </div>
                <div className='secciones-card'>
                    <img className='secciones-card-img' src={seccionMujerImg} alt="" />
                    <h3 className='secciones-card-title'>MUJERES</h3>
                    <a className='secciones-card-link' href="">COMPRAR AHORA</a>
                </div>
                <div className='secciones-card'>
                    <img className='secciones-card-img' src={seccionNiñosImg} alt="" />
                    <h3 className='secciones-card-title'>NIÑOS</h3>
                    <a className='secciones-card-link' href="">COMPRAR AHORA</a>
                </div>
            </div>
            <div className='articulos'>
                <h2 className=' articulos-title'>CONOCE NUESTROS PRODUCTOS</h2>
                <div className='articulos-container row'>
                    <div className='articulos-card col-5'>
                        <img className='articulos-card-img' src={articulosBuzoImg} alt="" />
                        <a className='articulos-card-link' href="">BUZOS</a>
                    </div>
                    <div className='articulos-card col-5'>
                        <img className='articulos-card-img' src={articulosBuzoImg} alt="" />
                        <a className='articulos-card-link' href="">CHAQUETAS</a>
                    </div>
                    <div className='articulos-card col-5'>
                        <img className='articulos-card-img' src={articulosBuzoImg} alt="" />
                        <a className='articulos-card-link' href="">GORROS</a>
                    </div>
                    <div className='articulos-card col-5'>
                        <img className='articulos-card-img' src={articulosBuzoImg} alt="" />
                        <a className='articulos-card-link' href="">GORRAS</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
