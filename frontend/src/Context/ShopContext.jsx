import React, { createContext, useEffect, useState } from 'react'
import all_products from "../Components/Assets/all_product"

export const ShopContext=createContext(null);
const ShopContextProvider=(props)=>{
    const [cart,setCart]=useState({})
    const [cartNumber,CartItemNumber]=useState(0)
    const AddtoCart=(productid)=>{
        setCart((prev_cart)=>({
            ...prev_cart,
            [productid]:(prev_cart[productid]||0)+1,
        }))
        // console.log(cart)
    }
    const RemoveFromCart=(productid)=>{
        setCart((prev_cart)=>({
            ...prev_cart,[productid]:(prev_cart[productid]-1)        }))
    }
    useEffect(()=>{
        let total=0;    
        for (let qty of Object.values(cart)){
            total+=qty;
        }
        CartItemNumber(total)},[cart])

    

    const contextValue={all_products,cart,AddtoCart,RemoveFromCart,cartNumber};
// const 
    return(<ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>)
}
export default ShopContextProvider
