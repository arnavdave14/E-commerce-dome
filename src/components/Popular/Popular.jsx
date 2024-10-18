import React from 'react'
import './Popular.css'
import { Poopular , Popularitems ,  } from './Popularstyle.js'
import data_product from '../Assets/data.js'
import Item from '../Items/Item.jsx'

const Popular = () => {
  return (
    <Poopular>
        <h1>Popular in Women </h1>
        <hr/>
        <Popularitems>
        {data_product.map((item, i) => (
        <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_Price={item.new_price} 
            old_Price={item.old_price}  
        />
            ))}
        </Popularitems>
    </Poopular>
  )
}

export default Popular