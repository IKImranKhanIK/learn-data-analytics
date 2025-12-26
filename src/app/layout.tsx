import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ErrorSuppression from "@/components/ErrorSuppression";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Learn Data Analytics - Master Data Analytics with Interactive Projects",
    template: "%s | Learn Data Analytics",
  },
  description:
    "Master data analytics through interactive lessons, hands-on projects, and real-world tools. Learn Python, SQL, statistics, and data visualization from scratch. 100% free and open source.",
  keywords: [
    "data analytics",
    "learn data analytics",
    "data analysis tutorial",
    "Python for data analytics",
    "SQL tutorial",
    "data visualization",
    "interactive learning",
    "data science",
    "statistics",
    "beginner data analytics",
    "analytics projects",
    "free data analytics course",
  ],
  authors: [{ name: "Imran Khan", url: "https://github.com/IKImranKhanIK" }],
  creator: "Imran Khan",
  publisher: "Learn Data Analytics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learn-data-analytics.vercel.app",
    title: "Learn Data Analytics - Master Data Analytics with Interactive Projects",
    description:
      "Master data analytics through interactive lessons, hands-on projects, and real-world tools. Learn Python, SQL, and data visualization from scratch.",
    siteName: "Learn Data Analytics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Data Analytics - Master Data Analytics with Interactive Projects",
    description:
      "Master data analytics through interactive lessons, hands-on projects, and real-world tools. Learn Python, SQL, and data visualization from scratch.",
    creator: "@IKImranKhanIK",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ErrorSuppression />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
