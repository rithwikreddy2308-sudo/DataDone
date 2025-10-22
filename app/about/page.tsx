import NavBar from "../NavBar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About DataDone</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          DataDone helps startups and small businesses turn their data into
          actionable insights. We provide analytics, automation, and dashboard
          solutions designed to simplify decision-making and drive measurable
          growth.
        </p>
        <p className="text-gray-700 max-w-2xl mx-auto mt-6">
          Our mission is to empower businesses with smarter, faster, and more
          transparent data solutions — no complexity, just clarity.
        </p>
      </section>

      <footer className="border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} DataDone. All rights reserved.
      </footer>
    </main>
  );
}
