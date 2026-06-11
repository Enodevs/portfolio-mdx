import ContactForm from "@/components/contact-form";
import DecryptedText from "@/components/decrypted-text";
import SectionLabel from "@/components/section-label";
import StatusBadge from "@/components/status-badge";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const techStack = [
  { name: "TypeScript", icon: "ts" },
  { name: "Python",     icon: "py" },
  { name: "React",      icon: "react" },
  { name: "Next.js",    icon: "next" },
  { name: "Tailwind CSS", icon: "tw" },
  { name: "Prisma",     icon: "prisma" },
  { name: "Drizzle",    icon: "drizzle" },
  { name: "Django",     icon: "django" },
  { name: "FastAPI",    icon: "fastapi" },
  { name: "PostgreSQL", icon: "pg" },
  { name: "Node.js",    icon: "node" },
  { name: "Git",        icon: "git" },
];

const techIcons: Record<string, string> = {
  ts:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  py:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  react:   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  next:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  tw:      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  prisma:  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  drizzle: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  django:  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  pg:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  node:    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  git:     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};

const experience = [
  {
    role: "Founder & Developer",
    company: "Braindump",
    href: "https://usebraindump.vercel.app",
    period: "Nov 2025 — Present",
    type: "Remote, Part-time",
    description:
      "Building a minimal and intuitive platform to store thoughts, tasks, and notes. Designed the full product — from architecture to UI — focusing on speed and simplicity.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    current: true,   // ← highlighted
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    href: null,
    period: "Oct 2025 — Present",
    type: "Remote, Freelance",
    description:
      "Building responsive, high-performance websites and web applications for clients. End-to-end delivery from design system to deployment.",
    tags: ["React", "Next.js", "Tailwind CSS", "Python"],
    current: false,
  },
];

const projects = [
  {
    title: "Braindump",
    href: "https://usebraindump.vercel.app",
    github: null,
    description:
      "A minimal, intuitive platform to capture thoughts, tasks, and notes. Built with a focus on speed and a clean, distraction-free experience.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    title: "Lophix Boutique",
    href: "https://lophixboutique.vercel.app",
    github: null,
    description:
      "Interactive and responsive e-commerce-style website built for a boutique clothing store client.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "MyPizzaWheels",
    href: "https://pizza-wheels-express.vercel.app",
    github: null,
    description:
      "A sleek, responsive website for a pizza delivery business with a custom menu and ordering flow.",
    tags: ["React", "Tailwind CSS"],
  },
];

const socialLinks = [
  { label: "X (Twitter)", href: "https://x.com/abdullahdevs_",                    icon: <Twitter className="size-3.5" /> },
  { label: "GitHub",      href: "https://github.com/Enodevs",                     icon: <Github  className="size-3.5" /> },
  { label: "LinkedIn",    href: "https://linkedin.com/in/abdullah-isiaq-81a1a3320", icon: <Linkedin className="size-3.5" /> },
  { label: "Email",       href: "mailto:abdullahdev268@gmail.com",                 icon: <Mail    className="size-3.5" /> },
];

// ─── Divider ─────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div
      className="w-full h-px my-16"
      style={{ background: "var(--border)" }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="font-sans" style={{ color: "var(--fg)" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="animate-fade-in-up">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src="/abdullah.jpg"
                alt="Isiaq Abdullah"
                width={64}
                height={64}
                className="rounded-full size-16 object-cover ring-1 ring-[#2a2a2a] dark:ring-[#2a2a2a]"
              />
              <span
                className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-emerald-500 border-2 status-dot"
                style={{ borderColor: "var(--bg)" }}
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">
                <DecryptedText
                  text="Isiaq Abdullah"
                  speed={50}
                  animateOn="view"
                  revealDirection="start"
                  useOriginalCharsOnly={false}
                />
              </h1>
              <p className="text-sm font-mono mt-0.5" style={{ color: "var(--fg-subtle)" }}>
                Full Stack Developer
              </p>
            </div>
          </div>
          <StatusBadge />
        </div>

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-mono" style={{ color: "var(--fg-faint)" }}>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3" />
            Ogun State, Nigeria
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full" style={{ background: "var(--fg-faint)" }} />
            abdullahdev268@gmail.com
          </span>
        </div>

        {/* Bio */}
        <p className="mt-6 text-[15px] leading-7 max-w-xl" style={{ color: "var(--fg-muted)" }}>
          I build full-stack web products end-to-end, obsessing over small
          details that make software feel right. Passionate about clean
          architecture, intuitive UX, and performant systems. When I&apos;m not
          coding, I&apos;m exploring new tools and building in public.
        </p>

        {/* Social pills */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {socialLinks.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-mono transition-all hover-card"
              style={{
                borderColor: "var(--border-input)",
                background: "var(--bg-input)",
                color: "var(--tag-color)",
              }}
            >
              {s.icon}
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── EXPERIENCE ────────────────────────────────────────────────────── */}
      <section id="experience" className="animate-fade-in-up animate-delay-200">
        <SectionLabel>Experience</SectionLabel>

        <div className="space-y-0">
          {experience.map((job, i) => (
            <div key={i} className="group relative flex gap-6 pb-12 last:pb-0">

              {/* Timeline dot + line */}
              <div className="flex flex-col items-center">
                <div
                  className="size-2 rounded-full mt-1.5 shrink-0 transition-colors"
                  style={{
                    background: job.current ? "#22c55e" : "var(--timeline-dot)",
                  }}
                />
                {i < experience.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2"
                    style={{ background: "var(--timeline-line)" }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="flex-1 min-w-0 rounded-lg p-4 border transition-all"
                style={
                  job.current
                    ? {
                        borderColor: "rgba(34,197,94,0.25)",
                        background: "rgba(34,197,94,0.04)",
                      }
                    : {
                        borderColor: "transparent",
                        background: "transparent",
                      }
                }
              >
                {/* Current badge */}
                {job.current && (
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="size-1.5 rounded-full bg-emerald-500 status-dot" />
                    <span className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase">
                      Current
                    </span>
                  </div>
                )}

                {/* Role + company + period */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <span
                      className="font-medium text-[15px]"
                      style={{ color: job.current ? "#86efac" : "var(--fg)" }}
                    >
                      {job.role}
                    </span>
                    <span className="mx-2 text-sm" style={{ color: "var(--fg-subtle)" }}>·</span>
                    {job.href ? (
                      <Link
                        href={job.href}
                        target="_blank"
                        className="text-sm inline-flex items-center gap-0.5 transition-colors hover:underline"
                        style={{ color: job.current ? "#4ade80" : "var(--fg-muted)" }}
                      >
                        {job.company}
                        <ArrowUpRight className="size-3 ml-0.5" />
                      </Link>
                    ) : (
                      <span className="text-sm" style={{ color: "var(--fg-muted)" }}>
                        {job.company}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono shrink-0" style={{ color: "var(--fg-faint)" }}>
                    {job.period}
                  </span>
                </div>

                {/* Type */}
                <p className="text-xs font-mono mb-3" style={{ color: "var(--fg-faint)" }}>
                  {job.type}
                </p>

                {/* Description */}
                <p className="text-sm leading-6 mb-4" style={{ color: "var(--fg-muted)" }}>
                  {job.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-tag"
                      style={
                        job.current
                          ? {
                              borderColor: "rgba(34,197,94,0.2)",
                              color: "#86efac",
                              background: "rgba(34,197,94,0.06)",
                            }
                          : {}
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section id="projects" className="animate-fade-in-up animate-delay-300">
        <SectionLabel>Featured Projects</SectionLabel>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-5 rounded-lg border hover-card transition-all"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-medium text-[15px]" style={{ color: "var(--fg)" }}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="transition-colors"
                      style={{ color: "var(--fg-faint)" }}
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="size-4" />
                    </Link>
                  )}
                  {project.href && (
                    <Link
                      href={project.href}
                      target="_blank"
                      className="flex items-center gap-1 text-xs font-mono transition-colors"
                      style={{ color: "var(--fg-subtle)" }}
                    >
                      Visit
                      <ArrowUpRight className="size-3" />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-sm leading-6 mb-4" style={{ color: "var(--fg-muted)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section id="stack" className="animate-fade-in-up animate-delay-400">
        <SectionLabel>Tech Stack</SectionLabel>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2.5 p-3 rounded-md border hover-card cursor-default group transition-all"
              style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
            >
              {/* biome-ignore lint/a11y/useAltText: decorative */}
              <img
                src={techIcons[tech.icon]}
                alt={tech.name}
                className="size-6 opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span
                className="text-[10px] font-mono text-center leading-tight transition-colors"
                style={{ color: "var(--fg-subtle)" }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section id="contact" className="animate-fade-in-up animate-delay-500">
        <SectionLabel>Let&apos;s Work Together</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — info */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-3" style={{ color: "var(--fg)" }}>
              Get in Touch
            </h2>
            <p className="text-sm leading-6 mb-8" style={{ color: "var(--fg-muted)" }}>
              Whether you have a project in mind, want to collaborate, or just
              want to talk tech — I&apos;d love to hear from you. I reply within
              24 hours.
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: <Mail    className="size-4" />,
                  value: "abdullahdev268@gmail.com",
                  href:  "mailto:abdullahdev268@gmail.com",
                  sub:   "Quick inquiries & questions",
                },
                {
                  icon: <Twitter className="size-4" />,
                  value: "@abdullahdevs_",
                  href:  "https://x.com/abdullahdevs_",
                  sub:   "Follow for updates",
                },
                {
                  icon: <Github  className="size-4" />,
                  value: "Enodevs",
                  href:  "https://github.com/Enodevs",
                  sub:   "Check out my work",
                },
              ].map((item) => (
                <Link
                  key={item.value}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-md border hover-card group transition-all"
                  style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
                >
                  <span style={{ color: "var(--fg-faint)" }}>{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium transition-colors" style={{ color: "var(--fg-muted)" }}>
                      {item.value}
                    </p>
                    <p className="text-xs font-mono truncate" style={{ color: "var(--fg-faint)" }}>
                      {item.sub}
                    </p>
                  </div>
                  <ArrowUpRight className="size-3.5 ml-auto shrink-0 transition-colors" style={{ color: "var(--fg-faint)" }} />
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-500 status-dot" />
              <span className="text-xs font-mono" style={{ color: "var(--fg-subtle)" }}>
                Open to remote, freelance &amp; full-time
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-3" style={{ color: "var(--fg)" }}>
              Send a Message
            </h2>
            <p className="text-sm leading-6 mb-8" style={{ color: "var(--fg-muted)" }}>
              Prefer to write? Fill out the form and I&apos;ll get back to you
              within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="footer-quote max-w-sm">
            &ldquo;Perfection is achieved not when there is nothing more to add,
            but when there is nothing left to take away.&rdquo;
            <span className="block mt-1" style={{ color: "var(--fg-faint)" }}>
              — Antoine de Saint-Exupéry
            </span>
          </p>

          <div className="flex flex-col items-start sm:items-end gap-2">
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors"
                  style={{ color: "var(--fg-faint)" }}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
            <p className="text-xs font-mono" style={{ color: "var(--footer-copy)" }}>
              © 2026 Isiaq Abdullah
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
