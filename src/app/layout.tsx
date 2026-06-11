import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Providers from "@/components/providers";
import ThemeToggle from "@/components/theme-toggle";
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
    default: "Isiaq Abdullah — Full Stack Developer",
    template: "%s | Isiaq Abdullah",
  },
  description:
    "Full stack web developer passionate about building high-quality, performant web applications. Specializing in TypeScript, React, Next.js, Python, Django, and modern web technologies.",
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
    "Nigeria Developer",
    "Portfolio",
  ],
  authors: [{ name: "Isiaq Abdullah", url: "https://x.com/abdullahdevs_" }],
  creator: "Isiaq Abdullah",
  metadataBase: new URL("https://abdullahdevs.vercel.app"),
  icons: {
    icon: [
      { url: "/a-logo.png" },
      { url: "/a-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/a-logo.png" }],
    shortcut: ["/a-logo.png"],
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Isiaq Abdullah — Full Stack Developer",
    description:
      "Full stack web developer passionate about building high-quality, performant web applications.",
    siteName: "Isiaq Abdullah",
    images: [
      {
        url: "/abdullah.jpg",
        width: 1200,
        height: 630,
        alt: "Isiaq Abdullah — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isiaq Abdullah — Full Stack Developer",
    description:
      "Full stack web developer passionate about building high-quality, performant web applications.",
    creator: "@abdullahdevs_",
    images: ["/abdullah.jpg"],
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
    google: "81YFTad8DK4Jn6bPMpQjNikZwpn1XG7VJy6qVkQ71k4",
  },
};

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Stack",      href: "#stack"       },
  { label: "Contact",    href: "#contact"     },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        style={{ background: "var(--bg)", color: "var(--fg)" }}
      >
        <Providers>
          {/* ── Nav ────────────────────────────────────────────────────── */}
          <header
            className="sticky top-0 z-50 border-b backdrop-blur-md"
            style={{ borderColor: "var(--border)", background: "var(--nav-bg)" }}
          >
            <div className="max-w-2xl mx-auto px-5 h-12 flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="text-sm font-mono transition-colors"
                style={{ color: "var(--fg-subtle)" }}
              >
                ia<span style={{ color: "var(--logo-dot)" }}>.</span>
              </Link>

              <div className="flex items-center gap-5">
                {/* Nav links */}
                <nav className="hidden sm:flex items-center gap-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs font-mono transition-colors"
                      style={{ color: "var(--fg-subtle)" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Theme toggle */}
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* ── Page content ───────────────────────────────────────────── */}
          <div className="max-w-2xl mx-auto px-5 pt-14 pb-8">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
