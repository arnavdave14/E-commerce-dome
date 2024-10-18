import React from 'react'
import {Iitem , Itemimg , Itemprices , Itempricenew , Itempriceold } from './Itemstyle.js'
import './Item.css'

const Item = (props) => {
  return (
    <Iitem>
        <Itemimg src={props.image} alt=""/>
        <p>{props.name}</p>
        <Itemprices>
            <Itempricenew>
                ${props.new_Price}
            </Itempricenew>
            <Itempriceold>
                ${props.old_Price}
            </Itempriceold>
        </Itemprices>
    </Iitem>
  )
}

export default Item