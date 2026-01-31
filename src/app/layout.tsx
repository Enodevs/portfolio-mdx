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
  title: {
    default: "Isiaq Abdullah - Full Stack Developer",
    template: "%s | Isiaq Abdullah"
  },
  description: "Full stack web developer passionate about building high-quality, performant web applications. Specializing in TypeScript, React, Next.js, Python, Django, and modern web technologies.",
  keywords: [
    "Isiaq Abdullah",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Python",
    "Django",
    "FastAPI",
    "Prisma",
    "Drizzle",
    "Frontend Developer",
    "Backend Developer",
    "Nigeria Developer",
    "Ogun State",
    "Portfolio",
    "Web Development",
    "Software Engineer"
  ],
  authors: [{ name: "Isiaq Abdullah", url: "https://x.com/abdullahdevs_" }],
  creator: "Isiaq Abdullah",
  publisher: "Isiaq Abdullah",
  metadataBase: new URL("https://abdullahdevs.vercel.app"),
  icons: {
    icon: [
      { url: "/a-logo.png" },
      { url: "/a-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/a-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/a-logo.png" },
    ],
    shortcut: ["/a-logo.png"],
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Isiaq Abdullah - Full Stack Developer",
    description: "Full stack web developer passionate about building high-quality, performant web applications. Specializing in TypeScript, React, Next.js, Python, and modern web technologies.",
    siteName: "Isiaq Abdullah Portfolio",
    images: [
      {
        url: "/abdullah.jpg",
        width: 1200,
        height: 630,
        alt: "Isiaq Abdullah - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Isiaq Abdullah - Full Stack Developer",
    description: "Full stack web developer passionate about building high-quality, performant web applications.",
    creator: "@abdullahdevs_",
    images: ["/abdullah.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "81YFTad8DK4Jn6bPMpQjNikZwpn1XG7VJy6qVkQ71k4",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-screen min-h-screen overflow-x-hidden bg-[#101110] text-white`}
      >
        <main className="max-w-4xl mx-auto px-4 py-8 md:py-24">{children}</main>
      </body>
    </html>
  );
}
