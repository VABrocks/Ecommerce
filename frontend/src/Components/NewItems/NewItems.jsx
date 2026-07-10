import React from 'react'
import new_collections from '../Assets/new_collections';
import Item from '../Items/Item';
import "./NewItems.css"
const NewItems = () => {
  return (
    <div className='NewItems'>
        <div style={{}} className='New'>
            <h1>New Arrivals</h1>
            <hr />
        </div>
        <div className="newCollection">
            {new_collections.map((data,id)=>{
                return <Item id={data.id} name={data.name} image={data.image} old_price={data.old_price} new_price={data.new_price}/>
            })}
        </div>
    </div>
  )
}

export default NewItems
