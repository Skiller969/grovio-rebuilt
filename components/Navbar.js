"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex items-center justify-between border-b px-6 py-4 bg-green-600">
      <Link href="/" className="text-2xl font-bold">
        Grovio
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>

        <Link href="/products">Products</Link>
        <Link href="/signUp">Sign up</Link>

        <Link href="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}
