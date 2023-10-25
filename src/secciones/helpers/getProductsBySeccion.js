import { productos } from '../data/productos'

export const getProductsBySeccion = (seccion) => {
    const validSeccion = ['Hombres', 'Mujeres', 'Niños']

    if (!validSeccion.includes(seccion)) {
        throw new Error(`${seccion} is not a valid category`)
    }

    return productos.filter(producto => producto.seccion === seccion)
}