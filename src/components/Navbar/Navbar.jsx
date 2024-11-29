import React, { useContext } from 'react';
import { Navbody, Logo, Ulbody, Lilinks, NavBtnSec, LogBtn, CartBtn, Navcartcount } from './Navbar.style';
import { FaShopify, FaShoppingCart } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => { 
  const { getTotalCartItem } = useContext(ShopContext);


  return (
   <React.Fragment>
    <Navbody>
      <Logo to="/">
        <FaShopify size={36} />
        <span className='span'>My Store</span>
      </Logo>

      <Ulbody>
        <Lilinks to='/'>Shop</Lilinks>
        <Lilinks to='/Mens'>Men</Lilinks>
        <Lilinks to='/Womens'>Women</Lilinks>
        <Lilinks to='/Kids'>Kid</Lilinks>
      </Ulbody>
      <NavBtnSec>
      <LogBtn to='/login'>Login</LogBtn>
      <CartBtn to="/cart">
        <FaShoppingCart size={26} />
        <Navcartcount>{getTotalCartItem()}</Navcartcount>
      </CartBtn>
      </NavBtnSec>
    </Navbody>
   </React.Fragment>
  )
};

export default Navbar;
