import React from 'react'
import styled from 'styled-components'
import { Navbody , Logo , Ulbody , Lilinks , NavBtnSec , LogBtn , CartBtn   } from './Navbar.style'
import { FaShopify ,  FaShoppingCart  } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
  <React.Fragment>
    <Navbody>
      <Logo to='/'>
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
        <Link to ='/login'>
          <LogBtn>Login</LogBtn>
        </Link>
      <CartBtn to='/cart'> <FaShoppingCart  size={26} /></CartBtn>
      </NavBtnSec>
    </Navbody>
  </React.Fragment>
  )
}

export default Navbar