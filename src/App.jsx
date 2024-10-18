import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from'./Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Loginsignup from './Pages/Loginsignup.jsx';
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'





function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/'element={<Shop/>} />
      <Route path='/Mens'element={<ShopCategory banner={men_banner} Category="men"/>} />
      <Route path='/Womens'element={<ShopCategory banner={women_banner} Category="Wonmen"/>} />
      <Route path='/Kids'element={<ShopCategory banner={kid_banner} Category="Kid"/>} />
      <Route path='/Product'element={<Product/>}>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Login' element={<Loginsignup/>}/> 
      </Routes>
      <Footer/> 
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
