import React from 'react'
import {ReletadeProductbody , ReletadeProductitems ,  } from './ReletadeProductPagestyle.js'
import data_product from '../Assets/data.js'
import Item from '../Items/Item.jsx'


const ReletadeProductPage = () => {
  return (
    <ReletadeProductbody>
        <h3>Related Product</h3>
        <hr/>
        <ReletadeProductitems>
            {data_product.map((item,i)=>{
                return (
                    <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_Price={item.new_price} 
                    old_Price={item.old_price}  
                />
                )
            })}
        </ReletadeProductitems>
    </ReletadeProductbody>
  )
}

export default ReletadeProductPage