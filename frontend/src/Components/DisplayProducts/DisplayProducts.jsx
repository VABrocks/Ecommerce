import React, { useContext } from 'react'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import "./DisplayProducts.css"
import { ShopContext } from '../../Context/ShopContext'



const DisplayProducts = (props) => {
    const {AddtoCart}=useContext(ShopContext)
  return (
    <div className='ProductsDisplayContainer'>
        <div className="leftProductDisplayImages">
            
            <div className='leftProductDisplayImages_SideImages'>
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
            </div>
            <div className='leftProductDisplayMainImage'>
            <img src={props.image} alt="" />

            </div>
        </div>
        <div className="rightProductDisplay">
            <div className="rightProductDisplayNamePrice">
                {props.name}
            </div>
            <div className="rightProductDisplayRatings">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
            </div>
            <div className="rightProductDisplayPrice">
                <h3 className='og'>{props.old_price}   </h3>
                <h3>{props.new_price}   </h3>
            </div>
            <div className="rightProductDisplayDescription">
                Elegant and comfortable blouse crafted from premium fabric, perfect for everyday wear and special occasions.
            </div>
            <b>

            Select Size
            </b>
            <div className="Size">
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
            </div>
            <div className='AddtoCart'>
                <button onClick={()=>AddtoCart(props.id)}>Add to Cart</button>
                <p>Category: {props.category}</p>
                Tags: New Arrival,Best Seller,Trending,Limited Edition
            </div>

        </div>

        
    </div>
  )
}

export default DisplayProducts