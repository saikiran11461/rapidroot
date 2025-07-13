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

export const metadata: Metadata = {
  title: "RapidRoot | Instant Web & App Development Services",
  description: "RapidRoot offers lightning-fast web and mobile app development using modern stacks like MERN & React Native. Affordable, reliable, and tailored solutions for your business.",
  keywords: [
    "RapidRoot",
    "web development",
    "mobile app development",
    "full stack developer",
    "MERN stack",
    "React Native",
    "instant website service",
    "freelance web developer",
    "startup web solutions",
    "custom web applications"
  ],
  authors: [
    { name: "Sai Kiran", url: "https://rapidroot.in" }
  ],
  creator: "Sai Kiran",
  publisher: "RapidRoot",
  robots: "index, follow",
  metadataBase: new URL("https://rapidroot.in"),
  openGraph: {
    title: "RapidRoot | Web & App Services",
    description: "Instant web and mobile app development with modern tech stacks like MERN and React Native.",
    url: "https://rapidroot.in",
    siteName: "RapidRoot",
    images: [
      {
        url: "https://rapidroot.in/og-image.jpg", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "RapidRoot - Instant Web & App Services",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RapidRoot | Web & App Services",
    description: "Need a fast and modern website or app? RapidRoot has you covered with full-stack solutions.",
    creator: "@rapidroot", // update if you have a Twitter handle
    images: ["https://rapidroot.in/og-image.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  themeColor: "#4F46E5", // Tailwind indigo-600
  category: "technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
     
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
