"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ name, price, image, addToCart }) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart({ name, price, image, quantity: 1 });
    setAdded(true);
  }

  return (
    <article className="flex flex-col rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
      <div className="flex h-48 items-center justify-center rounded-xl bg-green-50 p-4">
        <Image src={image} alt={name} width={200} height={200} className="h-40 w-40 object-contain" />
      </div>
      <h2 className="mt-5 text-lg font-bold">{name}</h2>
      <p className="mt-2 font-semibold text-green-800">₹{price}</p>
      <button onClick={handleAdd} className="mt-5 rounded-xl bg-green-700 px-4 py-3 font-semibold text-white hover:bg-green-800">
        {added ? "Add another +" : "Add to cart +"}
      </button>
    </article>
  );
}
