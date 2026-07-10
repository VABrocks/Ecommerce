import React from 'react'
import "./Shop.css"
import { Hero } from '../Components/Hero/Hero'
import Popular from "../Components/Popular/popular"
import Offers from '../Offers/Offers'
import NewItems from '../Components/NewItems/NewItems'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div style={{display:"flex",gap:"20px", flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
        <Hero/>  
        <Popular/>
        <Offers/>
        <NewItems/>
        <NewsLetter/>
    </div>

  )
}

export default Shop