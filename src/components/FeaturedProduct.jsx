import React from 'react'
import './styles/FeaturedProduct.css'

import pantsImg from '../assets/images/pants.jpg'

export const FeaturedProduct = () => {
    return (
        <div className='featured-product'>
            <h2 className='featured-product-title'>Productos Destacados</h2>
            <div className='row featured-product-container'>
                <div className='col-md-1 featured-product-container-article'>
                    <div className='featured-product-container-article-main'>
                        <img src={pantsImg} alt="pants img" />
                        <div>
                            <form action="" className='form-group article-form'>
                                <select name="" id="">
                                    <option value="">Talla</option>
                                    <option value="">04</option>
                                    <option value="">06</option>
                                    <option value="">08</option>
                                </select>
                                <button className='btn btn-primary'>Agregar al carrito</button>
                            </form>
                        </div>
                    </div>
                    <div className='featured-product-container-article-info'>
                        <p><b>Pantalon Bota ancha</b></p>
                        <p><b>$ 89.900</b></p>
                    </div>
                </div>
                <div className='col-md-1 featured-product-container-article'>
                    <div className='featured-product-container-article-main'>
                        <img src={pantsImg} alt="pants img" />
                        <div>
                            <form action="" className='form-group article-form'>
                                <select name="" id="">
                                    <option value="">Talla</option>
                                    <option value="">04</option>
                                    <option value="">06</option>
                                    <option value="">08</option>
                                </select>
                                <button className='btn btn-primary'>Agregar al carrito</button>
                            </form>
                        </div>
                    </div>
                    <div className='featured-product-container-article-info'>
                        <p><b>Pantalon Bota ancha</b></p>
                        <p><b>$ 89.900</b></p>
                    </div>
                </div>
                <div className='col-md-1 featured-product-container-article'>
                    <div className='featured-product-container-article-main'>
                        <img src={pantsImg} alt="pants img" />
                        <div>
                            <form action="" className='form-group article-form'>
                                <select name="" id="">
                                    <option value="">Talla</option>
                                    <option value="">04</option>
                                    <option value="">06</option>
                                    <option value="">08</option>
                                </select>
                                <button className='btn btn-primary'>Agregar al carrito</button>
                            </form>
                        </div>
                    </div>
                    <div className='featured-product-container-article-info'>
                        <p><b>Pantalon Bota ancha</b></p>
                        <p><b>$ 89.900</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
