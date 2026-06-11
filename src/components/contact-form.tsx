"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate — wire up to your API/email service
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
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
            className="w-full bg-[#0f0f0f] border border-[#1f1f1f] rounded-md px-3 py-2.5 text-sm text-white placeholder:text-[#3a3a3a] outline-none focus:border-[#333] transition-colors font-mono"
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
            className="w-full bg-[#0f0f0f] border border-[#1f1f1f] rounded-md px-3 py-2.5 text-sm text-white placeholder:text-[#3a3a3a] outline-none focus:border-[#333] transition-colors font-mono"
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
          className="w-full bg-[#0f0f0f] border border-[#1f1f1f] rounded-md px-3 py-2.5 text-sm text-white placeholder:text-[#3a3a3a] outline-none focus:border-[#333] transition-colors font-mono resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-md hover:bg-[#e0e0e0] transition-colors disabled:opacity-50 cursor-pointer"
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
