"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";

export default function Checkout() {
  const { cart, total } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !address || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Order placed successfully!");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="space-y-4">
        {cart.map((product) => {
          return (
            <div
              key={product.name}
              className="flex justify-between rounded-xl border p-4"
            >
              <div>
                <h2 className="font-semibold">{product.name}</h2>

                <p className="text-gray-600">
                  ₹{product.price} × {product.quantity}
                </p>
              </div>

              <p className="font-bold">₹{product.price * product.quantity}</p>
            </div>
          );
        })}
      </div>

      <h2 className="mt-8 text-2xl font-bold">Total: ₹{total}</h2>
      <form className="mt-8 space-y-4 " onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Full Name"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white"
        >
          Place Order
        </button>
      </form>
    </main>
  );
}
