import React from 'react'
import { productos } from '../data/productos'

export const getProductsByCategory = (category) => {
    const validCategorys = ['Buzo Hombres', 'Chaqueta Hombres', 'Gorra Hombres', 'Gorro Hombres']

    if (!validCategorys.includes(category)) {
        throw new Error(`${category} is not a valid category`)
    }

    return productos.filter(producto => producto.category === category)
}
