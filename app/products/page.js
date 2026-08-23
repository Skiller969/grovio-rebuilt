import ProductCard from "@/components/ProductCard";

export default function Products() {
  const products = [
    { name: "Apple", price: 50, image: "/apple.jpeg" },
    { name: "Banana", price: 40, image: "/banana.png" },
    { name: "Milk", price: 60, image: "/milk.png" },
    { name: "Bread", price: 45, image: "/bread.png" },
  ];

  return (
    <main className="mx-auto py-16 px-6 max-w-5xl">
      <h1 className="mb-8 text-3xl font-bold">Products</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </main>
  );
}
