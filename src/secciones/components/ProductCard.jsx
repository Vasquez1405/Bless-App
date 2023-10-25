import React from 'react'

import '../../styles/ProductCard.css'

import pantsImg from '../../../assets/images/pants.jpg'
import { Link } from 'react-router-dom'

export const ProductCard = ({
  id,
  name,
  imageURL,
  category,
  price,

}) => {

  return (
    <div className='featured-product-container-article'>
      <div className='featured-product-container-article-main'>
        <img src={imageURL} alt={name} />
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
        <p><b>{name}</b></p>
        <p><b>$ {price}</b></p>
      </div>
      <Link to={`/product/${id}`}>
        Mas...
      </Link>
    </div>
  )
}
