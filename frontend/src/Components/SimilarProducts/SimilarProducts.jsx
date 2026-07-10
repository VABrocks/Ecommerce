import React, { useContext } from 'react'
import "./SimilarProducts.css"
import { ShopContext } from '../../Context/ShopContext'
import Item from '../Items/Item'
const SimilarProducts = (props) => {
    const {all_products}=useContext(ShopContext)

    const data=all_products.filter((e)=>e.category===props.category&&props.id!==e.id);
  return (<>
    <div className='SimilarProducts'>
        <h2>
        Similar Products
        </h2>
    </div>

    <div className='SimilarProducts'>
        {data.slice(0,4).map((e,id)=>

<Item key={e.id} id={e.id} name={e.name} image={e.image} old_price={e.old_price} new_price={e.new_price} category={e.category}/>
            )}
        
    </div>
            </>
  )
}

export default SimilarProducts