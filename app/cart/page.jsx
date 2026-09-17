"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, total } =
    useContext(CartContext);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">Your Cart</h1>

      <p className="mb-6">Items in cart: {cart.length}</p>

      {cart.map((product) => {
        return (
          <div
            key={product.name}
            className="mb-3 flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <h2 className="font-semibold">{product.name}</h2>

              <p className="text-gray-600">
                ₹{product.price} × {product.quantity}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(product.name)}
                className="rounded-lg border px-3 py-1"
              >
                −
              </button>

              <span>{product.quantity}</span>

              <button
                onClick={() => increaseQuantity(product.name)}
                className="rounded-lg border px-3 py-1"
              >
                +
              </button>

              <p className="font-bold">₹{product.price * product.quantity}</p>
            </div>
          </div>
        );
      })}

      <h2 className="mt-6 text-2xl font-bold">Total: ₹{total}</h2>
      <Link
        href="/checkout"
        className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white"
      >
        Proceed to Checkout
      </Link>
    </main>
  );
}
