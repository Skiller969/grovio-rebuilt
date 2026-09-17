"use client";

import ProductCard from "@/components/ProductCard";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import products from "@/data/products.json";

export default function Products() {
  const { addToCart } = useContext(CartContext);

  const categories = ["Fruits", "Vegetables", "Dairy", "Bakery", "Snacks"];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-12 text-3xl font-bold">Products</h1>

      {categories.map((category) => {
        const categoryProducts = products.filter((product) => {
          return product.category === category;
        });

        return (
          <section key={category} className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-green-700">
              {category}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    addToCart={addToCart}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
