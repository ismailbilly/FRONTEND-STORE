import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import LoginPage from './pages/LoginPage'
import Fallback from './pages/Fallback'

function App() {
  return(
    <BrowserRouter> 
    
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route element={<Layout/>}>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
      <Route path='*' element={<Fallback/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
