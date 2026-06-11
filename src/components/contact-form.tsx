"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-input)",
    border: "1px solid var(--border-input)",
    borderRadius: "6px",
    padding: "10px 12px",
    fontSize: "0.875rem",
    color: "var(--fg)",
    outline: "none",
    fontFamily: "var(--font-geist-mono)",
    transition: "border-color 0.15s",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="section-label block mb-2">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; }}
            onBlur={(e)  => { e.currentTarget.style.borderColor = "var(--border-input)"; }}
          />
        </div>
        <div>
          <label className="section-label block mb-2">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; }}
            onBlur={(e)  => { e.currentTarget.style.borderColor = "var(--border-input)"; }}
          />
        </div>
      </div>

      <div>
        <label className="section-label block mb-2">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project..."
          style={{ ...inputStyle, resize: "none" }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; }}
          onBlur={(e)  => { e.currentTarget.style.borderColor = "var(--border-input)"; }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-colors disabled:opacity-50 cursor-pointer"
        style={{
          background: "var(--fg)",
          color: "var(--bg)",
        }}
      >
        {status === "sending" ? (
          "Sending..."
        ) : status === "sent" ? (
          "Message sent ✓"
        ) : (
          <>
            <Send className="size-3.5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
