import { products } from "@/data/products";

export default function FindMyStylistPage() {
  const product = products.find((p) => p.slug === "find-my-stylist");

  if (!product) {
    return <main className="p-8">Product not found.</main>;
  }

  return (
    <main className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="mt-4 text-gray-700">{product.description}</p>

        <p className="mt-4 text-sm text-gray-500">Status: {product.status}</p>

        <div className="mt-8 text-gray-600">
          <p>
            Find My Stylist focuses on simplifying booking, availability, and
            communication between clients and professional stylists.
          </p>
        </div>
      </div>
    </main>
  );
}
