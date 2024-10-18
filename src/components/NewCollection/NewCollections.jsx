import React from 'react'
import './NewCollections.css'
import { NewCollectionsbody , Collections } from './NewCollectionsstyle.js'
import new_collections from '../Assets/new_collections.js'
import Item from '../Items/Item.jsx'


const NewCollections = () => {
  return (
    <NewCollectionsbody>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <Collections>
        {new_collections.map((item,i)=>{
            return<Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_Price={item.new_price} 
            old_Price={item.old_price}  
        />
        })}
        </Collections>
    </NewCollectionsbody>
  )
}

export default NewCollections