import React from 'react'
import styled from 'styled-components'
import { Navbody , Logo , Ulbody , Lilinks , NavBtnSec , LogBtn , CartBtn   } from './Navbar.style'
import { FaShopify ,  FaShoppingCart  } from "react-icons/fa";


const Navbar = () => {
  return (
   <React.Fragment>
    <Navbody>
      <Logo>
        <FaShopify size={36} />
        <span className='span'>My Store</span>
      </Logo>
      <Ulbody>
        <Lilinks>Shop</Lilinks>
        <Lilinks>Men</Lilinks>
        <Lilinks>Women</Lilinks>
        <Lilinks>Kid</Lilinks>
      </Ulbody>
      <NavBtnSec>
      <LogBtn>Login</LogBtn>
      <CartBtn> <FaShoppingCart  size={26} /></CartBtn>
      </NavBtnSec>
    </Navbody>
   </React.Fragment>
  )
}

export default Navbar