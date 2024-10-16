import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from'./Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Loginsignup from './Pages/Loginsignup.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/'element={<Shop/>} />
      <Route path='/Men'element={<ShopCategory Category="men"/>} />
      <Route path='/Women'element={<ShopCategory Category="Wonmen"/>} />
      <Route path='/Kid'element={<ShopCategory Category="Kid"/>} />
      <Route path='/Product'element={<Product/>}>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/Login' element={<Loginsignup/>}/> 
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
