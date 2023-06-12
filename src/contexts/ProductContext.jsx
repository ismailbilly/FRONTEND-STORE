import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext()


const ProductProvider =({children})=>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts= async()=>{
            const response = await axios('https://fakestoreapi.com/products')
            console.log(response)
            setProducts(response.data)
        }
        fetchProducts()
    }, [])
    return (
      <ProductContext.Provider value={{ products }}>
        {children}
      </ProductContext.Provider>
    );
  

}

export default ProductProvider