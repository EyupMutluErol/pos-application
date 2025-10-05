import { useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import CartTotal from './components/cart/CartTotal';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import BillPage from './pages/BillPage';
import CustomerPage from './pages/CustomerPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/bills' element={<BillPage/>}/>
        <Route path='/customers' element={<CustomerPage/>}/>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
