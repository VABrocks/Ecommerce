import React, { useContext } from 'react'
import cart_cross_icon from "../Assets/cart_cross_icon.png"
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext';
const CartItems = (props) => {

    const totalPrice=props.new_price*props.quantity;
    const {RemoveFromCart}=useContext(ShopContext)
  return (
    <div className='CartItem_Container'>
        <div className="prod_img">
            <img src={props.image} alt="" />
        </div>
        <div className="prodNamePrice">
            <h2>{props.name}</h2>
            <h3>Rs {props.new_price}</h3>
        </div>
        <div className='Quantity'>
            <p>Quantity: {props.quantity}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
        <img src={cart_cross_icon} onClick={()=>{RemoveFromCart(props.id)}} alt="" id='cart_cross_icon' />
    </div>
  )
}

export default CartItems