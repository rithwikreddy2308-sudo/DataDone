import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "DataDone — Data, Done Smarter.",
  description:
    "Helping startups and SMEs turn raw data into insights, dashboards, and automation that drive growth.",
  keywords:
    "data analytics, business intelligence, dashboards, automation, startups, SMEs, Power BI, Tableau",
  openGraph: {
    title: "DataDone — Data, Done Smarter.",
    description:
      "Transform your business data into insights and automation with DataDone.",
    url: "https://datadone.net",
    siteName: "DataDone",
    images: [
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "DataDone Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Browser tab icon */}
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V9F8LPQV43"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V9F8LPQV43');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
