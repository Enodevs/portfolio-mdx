"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectLinkProps {
  href: string;
  label: "Visit" | "GitHub";
}

export default function ProjectLink({ href, label }: ProjectLinkProps) {
  const [hovered, setHovered] = useState(false);

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
        border: `1px solid ${hovered ? "rgba(34,197,94,0.5)" : "rgba(34,197,94,0.2)"}`,
        background: hovered ? "rgba(34,197,94,0.14)" : "rgba(34,197,94,0.07)",
        color: hovered ? "#86efac" : "#4ade80",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hovered ? "0 4px 12px rgba(34,197,94,0.15)" : "none",
        transition: "all 0.15s ease",
      }}
    >
      {label === "GitHub" && <Github className="size-3" />}
      {label}
      <ArrowUpRight className="size-3" />
    </Link>
  );
}
