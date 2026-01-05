import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    //add to cart function receives a product
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id);
    //if product exists and user clicks add, add another quantity
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      //if product does not exists add new item
      return [...prevItems, { ...product,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    //remove product(s) by id
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  };



  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};