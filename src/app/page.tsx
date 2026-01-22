import Link from "next/link";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main className="p-8">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold">SanchTechInc</h1>
        <p className="mt-4 text-lg text-gray-700">
          Building modern, practical software across creative and productivity tools.
        </p>
        <p className="mt-2 text-gray-600">
          Founder-led products focused on clarity, usability, and long-term value.
        </p>
      </section>

      {/* Products Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Our Products</h2>

        <div className="mt-6 space-y-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="block rounded-lg border p-6 hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <span className="mt-3 inline-block text-sm text-gray-500">
                Status: {product.status}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <Link
          href="/products"
          className="text-blue-600 font-medium hover:underline"
        >
          View all products →
        </Link>
      </section>
    </main>
  );
}
