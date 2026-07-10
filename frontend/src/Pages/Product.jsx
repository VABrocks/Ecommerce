import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import DisplayProducts from '../Components/DisplayProducts/DisplayProducts'
import { useParams } from 'react-router-dom'
import ProductsDecription from '../Components/ProductsDecription/ProductsDecription'
import SimilarProducts from '../Components/SimilarProducts/SimilarProducts'

const Product = () => {
  const {all_products,AddtoCart}= useContext(ShopContext)
  const {productid}=useParams();
  const data = all_products.find((e)=>e.id===Number(productid))

  return (
    <div>
      <DisplayProducts id={data.id} name={data.name} image={data.image} old_price={data.old_price} new_price={data.new_price} category={data.category}/>
      <ProductsDecription/>
      <SimilarProducts category={data.category} id={data.id}/>
      {/* Decription Box */}
      {/* Related Images */}
    </div>
  )
}

export default Product