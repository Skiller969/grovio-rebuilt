"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { createClient } from "@/lib/supabase/client";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [supabase] = useState(() => {
    try { return createClient(); } catch { return null; }
  });

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => setUser(data.user)).catch(() => {});
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, [supabase]);

  async function handleSignOut() {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) { alert(error.message); return; }
    setUser(null);
    setMenuOpen(false);
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/help", label: "Help" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4" aria-label="Main navigation">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-green-800">
          grovio<span className="text-lime-500">.</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {links.map(link => <Link key={link.href} href={link.href} className="hover:text-green-700">{link.label}</Link>)}
        </div>
        <div className="flex items-center gap-3 text-sm font-semibold">
          <Link href="/cart" className="rounded-lg bg-green-50 px-3 py-2 text-green-900 hover:bg-green-100">
            Cart ({cartCount})
          </Link>
          {user ? (
            <button onClick={handleSignOut} className="hidden rounded-lg border px-3 py-2 hover:bg-gray-50 md:block">Sign out</button>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/signin" className="rounded-lg border px-3 py-2 hover:bg-gray-50">Sign in</Link>
              <Link href="/signup" className="rounded-lg bg-green-700 px-3 py-2 text-white hover:bg-green-800">Sign up</Link>
            </div>
          )}
          <button type="button" onClick={() => setMenuOpen(open => !open)} className="rounded-lg border px-3 py-2 md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="grovio-mobile-menu">
            ☰
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div id="grovio-mobile-menu" className="flex flex-col gap-1 border-t bg-white px-6 py-3 md:hidden">
          {links.map(link => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-2 font-medium">{link.label}</Link>)}
          {!user ? (
            <>
              <Link href="/signin" onClick={() => setMenuOpen(false)} className="py-2">Sign in</Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)} className="py-2">Create account</Link>
            </>
          ) : <button onClick={handleSignOut} className="py-2 text-left">Sign out</button>}
        </div>
      )}
    </header>
  );
}
