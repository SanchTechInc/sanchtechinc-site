import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="mt-2 text-gray-600">
        Software products built by SanchTechInc.
      </p>

      <div className="mt-8 space-y-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="block rounded-lg border p-6 hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <span className="mt-3 inline-block text-sm text-gray-500">
              Status: {product.status}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
