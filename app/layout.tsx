import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atif Abbas Portfolio - Youngest Entrepreneur from Ayodhya",
  description:
    "Meet Atif Abbas, the youngest entrepreneur from Rudauli, Ayodhya, Uttar Pradesh. A millionaire at 19, public speaker, and top influencer of Rudauli. Explore his journey here.",
  keywords: [
    "Atif Abbas",
    "youngest entrepreneur",
    "Ayodhya entrepreneur",
    "Rudauli influencer",
    "best public speaker Ayodhya",
    "youngest millionaire Uttar Pradesh",
    "entrepreneurs India",
  ],
  openGraph: {
    title: "Atif Abbas Portfolio",
    description:
      "Learn about Atif Abbas, a 19-year-old millionaire entrepreneur from Rudauli, Ayodhya. A visionary leader, speaker, and influencer.",
    url: "https://yourdomain.com",
    siteName: "Atif Abbas Portfolio",
    images: [
      {
        url: "https://yourdomain.com/atif-abbas-cover.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Atif Abbas - Young Entrepreneur",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atif Abbas Portfolio - Youngest Entrepreneur",
    description:
      "Discover Atif Abbas, a 19-year-old entrepreneur and speaker from Rudauli, Ayodhya, Uttar Pradesh.",
    images: ["https://yourdomain.com/atif-abbas-cover.jpg"], // Replace with your image URL
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
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="author" content="Atif Abbas" />
        <meta
          name="robots"
          content="index, follow"
        />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Rudauli, Ayodhya, Uttar Pradesh" />
        <meta name="geo.position" content="26.764993;82.120202" />
        <meta name="ICBM" content="26.764993, 82.120202" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="canonical"
          href="https://yourdomain.com"
        />
        <title>Atif Abbas - Entrepreneur from Ayodhya</title>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Atif Abbas",
              jobTitle: "Entrepreneur, Influencer, Public Speaker",
              description:
                "Atif Abbas is the entrepreneur from Rudauli, Ayodhya, Uttar Pradesh. Known for his visionary leadership, he became a public speaker at 19.",
              url: "https://atifabbasportfolio.vercel.app",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rudauli",
                addressRegion: "Ayodhya",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.facebook.com/atifabbas",
                "https://www.instagram.com/atifabbas",
                "https://www.linkedin.com/in/atifabbas",
              ],
            }),
          }}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          {/* Background */}
          <div className="absolute inset-0 -z-10 h-screen w-full bg-[linear-gradient(to_right,#d0e2ec_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] opacity-10 bg-[size:2rem_2rem]"></div>

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="mx-auto">{children}</div>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
