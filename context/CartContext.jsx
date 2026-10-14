"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(current => {
      const existing = current.find(item => item.name === product.name);
      if (existing) {
        return current.map(item => item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item);
      }
      return [...current, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(name) {
    setCart(current => current.map(item => item.name === name
      ? { ...item, quantity: item.quantity + 1 }
      : item));
  }

  function decreaseQuantity(name) {
    setCart(current => current
      .map(item => item.name === name ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0));
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
