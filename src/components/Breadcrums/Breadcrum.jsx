import React from 'react';
import { Breadcrumbody , Breadcrumimg , } from './Breadcrumstyle.js'
import arrow_icon from '../Assets/breadcrum_arrow.png'


const Breadcrum = (props) => {
        const { Product } = props;
    
  return (
    <Breadcrumbody>
    Home <Breadcrumimg src={arrow_icon} alt='' />
    SHOP <Breadcrumimg src={arrow_icon}  alt="" /> 
    {Product.name} 
    
    </Breadcrumbody>
  )
}

export default Breadcrum 