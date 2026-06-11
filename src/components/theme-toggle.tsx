"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

const options = [
  { value: "light", icon: Sun,     label: "Light"  },
  { value: "system", icon: Monitor, label: "System" },
  { value: "dark",  icon: Moon,    label: "Dark"   },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[88px] h-7" />;

  return (
    <div
      className="flex items-center rounded-md border p-0.5 gap-0.5"
      style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
      role="group"
      aria-label="Theme switcher"
    >
      {options.map(({ value, icon: Icon, label }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={`Switch to ${label} theme`}
            aria-pressed={active}
            className="flex items-center justify-center rounded size-6 transition-all cursor-pointer"
            style={{
              background: active ? "var(--border-hover)" : "transparent",
              color: active ? "var(--fg)" : "var(--fg-subtle)",
            }}
          >
            <Icon className="size-3" />
          </button>
        );
      })}
    </div>
  );
}
