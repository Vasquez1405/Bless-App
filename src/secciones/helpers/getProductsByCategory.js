import { productos } from '../data/productos'

export const getProductsByCategory = (category) => {
    const validCategorys = ['Buzo', 'Chaqueta', 'Gorra', 'Gorro']

    if (!validCategorys.includes(category)) {
        throw new Error(`${category} is not a valid category`)
    }

    return productos.filter(producto => producto.category === category)
}
