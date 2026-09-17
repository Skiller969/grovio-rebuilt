import HelpCard from "@/components/HelpCard";
import { FaBox, FaCreditCard, FaTruck, FaUser } from "react-icons/fa6";

export default function Help() {
  const supportCategories = [
    {
      title: "Orders",
      description:
        "Get help with placing, viewing, or managing your grocery orders.",
      icon: FaBox,
    },
    {
      title: "Payments",
      description:
        "Find information about payments, billing, and payment-related issues.",
      icon: FaCreditCard,
    },
    {
      title: "Delivery",
      description:
        "Learn more about delivery times, order status, and receiving your groceries.",
      icon: FaTruck,
    },
    {
      title: "Account",
      description:
        "Get help with your Grovio account, sign in, and profile-related questions.",
      icon: FaUser,
    },
  ];

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse the Products page, add items to your cart, and proceed to checkout.",
    },
    {
      question: "Can I change the quantity of an item?",
      answer:
        "Yes. You can increase or decrease product quantities from your cart.",
    },
    {
      question: "Do I need an account to checkout?",
      answer:
        "Yes. You need to be signed in before completing the checkout process.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can use the Contact Support section below if you need additional assistance.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900">Help & Support</h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          Find answers to common questions and get help while using Grovio.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">How can we help?</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportCategories.map((category) => {
            return (
              <HelpCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                description={category.description}
              />
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq) => {
            return (
              <div key={faq.question} className="rounded-xl border p-5">
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>

                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl bg-green-50 p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Contact Support</h2>

        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Still need help? Contact our support team and we’ll assist you.
        </p>

        <button className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
          Contact Support
        </button>
      </section>
    </main>
  );
}
