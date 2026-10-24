"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xrewjrqd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
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
          <label htmlFor="contact-name" className="section-label block mb-2">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border-input)";
            }}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="section-label block mb-2">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border-input)";
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="section-label block mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          style={{ ...inputStyle, resize: "none" }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--border-hover)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--border-input)";
          }}
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
        ) : status === "error" ? (
          "Failed, try again"
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
