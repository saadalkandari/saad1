import React from 'react'
import Products from './Products'
import products from '../products'

const ProductList = () => {
    return (
      <div>
      {products.map((Product) => (<Products Product={Product}/>))}
      </div>
        
    )
}

export default ProductList
