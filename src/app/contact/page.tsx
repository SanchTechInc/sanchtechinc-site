export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="mt-4 text-gray-700">
        For general inquiries, support, or business-related questions,
        please reach out via email.
      </p>

      <p className="mt-4">
        <a
          href="mailto:support@sanchtechinc.com"
          className="text-blue-600 hover:underline"
        >
          support@sanchtechinc.com
        </a>
      </p>
    </main>
  );
}
