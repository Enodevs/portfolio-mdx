"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { useTheme } from "next-themes";

interface ProjectLinkProps {
  href: string;
  label: "Visit" | "GitHub";
}

export default function ProjectLink({ href, label }: ProjectLinkProps) {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Default to dark until mounted to avoid hydration mismatch
  const isDark = !mounted || resolvedTheme === "dark";

  // Light mode uses a more restrained palette so text stays readable
  const idle = isDark
    ? { bg: "rgba(34,197,94,0.07)", border: "rgba(34,197,94,0.2)",  color: "#4ade80" }
    : { bg: "rgba(22,163,74,0.08)",  border: "rgba(22,163,74,0.3)",  color: "#15803d" };

  const active = isDark
    ? { bg: "rgba(34,197,94,0.14)", border: "rgba(34,197,94,0.5)",  color: "#86efac", shadow: "0 4px 12px rgba(34,197,94,0.15)" }
    : { bg: "rgba(22,163,74,0.10)",  border: "rgba(22,163,74,0.45)", color: "#15803d", shadow: "0 3px 8px rgba(22,163,74,0.12)" };

  const s = hovered ? active : idle;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-1 text-xs font-mono rounded px-2 py-0.5 select-none"
      style={{
        border: `1px solid ${s.border}`,
        background: s.bg,
        color: s.color,
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hovered ? s.shadow : "none",
        transition: "all 0.15s ease",
      }}
    >
      {label === "GitHub" && <Github className="size-3" />}
      {label}
      <ArrowUpRight className="size-3" />
    </Link>
  );
}
