"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Signup() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(event) {
    event.preventDefault();

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created! Check your email.");
  }

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold">Create Account</h1>

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}
