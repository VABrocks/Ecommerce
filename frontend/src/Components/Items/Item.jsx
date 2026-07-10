import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='Items'>
        <div className='section1'>
            <Link to={`/product/${props.id}`}>
            <img onClick={window.scrollTo({top:0,behavior:"smooth"})} src={props.image} alt="" />
            </Link>
        </div>
        <div className='section2'>
            <h6 >{props.name}</h6>
            <div className='price'>
              <p className='new_price'>₹{props.new_price}</p>
              <p className='old_price'>₹{props.old_price}</p>
              </div>
        </div>

    </div>
  )
}

export default Item