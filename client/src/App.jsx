import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import CartTotal from './components/cart/CartTotal';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
