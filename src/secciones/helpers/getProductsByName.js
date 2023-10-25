import React from 'react'
import { productos } from '../data/productos';

export const getProductsByName = (name = '') => {

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];

    return productos.filter(
        producto => producto.name.toLocaleLowerCase().includes(name)
    );
}
