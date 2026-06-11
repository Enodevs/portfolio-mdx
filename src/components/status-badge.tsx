"use client";

export default function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-900/60 bg-emerald-950/40 text-emerald-400 text-xs font-mono">
      <span className="size-1.5 rounded-full bg-emerald-400 status-dot" />
      available for work
    </span>
  );
}
