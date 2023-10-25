import { useMemo } from 'react'

import '../../styles/FeaturedProduct.css'

import { getProductsBySeccion } from '../helpers'
import { ProductCard } from './ProductCard'

export const FeaturedProduct = ({ seccion }) => {

    const productos = useMemo(() => getProductsBySeccion(seccion), [seccion])

    return (
        <div className='featured-product row rows-cols-1 row-cols-md-3 g-3'>
            {/* <h2 className='featured-product-title'>Productos Destacados</h2>
            <div className='featured-product-container row'>
                <ProductCard />
            </div> */}
            {
                productos.map(producto => (
                    <ProductCard key={producto.id}
                        {...producto}
                    />
                ))
            }
        </div>
    )
}
