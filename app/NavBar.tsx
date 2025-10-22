"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="p-6 flex justify-between items-center border-b bg-white sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        <Link href="/">DataDone</Link>
      </h1>

      {/* Navigation */}
      <nav className="space-x-6 text-gray-700 font-medium">
        <Link href="#services" scroll={true}>Services</Link>
        <Link href="#pricing" scroll={true}>Pricing</Link>
        <Link href="#contact" scroll={true}>Contact</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
