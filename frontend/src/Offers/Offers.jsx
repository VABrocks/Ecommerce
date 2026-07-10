import React from 'react'
import exclusive_image from "../Components/Assets/exclusive_image.png"
import "./Offers.css"
const Offers = () => {
  return (
    <div>
        <div className="offers">

        <div className="offers_subsection">
            <div className="leftOffer">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            </div>
            <div className="offer">
                  
            </div>
            <div className="rightOffer">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Offers