import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import CartItems from '../Components/CartItems/CartItems';
import "./Cart.css"
import CartSubSection from '../Components/CartSubSection/CartSubSection';
import all from 'all';
import PaymentMode from './PaymentMode';

const Cart = () => {
  const { cart, all_products } = useContext(ShopContext);
  const cartItems = Object.keys(cart);
  let hasItems = cartItems.some((productid) => cart[productid] > 0);

  return (
    <div className="cartContainer" >
      {
        <div className="cart-subContainer" >
          <h2>Your Cart</h2>

      
      <div className='Cart-products'>
        {
        cartItems.map((productid)=>{
          if(cart[productid]===0){
            return null
          }
          else{
            const product=all_products.find((e)=>Number(productid)===e.id);
            return <CartItems key={product.id} id={product.id} name={product.name} image={product.image} new_price={product.new_price} quantity={cart[productid]} />
          }
           
        }
        )
      }
        </div>

      
{hasItems && <CartSubSection cart={cart} all_products={all_products}/>}

      {hasItems &&<PaymentMode/>}
        </div>
      }
    </div>
  )
}

export default Cart