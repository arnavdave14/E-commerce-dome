import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollection/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'


const Shop = () => {
  return (
    <React.Fragment>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>                                            
    </React.Fragment>
  )
}

export default Shop