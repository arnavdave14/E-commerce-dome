import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Loginsignup from './Pages/Loginsignup.jsx'
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';
import ShopContextProvider from './Context/ShopContext';  


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/Mens' element={<ShopCategory banner={men_banner} Category="men" />} />
            <Route path='/Womens' element={<ShopCategory banner={women_banner} Category="women" />} />
            <Route path='/Kids' element={<ShopCategory banner={kid_banner} Category="Kid" />} />
            <Route path="/Product/:ProductId" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Loginsignup />} />
          </Routes>
          <Footer />
        </ShopContextProvider> 
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
