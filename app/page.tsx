import NavBar from "./NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <NavBar />

      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Data, <span className="text-blue-600">done smarter.</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We help startups and small businesses turn raw data into insights,
          dashboards, and decisions that drive growth.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Dashboards</h3>
            <p className="mt-4 text-gray-700">
              Custom KPI dashboards built in Power BI, Tableau, or web—designed
              to track performance and growth in real time.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Data Pipelines</h3>
            <p className="mt-4 text-gray-700">
              We integrate your spreadsheets, CRMs, and tools into one clean
              data flow — automatic, reliable, and up to date.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Automation</h3>
            <p className="mt-4 text-gray-700">
              Set up email alerts, weekly reports, and repetitive workflows to
              run automatically—saving hours every week.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">Pricing Plans</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <p className="text-3xl font-bold text-blue-600">₹3,999</p>
            <p className="mt-2 text-gray-600">per month</p>
            <ul className="mt-4 text-gray-700 text-sm space-y-2">
              <li>✔ 1 dashboard</li>
              <li>✔ Monthly report</li>
              <li>✔ Email support</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">Growth</h3>
            <p className="text-3xl font-bold text-blue-600">₹9,999</p>
            <p className="mt-2 text-gray-600">per month</p>
            <ul className="mt-4 text-gray-700 text-sm space-y-2">
              <li>✔ 3 dashboards</li>
              <li>✔ Bi-weekly insights</li>
              <li>✔ Priority support</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-3xl font-bold text-blue-600">₹24,999</p>
            <p className="mt-2 text-gray-600">per month</p>
            <ul className="mt-4 text-gray-700 text-sm space-y-2">
              <li>✔ Unlimited dashboards</li>
              <li>✔ Custom automation</li>
              <li>✔ 24/7 support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Let’s Talk</h2>
        <p className="text-gray-700 mb-6">
          Ready to get started? Tell us about your data and we’ll reach out.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="max-w-lg mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border rounded-xl px-4 py-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-xl px-4 py-3"
          />
          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows={4}
            required
            className="w-full border rounded-xl px-4 py-3"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} DataDone. All rights reserved.
      </footer>
    </main>
  );
}
