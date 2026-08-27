"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ name, price, image, addToCart }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="rounded-2xl border p-6">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="mx-auto h-40 w-40 object-contain"
      />

      <h2 className="mt-4 text-xl font-semibold">{name}</h2>

      <p className="mt-2 text-gray-600">₹{price}</p>

      <button
        onClick={() => {
          setAdded(true);

          addToCart({
            name,
            price,
            image,
            quantity: 1,
          });
        }}
        className="mt-4 rounded-xl border px-4 py-2"
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
