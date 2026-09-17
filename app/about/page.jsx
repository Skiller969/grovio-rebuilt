import { FaTruckFast, FaLeaf, FaCartShopping } from "react-icons/fa6";

export default function About() {
  const features = [
    {
      title: "Quick Delivery",
      description:
        "Get your groceries delivered quickly and conveniently to your doorstep.",
      icon: FaTruckFast,
    },
    {
      title: "Fresh Products",
      description:
        "We focus on providing fresh and quality grocery products for everyday needs.",
      icon: FaLeaf,
    },
    {
      title: "Easy Shopping",
      description:
        "Browse products, add them to your cart, and checkout through a simple shopping experience.",
      icon: FaCartShopping,
    },
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-600">About Grovio</h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Grovio is a grocery shopping application designed to make buying
          everyday essentials simple, fast, and convenient. Users can explore
          products, manage their cart, and order groceries from one place.
        </p>
      </section>

      <section className="bg-green-50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our mission is to make grocery shopping simple, quick, and
            convenient by providing an easy-to-use digital shopping experience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Why Choose Grovio?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border p-6 text-center shadow-sm"
              >
                <Icon className="mx-auto text-4xl text-green-600" />

                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
