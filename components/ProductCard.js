"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProductCard({ name, price, image }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="rounded-2xl border p-6">
      <Image
        src={image}
        alt={name}
        className="rounded-xl"
        width={300}
        height={200}
      />
      <h2 className="font-semibold text-xl mt-4">{name}</h2>
      <p className="mt-2 text-lg text-gray-600">₹{price}</p>
      <button
        onClick={() => setAdded(true)}
        className="mt-4 rounded-full bg-green-600 px-5 py-2 font-medium text-white"
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
