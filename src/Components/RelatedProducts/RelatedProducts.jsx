import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data' // Import data_product
import Item from '../Items/Item'

const RelatedProducts = () => {
  // console.log(data_product); // Optional: You can uncomment this to check the data_product content in the console

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-items">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
