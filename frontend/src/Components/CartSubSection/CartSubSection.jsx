import React from 'react'
import "./CartSubSection.css"
const CartSubSection = (props) => {
  const {cart,all_products}=props;
  const Shipping=(subtotal)=>{
    if (subtotal<100){
      return 99
    }
    else{
      return 0    }
  }
  const Total=()=>{
    let subtotal=SubTotal()
    let shipping=Shipping(subtotal)
    return (subtotal+shipping)
  }
  const SubTotal=()=>{
    let subtotal=0;
    if(cart){
      Object.keys(cart).forEach(productid => {
        const quantity=cart[productid];
        if(quantity>0){
          const product=all_products.find((p)=>p.id===Number(productid))
          if(product){
            subtotal+=product.new_price*quantity;
          }
        }
        
      });
      return subtotal;
    }
  }
  return (
    <div className='CartSubSection'>
        <div className="cartTotal">
            <p>SubTotal {SubTotal()}</p>
            <p>Shipping {Shipping(SubTotal())}</p>
            <hr />
            <p>Total {Total()}</p>
        </div>
        <div>

        <div className="Promocode">
            <input type="text" placeholder='Enter Promo Code'/>
            <button>Apply</button>
        </div>
        </div>
    </div>
  )
}

export default CartSubSection