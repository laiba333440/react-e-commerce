import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';
import { ShopContext } from '../Components/Context/ShopContext';

const ShopCategory = (props) => {
  const { all_products, isLoading } = useContext(ShopContext);
  console.log("all_products:", all_products);


  // Filter products based on category before mapping (if all_products are available)
  const filteredProducts = isLoading ? [] : all_products.filter(
    (product) => product.category === props.category
  );

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      {isLoading && ( // Display loading message if data is being fetched
        <p>Loading products...</p>
      )}

      {!isLoading && filteredProducts.length === 0 && ( // Display message if no products found
        <p>No products found in this category.</p>
      )}

      {!isLoading && filteredProducts.length > 0 && ( // Render products if data is loaded and products exist
        <div className="shopcategory-products">
          {filteredProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id} // Use item.id instead of item.item (assuming id is the unique identifier)
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
