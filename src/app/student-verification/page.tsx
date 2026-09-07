import { ArrowLeft, CheckCircle2, Mail, School } from "lucide-react";
import Link from "next/link";

export default function StudentVerification() {
  return (
    <main
      className="font-sans min-h-screen flex items-center justify-center px-5 py-16"
      style={{ color: "var(--fg)" }}
    >
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono transition-opacity hover:opacity-70"
            style={{ color: "var(--fg-faint)" }}
          >
            <ArrowLeft className="size-3.5" />
            Back to portfolio
          </Link>
        </div>

        {/* Intro */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <span
              className="text-[10px] font-mono tracking-widest uppercase"
              style={{ color: "var(--fg-faint)" }}
            >
              Student verification
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Academic email unavailable
          </h1>

          <p
            className="text-[15px] leading-7 max-w-xl"
            style={{ color: "var(--fg-muted)" }}
          >
            I am currently enrolled as a student, but my school does not
            provide student email addresses. This page explains why I am
            using my personal email for my RevenueCat Shipaton Next Gen
            registration.
          </p>
        </section>

        {/* Verification details */}
        <section className="mt-10 space-y-3">
          <div
            className="p-5 rounded-lg border"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-card)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="mt-0.5 shrink-0"
                style={{ color: "var(--fg-faint)" }}
              >
                <School className="size-4" />
              </div>

              <div>
                <p
                  className="text-xs font-mono mb-1"
                  style={{ color: "var(--fg-faint)" }}
                >
                  Institution
                </p>

                <p className="text-sm font-medium">
                  TAKBIR MODEL COLLEGE
                </p>
              </div>
            </div>
          </div>

          <div
            className="p-5 rounded-lg border"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-card)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="mt-0.5 shrink-0"
                style={{ color: "var(--fg-faint)" }}
              >
                <Mail className="size-4" />
              </div>

              <div>
                <p
                  className="text-xs font-mono mb-1"
                  style={{ color: "var(--fg-faint)" }}
                >
                  Email used for registration
                </p>

                <p className="text-sm font-medium break-all">
                  isiaqabdullah100@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation */}
        <section
          className="mt-6 p-5 rounded-lg border"
          style={{
            borderColor: "rgba(34,197,94,0.2)",
            background: "rgba(34,197,94,0.04)",
          }}
        >
          <div className="flex gap-3">
            <CheckCircle2
              className="size-4 mt-0.5 shrink-0 text-emerald-500"
            />

            <div>
              <h2 className="text-sm font-medium mb-2">
                Why a personal email is being used
              </h2>

              <p
                className="text-sm leading-6"
                style={{ color: "var(--fg-muted)" }}
              >
                My school does not issue student email addresses and does not
                have an official school website. Because an academic email is
                unavailable, I am using my personal email address and
                providing this page as additional context for the verification
                process.
              </p>

              <p
                className="text-sm leading-6 mt-3"
                style={{ color: "var(--fg-muted)" }}
              >
                If additional confirmation of my student status is required,
                I am happy to provide appropriate documentation through the
                official verification process.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          <p
            className="text-xs font-mono leading-5"
            style={{ color: "var(--fg-faint)" }}
          >
            This page is provided solely as additional context for academic
            eligibility verification.
          </p>
        </div>
      </div>
    </main>
  );
}
