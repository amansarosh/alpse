import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alpse",
  description: "Creating your briefings - Faster.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}

        <header className="bg-slate-200">
          <nav className="flex py-5 justify-center" aria-label="Global">
            <div className="flex gap-x-12">
              <Link
                href="/search"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Start Here
              </Link>
              <Link
                href="/"
                className="text-xl font-bold leading-6 text-gray-900 overline"
              >
                ALPSE
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                About Us
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
