import { products } from "@/data/products";

export default function FindMyArtistPage() {
  const product = products.find(
    (p) => p.slug === "find-my-artist"
  );

  if (!product) {
    return <main className="p-8">Product not found.</main>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <p className="mt-4 text-gray-700">
        {product.description}
      </p>

      <p className="mt-4 text-sm text-gray-500">
        Status: {product.status}
      </p>

      <div className="mt-8 text-gray-600">
        <p>
          Find My Artist is designed to help creators connect,
          collaborate, and build projects with the right people
          in a professional environment.
        </p>
      </div>
    </main>
  );
}
