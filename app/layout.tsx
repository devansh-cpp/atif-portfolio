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
  title: "Atif Abbas - Entrepreneur from Ayodhya",
  description:
    "Meet Atif Abbas, the entrepreneur from Rudauli, Ayodhya, Uttar Pradesh. A millionaire at 19, public speaker, and top influencer of Rudauli. Explore his journey here.",
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
    title: "Atif Abbas ",
    description:
      "Learn about Atif Abbas, a 19-year-old entrepreneur from Rudauli, Ayodhya. A visionary leader, speaker, and influencer.",
    url: "https://atifabbasportfolio.vercel.app",
    siteName: "Atif Abbas ",
    images: [
      {
        url: "./atif.png", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Atif Abbas -  Entrepreneur",
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
    images: ["./atif.png"], // Replace with your image URL
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
        <meta name="google-site-verification" content="5dqQTBV4iGbihpeGkQJ7Nd-_kKE23IJBdDFY-Q3EJPk" />
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
          href="https://atifabbasportfolio.vercel.app"
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
                "https://www.facebook.com/nawabmohammad.atif",
                "https://www.instagram.com/official_atif_8005",
                "https://www.linkedin.com/in/mohammad-atif-abbas-4a879b2ba",
                "https://x.com/MohammadAtif001",
              ],
            }),
          }}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" ">
           <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-green-900 text-white p-8 text-center">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent animate-pulse mb-4">
        💰 Access Denied
      </h1>
      <p className="text-xl mb-6 max-w-2xl text-gray-300">
        Delivered this masterpiece <span className="text-green-400 font-semibold">6 months ago</span> — but hey, guess what?
        Still waiting on that "promised" payment. Meanwhile, your services are enjoying a luxurious nap. 😴
      </p>
      
      <div className="bg-black/60 backdrop-blur-lg border border-green-400 p-6 rounded-2xl shadow-2xl">
        <p className="text-2xl font-bold text-white mb-2">
          Project Status: <span className="text-green-300">Frozen in Time ❄️</span>
        </p>
        <p className="text-gray-400 italic">
          Good things cost money. Just not exposure, pizza, or "bro we'll pay next week".
        </p>
      </div>

      <button className="mt-8 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition duration-300">
        Unfreeze with Payment 💸
      </button>

      <p className="text-sm mt-6 text-gray-500">
        Created by <span className="text-green-300 font-medium">sudoweb.in</span> — because legends deserve credit.
      </p>
    </div>
           {/* <div>
       
          <div className="absolute inset-0 -z-10 h-screen w-full bg-[linear-gradient(to_right,#d0e2ec_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] opacity-10 bg-[size:2rem_2rem]"></div>

         
          <Navbar />

      
          <div className="mx-auto">{children}</div>

          
          <Footer />
        </div> */}
        </div>
       
      </body>
    </html>
  );
}
