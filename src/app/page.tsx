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
  { name: "Python", icon: "py" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Tailwind CSS", icon: "tw" },
  { name: "Prisma", icon: "prisma" },
  { name: "Drizzle", icon: "drizzle" },
  { name: "Django", icon: "django" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "PostgreSQL", icon: "pg" },
  { name: "Node.js", icon: "node" },
  { name: "Git", icon: "git" },
];

const techIcons: Record<string, string> = {
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  py: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  tw: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  drizzle: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  pg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
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
    featured: true,
  },
  {
    title: "Lophix Boutique",
    href: "https://lophixboutique.vercel.app",
    github: null,
    description:
      "Interactive and responsive e-commerce-style website built for a boutique clothing store client.",
    tags: ["React", "Tailwind CSS"],
    featured: false,
  },
  {
    title: "MyPizzaWheels",
    href: "https://pizza-wheels-express.vercel.app",
    github: null,
    description:
      "A sleek, responsive website for a pizza delivery business with a custom menu and ordering flow.",
    tags: ["React", "Tailwind CSS"],
    featured: false,
  },
];

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://x.com/abdullahdevs_",
    icon: <Twitter className="size-3.5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Enodevs",
    icon: <Github className="size-3.5" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdullah-isiaq-81a1a3320",
    icon: <Linkedin className="size-3.5" />,
  },
  {
    label: "Email",
    href: "mailto:abdullahdev268@gmail.com",
    icon: <Mail className="size-3.5" />,
  },
];

// ─── Divider ────────────────────────────────────────────────────────────────
function Divider() {
  return <div className="w-full h-px bg-[#1a1a1a] my-16" />;
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="font-sans text-[#e8e8e8]">

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
                className="rounded-full size-16 object-cover ring-1 ring-[#2a2a2a]"
              />
              <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-emerald-500 border-2 border-[#0c0c0c] status-dot" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-white">
                <DecryptedText
                  text="Isiaq Abdullah"
                  speed={50}
                  animateOn="view"
                  revealDirection="start"
                  useOriginalCharsOnly={false}
                />
              </h1>
              <p className="text-sm text-[#666] font-mono mt-0.5">
                Full Stack Developer
              </p>
            </div>
          </div>
          <StatusBadge />
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[#555] font-mono">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3" />
            Ogun State, Nigeria
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#555]" />
            abdullahdev268@gmail.com
          </span>
        </div>

        <p className="mt-6 text-[15px] leading-7 text-[#888] max-w-xl">
          I build full-stack web products end-to-end, obsessing over small
          details that make software feel right. Passionate about clean
          architecture, intuitive UX, and performant systems. When I'm not
          coding, I'm exploring new tools and building in public.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {socialLinks.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#1f1f1f] bg-[#0f0f0f] text-[#777] text-xs font-mono hover:border-[#2e2e2e] hover:text-[#ccc] transition-all"
            >
              {s.icon}
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── EXPERIENCE ────────────────────────────────────────────────────── */}
      <section
        id="experience"
        className="animate-fade-in-up animate-delay-200"
      >
        <SectionLabel>Experience</SectionLabel>

        <div className="space-y-0">
          {experience.map((job, i) => (
            <div
              key={i}
              className="group relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="size-2 rounded-full bg-[#2a2a2a] group-hover:bg-[#555] mt-1.5 transition-colors shrink-0" />
                {i < experience.length - 1 && (
                  <div className="w-px flex-1 bg-[#1a1a1a] mt-2" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <span className="font-medium text-[15px] text-white">
                      {job.role}
                    </span>
                    <span className="text-[#555] mx-2 text-sm">·</span>
                    {job.href ? (
                      <Link
                        href={job.href}
                        target="_blank"
                        className="text-sm text-[#888] hover:text-white transition-colors inline-flex items-center gap-0.5"
                      >
                        {job.company}
                        <ArrowUpRight className="size-3 ml-0.5" />
                      </Link>
                    ) : (
                      <span className="text-sm text-[#888]">{job.company}</span>
                    )}
                  </div>
                  <span className="text-xs text-[#444] font-mono shrink-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-xs text-[#444] font-mono mb-3">
                  {job.type}
                </p>
                <p className="text-sm text-[#777] leading-6 mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
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
      <section
        id="projects"
        className="animate-fade-in-up animate-delay-300"
      >
        <SectionLabel>Featured Projects</SectionLabel>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-5 rounded-lg border border-[#1a1a1a] bg-[#0d0d0d] hover-card transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-medium text-white text-[15px] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-[#444] hover:text-[#aaa] transition-colors"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="size-4" />
                    </Link>
                  )}
                  {project.href && (
                    <Link
                      href={project.href}
                      target="_blank"
                      className="flex items-center gap-1 text-xs text-[#555] hover:text-[#ccc] font-mono transition-colors"
                    >
                      Visit
                      <ArrowUpRight className="size-3" />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-sm text-[#666] leading-6 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section
        id="stack"
        className="animate-fade-in-up animate-delay-400"
      >
        <SectionLabel>Tech Stack</SectionLabel>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2.5 p-3 rounded-md border border-[#1a1a1a] bg-[#0d0d0d] hover-card cursor-default group"
            >
              {/* biome-ignore lint/a11y/useAltText: decorative tech icon */}
              <img
                src={techIcons[tech.icon]}
                alt={tech.name}
                className="size-6 opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[10px] font-mono text-[#555] group-hover:text-[#888] transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="animate-fade-in-up animate-delay-500"
      >
        <SectionLabel>Let&apos;s Work Together</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — info */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-3">
              Get in Touch
            </h2>
            <p className="text-sm text-[#666] leading-6 mb-8">
              Whether you have a project in mind, want to collaborate, or just
              want to talk tech — I&apos;d love to hear from you. I reply within
              24 hours.
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: <Mail className="size-4" />,
                  label: "Email",
                  value: "abdullahdev268@gmail.com",
                  href: "mailto:abdullahdev268@gmail.com",
                  sub: "Quick inquiries & questions",
                },
                {
                  icon: <Twitter className="size-4" />,
                  label: "Twitter / X",
                  value: "@abdullahdevs_",
                  href: "https://x.com/abdullahdevs_",
                  sub: "Follow for updates",
                },
                {
                  icon: <Github className="size-4" />,
                  label: "GitHub",
                  value: "Enodevs",
                  href: "https://github.com/Enodevs",
                  sub: "Check out my work",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-md border border-[#1a1a1a] bg-[#0d0d0d] hover-card group transition-all"
                >
                  <span className="text-[#444] group-hover:text-[#888] transition-colors">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#ccc] group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                    <p className="text-xs text-[#444] font-mono truncate">
                      {item.sub}
                    </p>
                  </div>
                  <ArrowUpRight className="size-3.5 text-[#333] group-hover:text-[#666] ml-auto shrink-0 transition-colors" />
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-500 status-dot" />
              <span className="text-xs text-[#555] font-mono">
                Open to remote, freelance &amp; full-time
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-3">
              Send a Message
            </h2>
            <p className="text-sm text-[#666] leading-6 mb-8">
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
            <span className="block mt-1 text-[#333]">
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
                  className="text-[#333] hover:text-[#888] transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
            <p className="text-xs text-[#2e2e2e] font-mono">
              © 2026 Isiaq Abdullah
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
