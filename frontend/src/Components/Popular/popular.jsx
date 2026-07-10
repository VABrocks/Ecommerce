import React from 'react'
import data from "../Assets/data"
import Item from '../Items/Item'
import "./popular.css"

const popular = () => {
  return (
    <div className='PopItems'>
        <div className='Popular'>
            <h1>Popular in Womens</h1>
            <hr />
        </div>
        <div className='ItemContainer'>
            {data.map((data,id)=>{
                return <Item id={data.id} name={data.name} image={data.image} old_price={data.old_price} new_price={data.new_price}/>
            })}
        </div>
    </div>
  )
}

export default popular