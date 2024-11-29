import React from 'react'
import { Footerbody , Footerlogo , FooterLinkbody , FooterLinks , FooterSocialicon , FooterSocialiconlink , Footercopyright , Footerpara } from './Footerstyle.js'
import { FaShopify } from "react-icons/fa";
import { FaInstagram , FaWhatsapp , FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Footerbody>
        <Footerlogo to='/'>
        <FaShopify size={56} />
        <span className='span'>My Store</span>
        </Footerlogo>
        <FooterLinkbody>
            <FooterLinks>Company</FooterLinks>
            <FooterLinks>Product</FooterLinks>
            <FooterLinks>Offices</FooterLinks>
            <FooterLinks>About</FooterLinks>
            <FooterLinks>Contact</FooterLinks>
        </FooterLinkbody>
        <FooterSocialicon>
            <FooterSocialiconlink>
            <FaInstagram size={26} color='black' />
            </FooterSocialiconlink>
            <FooterSocialiconlink>
            <FaWhatsapp size={26} color='black' />
            </FooterSocialiconlink>
            <FooterSocialiconlink>
            <FaXTwitter size={26} color='black' />
            </FooterSocialiconlink>
        </FooterSocialicon>
        <Footercopyright>
            <hr/>
            <Footerpara>Copyright @ 2024 - All Right Reserved.</Footerpara>
        </Footercopyright>
    </Footerbody>
)
}

export default Footer