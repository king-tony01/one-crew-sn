import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/layouts/footer/Footer";
import "./globals.css";
import Navigation from "@/layouts/nav/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onecrewsn.com"),
  title: {
    default: "One Crew Social Network",
    template: "%s | One Crew Social Network",
  },
  description:
    "Curated refined social experiences connecting people, culture, and opportunity",
  keywords: [
    "social network",
    "curated experiences",
    "community events",
    "business networking",
    "motorsport events",
    "charity events",
    "lifestyle experiences",
    "cultural events",
  ],
  authors: [{ name: "One Crew Social Network" }],
  creator: "One Crew Social Network",
  publisher: "One Crew Social Network",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onecrewsn.com",
    siteName: "One Crew Social Network",
    title: "One Crew Social Network",
    description:
      "Curated refined social experiences connecting people, culture, and opportunity",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "One Crew Social Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Crew Social Network",
    description:
      "Curated refined social experiences connecting people, culture, and opportunity",
    images: ["/logo.png"],
    creator: "@onecrewsn",
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
  icons: {
    icon: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "One Crew Social Network",
    alternateName: "One Crew",
    url: "https://onecrewsn.com",
    logo: "https://onecrewsn.com/logo.png",
    description:
      "Curated refined social experiences connecting people, culture, and opportunity",
    sameAs: [
      "https://twitter.com/onecrewsn",
      "https://instagram.com/onecrewsn",
      "https://linkedin.com/company/onecrewsn",
      "https://facebook.com/onecrewsn",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://onecrewsn.com/contact",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
