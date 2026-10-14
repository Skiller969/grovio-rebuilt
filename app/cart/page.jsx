"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-3xl font-bold">Your cart</h1>
      <p className="mt-2 text-gray-600">{itemCount} {itemCount === 1 ? "item" : "items"}</p>

      {cart.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-green-100 bg-white p-10 text-center">
          <h2 className="text-xl font-bold">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Add a few things from the products page to get started.</p>
          <Link href="/products" className="mt-6 inline-block rounded-xl bg-green-700 px-6 py-3 font-semibold text-white">Browse products</Link>
        </div>
      ) : (
        <>
          <div className="mt-8 space-y-3">
            {cart.map(product => (
              <div key={product.name} className="flex flex-col gap-4 rounded-2xl border border-green-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-bold">{product.name}</h2>
                  <p className="mt-1 text-sm text-gray-600">₹{product.price} each</p>
                </div>
                <div className="flex items-center justify-between gap-5 sm:justify-end">
                  <div className="flex items-center gap-3">
                    <button type="button" aria-label={"Remove one " + product.name} onClick={() => decreaseQuantity(product.name)} className="rounded-lg border px-3 py-1">−</button>
                    <span aria-live="polite">{product.quantity}</span>
                    <button type="button" aria-label={"Add one " + product.name} onClick={() => increaseQuantity(product.name)} className="rounded-lg border px-3 py-1">+</button>
                  </div>
                  <p className="min-w-20 text-right font-bold">₹{product.price * product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-6">
            <p className="text-2xl font-bold">Total: ₹{total}</p>
            <Link href="/checkout" className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800">Proceed to checkout →</Link>
          </div>
        </>
      )}
    </main>
  );
}
