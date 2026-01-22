import { products } from "@/data/products";

export default function AIDocumentScannerPage() {
  const product = products.find(
    (p) => p.slug === "ai-document-scanner"
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
          The AI Document Scanner helps users digitize,
          summarize, and export documents efficiently
          using modern AI-assisted workflows.
        </p>
      </div>
    </main>
  );
}
