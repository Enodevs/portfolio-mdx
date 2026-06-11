"use client";

export default function StatusBadge() {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border"
      style={{
        borderColor: "rgba(34,197,94,0.3)",
        background: "rgba(34,197,94,0.08)",
        color: "#16a34a",
      }}
    >
      <span className="size-1.5 rounded-full bg-emerald-500 status-dot" />
      available for work
    </span>
  );
}
