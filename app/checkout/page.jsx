"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { CartContext } from "@/context/CartContext";

export default function Checkout() {
  const { cart, total } = useContext(CartContext);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [checkingUser, setCheckingUser] = useState(true);

  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function checkUser() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.push("/signin");
        return;
      }

      setCheckingUser(false);
    }

    checkUser();
  }, [router, supabase]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!name || !address || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData.user) {
      alert("You must be signed in.");
      router.push("/signin");
      return;
    }

    const { error } = await supabase.from("orders").insert({
      user_id: userData.user.id,
      customer_name: name,
      address: address,
      phone: phone,
      items: cart,
      total: total,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Order placed successfully!");
    router.push("/");
  }

  if (checkingUser) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p>Checking login...</p>
      </main>
    );
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

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
