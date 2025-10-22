'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mjkaqwrj', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('done');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Let’s Talk</h2>
      <p className="text-gray-700 mb-6">
        Ready to get started? Tell us about your data and we’ll reach out.
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full border rounded-xl px-4 py-3"
        />
        <input
          name="email"
          type="email"
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
          disabled={status === 'loading'}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'done' && (
          <p className="text-green-600 mt-3">✅ Thanks! We’ll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-3">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
