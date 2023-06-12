import React, { useContext, useEffect, useState } from 'react'
import {ProductContext} from '../contexts/ProductContext'
import Card from '../components/card/Card';
const Homepage = () => {
    const {products} = useContext(ProductContext)
  
  return (
    <div>
      {products.map((product)=>{
        return (
          <div key={product.id}>
            <div className="card-container">
              <img src={product.image} alt="" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage