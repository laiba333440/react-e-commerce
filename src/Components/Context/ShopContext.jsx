import React, { createContext, useState } from 'react';
import all_products from "../Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [totalAmount, setTotalAmount] = useState(0); // New state for total amount

  // Define getTotalCartAmount function here
  const getTotalCartAmount = () => {
    let newTotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));
        newTotal += itemInfo.new_price * cartItems[item];
      }
    }
    return newTotal;
  };


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // Recalculate total after adding to cart
    calculateTotalAmount();
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // Recalculate total after removing from cart
    calculateTotalAmount();
  };

  const calculateTotalAmount = () => {
    setTotalAmount(getTotalCartAmount()); // Use the defined function
  };
const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems)
        {
            if(cartItems[item]>0)
                {
                    totalItem+= cartItems[item];
                }
        }
        return totalItem;
}
  const contextValue = {
    getTotalCartItems,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    totalAmount,
    getTotalCartAmount, // Include getTotalCartAmount here
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
