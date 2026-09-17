"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.name === product.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  }

  function increaseQuantity(productName) {
    const updatedCart = cart.map((item) => {
      if (item.name === productName) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(productName) {
    const updatedCart = cart
      .map((item) => {
        if (item.name === productName) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }

  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
