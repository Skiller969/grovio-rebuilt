"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { CartContext } from "@/context/CartContext";

export default function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext);
  const [supabase] = useState(() => createClient());
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [checkingUser, setCheckingUser] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    let active = true;
    async function checkUser() {
      const { data, error } = await supabase.auth.getUser();
      if (!active) return;
      if (error || !data.user) {
        router.replace("/signin");
        return;
      }
      setCheckingUser(false);
    }
    checkUser().catch(() => {
      if (active) router.replace("/signin");
    });
    return () => { active = false; };
  }, [router, supabase]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting) return;
    setMessage("");
    if (cart.length === 0) {
      setMessage("Your cart is empty. Add something before checking out.");
      return;
    }
    if (!name.trim() || !address.trim() || !/^[0-9]{10}$/.test(phone.trim())) {
      setMessage("Enter your name, address and a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);
    try {
      const { data, error: authError } = await supabase.auth.getUser();
      if (authError || !data.user) {
        router.push("/signin");
        return;
      }
      const { error } = await supabase.from("orders").insert({
        user_id: data.user.id,
        customer_name: name.trim(),
        address: address.trim(),
        phone: phone.trim(),
        items: cart,
        total,
      });
      if (error) {
        setMessage("Could not place the order: " + error.message);
        return;
      }
      clearCart();
      router.push("/");
      alert("Order placed successfully!");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (checkingUser) {
    return <main className="mx-auto max-w-3xl px-6 py-16"><p>Checking your account...</p></main>;
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <p className="mt-2 text-gray-600">Review your cart and enter your details below.</p>
      {cart.length === 0 ? (
        <div className="mt-8 rounded-2xl border bg-white p-8">
          <p>Your cart is empty.</p>
          <Link href="/products" className="mt-4 inline-block font-semibold text-green-700 underline">Browse products</Link>
        </div>
      ) : (
        <>
          <div className="mt-8 space-y-3">
            {cart.map(product => (
              <div key={product.name} className="flex justify-between gap-4 rounded-xl border border-green-100 bg-white p-4">
                <div><h2 className="font-semibold">{product.name}</h2><p className="text-sm text-gray-600">₹{product.price} × {product.quantity}</p></div>
                <p className="font-bold">₹{product.price * product.quantity}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-2xl font-bold">Total: ₹{total}</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-2xl border border-green-100 bg-white p-6">
            <div><label htmlFor="customer-name" className="mb-2 block font-semibold">Full name</label><input id="customer-name" required maxLength={100} autoComplete="name" value={name} onChange={event => setName(event.target.value)} className="w-full rounded-lg border p-3" /></div>
            <div><label htmlFor="customer-address" className="mb-2 block font-semibold">Delivery address</label><textarea id="customer-address" required maxLength={500} rows={3} autoComplete="street-address" value={address} onChange={event => setAddress(event.target.value)} className="w-full rounded-lg border p-3" /></div>
            <div><label htmlFor="customer-phone" className="mb-2 block font-semibold">Phone number</label><input id="customer-phone" type="tel" required inputMode="numeric" pattern="[0-9]{10}" maxLength={10} autoComplete="tel-national" placeholder="10-digit mobile number" value={phone} onChange={event => setPhone(event.target.value)} className="w-full rounded-lg border p-3" /></div>
            {message && <p role="alert" className="text-sm text-red-700">{message}</p>}
            <button type="submit" disabled={submitting} className="w-full rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800">{submitting ? "Placing order..." : "Place order"}</button>
          </form>
        </>
      )}
    </main>
  );
}
