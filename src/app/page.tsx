import DecryptedText from "@/components/decrypted-text";
import { Github, Linkedin, Mail, MapPin, Terminal, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Link {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const links: Link[] = [
  { name: 'GitHub', href: 'https://github.com/Enodevs', icon: <Github className="size-4" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/abdullah-isiaq-81a1a3320', icon: <Linkedin className="size-4" /> },
  { name: 'Twitter', href: 'https://x.com/abdullahdevs_', icon: <Twitter className="size-4" /> },
];

export default function Home() {
  return (
    <>
      <main className="font-mono">
        <section>
          <Image
            src={"/abdullah.jpg"}
            alt="Abdullah"
            className="rounded-full size-32 mb-4"
            width={100}
            height={100}
          />
          <DecryptedText
            text="isiaq abdullah"
            speed={60}
            animateOn="view"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
            className="text-4xl font-bold tracking-tight"
          />
          <div className="group">
            <div className="flex items-center gap-2 mt-2 mb-1.5">
              <span>
                <MapPin className="size-4" />
              </span>
              Ogun State, Nigeria.
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Terminal className="size-4" />
              </span>
              Full Stack Developer
            </div>
          </div>
          <p className="mt-6 leading-7 text-zinc-300 max-w-2xl">
            i am a full stack web developer passionate about building high-quality,
            performant web applications. i love solving complex problems, crafting solutions, and
            creating intuitive user experiences. when i'm not coding, you can find
            me exploring new technologies and cool websites.
          </p>
        </section>
        <section className="mt-10">
          <div className="flex items-center gap-1.5 mb-6">
            <span className="text-blue-500 font-bold text-2xl">\</span>
            <h2 className="font-sans font-bold text-2xl">work</h2>
          </div>

          <div className="space-y-8">
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <Link href="https://usebraindump.vercel.app" target="_blank" className="font-bold text-lg hover:text-blue-500">Braindump</Link>
                <span className="text-zinc-500 text-xs text-right">nov 2025 - present</span>
              </div>
              <p className="text-zinc-500 text-xs mb-2 font-mono">founder</p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                building a minimal and intuitive platform to store thoughts, tasks, and notes.
              </p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-bold text-lg hover:text-blue-500 cursor-pointer">Freelance</h3>
                <span className="text-zinc-500 text-xs text-right">oct 2025 - present</span>
              </div>
              <p className="text-zinc-500 text-xs mb-2 font-mono">full-stack developer</p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                building responsive and beautiful websites and web apps for freelance clients.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-15">
          <div className="flex items-center gap-1.5 mb-6">
            <span className="text-blue-500 font-bold text-2xl">\</span>
            <h2 className="font-sans font-bold text-2xl">client work</h2>
          </div>

          <div className="space-y-8">
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <Link href="https://lophixboutique.vercel.app" target="_blank" className="font-bold text-lg hover:text-blue-500">Lophix boutique</Link>
              </div>
              <p className="text-zinc-500 text-xs mb-2 font-mono">developer</p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                i built an interactive and responsive website with react and tailwind for a client that owns a boutique store
              </p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <Link href="https://pizza-wheels-express.vercel.app" target="_blank" className="font-bold text-lg hover:text-blue-500 cursor-pointer">MyPizzaWheels</Link>
              </div>
              <p className="text-zinc-500 text-xs mb-2 font-mono">developer</p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                i built an interactive and responsive website with react and tailwind for a client that owns a pizza store
              </p>
            </div>
          </div>
        </section>
        <section className="mt-15">
          <div className="flex items-center gap-1.5 mb-6">
            <span className="text-blue-500 font-bold text-2xl">\</span>
            <h2 className="font-sans font-bold text-2xl">tech stack</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {['TypeScript', 'Python', 'React', 'Next.js', 'Prisma', 'Drizzle', 'Django', 'FastAPI'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm font-medium hover:border-blue-500 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
        <section className="mt-15">
          <div className="flex items-center gap-1.5 mb-6">
            <span className="text-blue-500 font-bold text-2xl">\</span>
            <h2 className="font-sans font-bold text-2xl">links</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm font-medium hover:border-blue-500 transition-colors cursor-pointer"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <Link
              href="mailto:abdullahdev268@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm font-medium hover:border-blue-500 transition-colors cursor-pointer"
            >
              <Mail className="size-4" />
              Email
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
