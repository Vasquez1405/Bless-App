import React from 'react'

import '../../styles/FeaturedProduct.css'

import { ProductCard } from './ProductCard'

export const FeaturedProduct = () => {

    return (
        <div className='featured-product'>
            <h2 className='featured-product-title'>Productos Destacados</h2>
            <div className='featured-product-container row'>
                <ProductCard />
            </div>
        </div>
    )
}
