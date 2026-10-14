import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Fruits", description: "Fresh and seasonal", image: "/products/apple.png" },
  { name: "Vegetables", description: "Good greens for every meal", image: "/products/cabbage.png" },
  { name: "Dairy", description: "Your daily essentials", image: "/products/tonedmilk.png" },
  { name: "Snacks", description: "Something to munch on", image: "/products/cookies.png" },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-green-700">Welcome to Grovio</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Groceries for your everyday needs.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Fresh fruits, vegetables, dairy and snacks. Find what you need in one place.
          </p>
          <Link href="/products" className="mt-8 inline-block rounded-xl bg-green-700 px-7 py-4 font-semibold text-white hover:bg-green-800">
            Start shopping →
          </Link>
        </div>
        <div className="rounded-3xl bg-green-100 p-10">
          <Image src="/products/apple.png" alt="Fresh apple" width={400} height={400} priority className="mx-auto h-64 w-64 object-contain md:h-80 md:w-80" />
        </div>
      </section>
      <section className="border-t border-green-100 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold">Shop by category</h2>
            <Link href="/products" className="font-semibold text-green-700 hover:underline">View all products →</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.name} href="/products" className="rounded-2xl border border-green-100 bg-green-50 p-5 hover:border-green-400">
                <div className="flex h-36 items-center justify-center">
                  <Image src={category.image} alt="" width={140} height={140} className="h-32 w-32 object-contain" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
