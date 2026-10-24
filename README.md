# 👨‍💻 Isiaq Abdullah - Portfolio

A minimal, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and an interactive text decryption effect.

## ✨ Features

- **Animated Text Decryption**: Custom `DecryptedText` component with scrambling animation effects
- **Light / Dark / System Themes**: Persistent theme switching with `next-themes`
- **Responsive Design**: Fully responsive layout optimized for all devices
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, Twitter Cards, sitemap, and robots.txt
- **Modern Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Clean UI**: Minimalist design with a focus on readability and user experience
- **Working Contact Form**: Serverless form handling via Formspree

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: CSS keyframes + a custom text-scramble effect (no animation library)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist Sans & Geist Mono](https://vercel.com/font)
- **Linting / Formatting**: [Biome](https://biomejs.dev/)
- **Runtime**: [Bun](https://bun.sh/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.9+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Enodevs/portfolio-mdx.git
cd portfolio-mdx
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-mdx/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: nav, fonts, metadata
│   │   ├── page.tsx            # Home page (hero, experience, projects, stack, contact)
│   │   ├── globals.css         # Theme tokens and global styles
│   │   ├── robots.ts           # robots.txt generation
│   │   ├── sitemap.ts          # sitemap.xml generation
│   │   └── student-verification/
│   │       └── page.tsx        # Student eligibility verification page
│   └── components/
│       ├── contact-form.tsx    # Formspree-powered contact form
│       ├── decrypted-text.tsx  # Animated text decryption
│       ├── mdx-components.tsx  # MDX component overrides
│       ├── project-link.tsx    # Project "Visit" / "GitHub" links
│       ├── providers.tsx       # Theme provider
│       ├── section-label.tsx   # Section heading label
│       ├── status-badge.tsx    # Availability badge
│       └── theme-toggle.tsx    # Light / system / dark switcher
├── public/
│   ├── abdullah.jpg            # Profile image / OG image
│   └── a-logo.png              # Favicon
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/app/page.tsx` to update:
- Personal details (name, location, role)
- Work experience
- Client projects
- Tech stack
- Social links

### Update Metadata

Edit `src/app/layout.tsx` to update:
- SEO metadata
- Open Graph tags
- Twitter Card information
- Site URL (`metadataBase`)

If the production domain changes, also update `baseUrl` in `src/app/sitemap.ts` and `src/app/robots.ts`.

### Styling

- Global styles and theme tokens: `src/app/globals.css`
- Component styles: Inline Tailwind classes
- Tailwind v4 is configured in CSS via `@import "tailwindcss"` — there is no `tailwind.config.ts`.

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Enodevs/portfolio-mdx)

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Portfolio**: [abdullahdev.cv](https://abdullahdev.cv)
- **GitHub**: [@Enodevs](https://github.com/Enodevs)
- **Twitter**: [@abdullahdevs_](https://x.com/abdullahdevs_)
- **LinkedIn**: [abdullah-isiaq](https://linkedin.com/in/abdullah-isiaq)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Enodevs/portfolio-mdx/issues).

---

**Built with ❤️ by Isiaq Abdullah**
