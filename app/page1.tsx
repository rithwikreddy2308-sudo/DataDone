import Link from "next/link";

export default function Page1() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6">This is a Test Page</h1>
      <p className="text-gray-600 mb-4">
        You’re viewing <strong>page1.tsx</strong>. It’s just here for testing.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}


