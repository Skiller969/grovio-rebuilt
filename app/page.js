import Link from "next/link";
export default function Home() {
  const categories = [
    {
      name: "Fruits",
      description: "Fresh & seasonal",
    },
    {
      name: "Dairy",
      description: "Daily essentials",
    },

    {
      name: "Vegetables",
      description: "Farm fresh",
    },

    {
      name: "snacks",
      description: "Quick bites",
    },
  ];

  return (
    <div className="flex  flex-col items-center py-20">
      <h1 className="text-5xl font-bold max-w-3xl ">
        Every Thing u need , Right at your doorstep
      </h1>
      <p className=" mt-6 text-lg max-w-xl text-gray-600">
        Fresh groceries, everyday essentials and your favourite snacks — all in
        one place.
      </p>
      <Link
        href="/products"
        className="mt-6 rounded-full bg-green-600 font-semibold py-3 px-6 text-white"
      >
        Start Shopping
      </Link>

      <section className="mx-auto max-w-5xl py-16 px-6">
        <h1 className="mb-8 text-3xl font-bold">Shop By Categories</h1>
        <div className="grid gap-6 sm:grid-cols-4">
          {categories.map((category) => {
            return (
              <div key={category.name} className="rounded-2xl border p-6">
                <h3 className="text-xl font-semibold">{category.name}</h3>

                <p className="mt-2 text-gray-600">{category.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
