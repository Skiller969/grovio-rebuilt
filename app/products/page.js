"use client";

import ProductCard from "@/components/ProductCard";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function Products() {
  const { cart, addToCart } = useContext(CartContext);

  const products = [
    {
      name: "Apple",
      price: 50,
      image: "/apple.jpeg",
    },
    {
      name: "Banana",
      price: 40,
      image: "/banana.png",
    },
    {
      name: "Milk",
      price: 60,
      image: "/milk.png",
    },
    {
      name: "Bread",
      price: 45,
      image: "/bread.png",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">Products</h1>

      {/* Products */}
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
    </main>
  );
}
