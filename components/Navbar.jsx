"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const [supabase] = useState(() => createClient());
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();

      setUser(data.user);
    }

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    setUser(null);
  }

  const cartCount = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <nav className="flex items-center justify-between border-b bg-green-600 px-6 py-4">
      <Link href="/" className="text-2xl font-bold">
        Grovio-Rebuild
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>

        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>

        {!user && (
          <>
            <Link href="/signup">Sign Up</Link>
            <Link href="/signin">Sign In</Link>
          </>
        )}

        {user && (
          <>
            <span className="font-semibold">
              {user.user_metadata?.username || user.email}
            </span>

            <button
              onClick={handleSignOut}
              className="cursor-pointer rounded-lg border px-3 py-1"
            >
              Sign Out
            </button>
          </>
        )}
        <Link href="/help">Help</Link>
        <Link href="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}
