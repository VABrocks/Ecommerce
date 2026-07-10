import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Items/Item'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import "./ShopCategory.css"

const ShopCategory = (props) => {
  const {all_products,AddtoCart}=useContext(ShopContext)
  return (
    <div className='shopcategory-container'>
      <img className="banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
      <div className="shopcategory-sort">
       <div className='sortbtn'>
        Sort by <img src={dropdown_icon} alt="" />
        </div> 
        <div className="dropdown_menu">
            <a>Price</a>
            <a>New</a>
        </div>
      </div>
      </div>
      <div className="categorialImages">
        {
          
            all_products.map((data,id)=>{
              if(props.category===data.category){
                return <Item key={id} id={data.id} name={data.name} image={data.image} old_price={data.old_price} new_price={data.new_price}/>
              }
              else return null;
            })
          }
      </div>
      <div className="explore">
        <button> Explore More </button>
      </div>
    </div>
  )
}

export default ShopCategory