import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mustofa Khoirudin | Enterprise Systems & Industrial Digitalization Engineer",
  description: "Senior Software Engineer specializing in backend architecture, industrial digitalization platforms, and real-time monitoring solutions.",
  keywords: [
    "Mustofa Khoirudin",
    "Software Engineer",
    "Enterprise Systems",
    "Industrial Digitalization",
    "Backend Specialist",
    "Golang",
    "PHP",
    "Laravel",
    "IoT",
    "Astra Group",
  ],
  authors: [{ name: "Mustofa Khoirudin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-1 flex flex-col pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
