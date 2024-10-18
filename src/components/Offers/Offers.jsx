import React from 'react'
import './Offers.css'
import { Offerss , Offersleft , Offersright , Offersimg , OffersBtn , } from './Offersstyle.js'
import exclusive_image from '../Assets/exclusive_image.png'
 
const Offers = () => {
  return (
    <Offerss>
        <Offersleft>
            <h1>Exclusive</h1>
            <h1>Offers For You </h1>
            <p>ONLY ON BESTSELLER PRODUCT </p>
            <OffersBtn>Check Now</OffersBtn>
        </Offersleft>
        <Offersright>
            <Offersimg src={exclusive_image} alt="exclusive_image"/>
        </Offersright>
    </Offerss>
  )
}

export default Offers