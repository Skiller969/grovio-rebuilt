"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const products = [
    { name: "Apple", price: 50, image: "/apple.jpeg" },
    { name: "Banana", price: 40, image: "/banana.png" },
    { name: "Milk", price: 60, image: "/milk.png" },
    { name: "Bread", price: 45, image: "/bread.png" },
  ];
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
  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  return (
    <main className="mx-auto py-16 px-6 max-w-5xl">
      <h1 className="mb-8 text-3xl font-bold">Products</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
              addToCart={addToCart}
            />
          );
        })}
      </div>
      <div className="mt-10">
        <p>Items in cart: {cart.length}</p>

        <div className="mt-4">
          {cart.map((product) => {
            return (
              <p key={product.name}>
                {product.name} - ₹{product.price * product.quantity}
              </p>
            );
          })}

          <h3 className="mt-4 text-xl font-bold">Total: ₹{total}</h3>
        </div>
      </div>
    </main>
  );
}
