"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Link from "next/link";
import type { SectionId } from "@/types";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sections: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const activeSection = useScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="pointer-events-none fixed top-0 z-50 w-full pt-4 md:pt-5">
      <div className="pointer-events-auto mx-auto max-w-6xl px-4">
        <nav
          className="relative flex h-14 items-center justify-between gap-4 rounded-xl border border-zinc-800/90 bg-zinc-950/80 px-3 shadow-[0_0_48px_-28px_var(--color-neon-cyan),inset_0_1px_0_0_rgb(255_255_255/0.04)] backdrop-blur-xl md:h-[3.25rem] md:px-4"
          aria-label="Primary"
        >
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent"
            aria-hidden
          />

          <Link
            href="#hero"
            className="group flex min-w-0 items-center gap-2.5 font-[family-name:var(--font-geist-mono)] text-sm text-zinc-200 transition hover:text-emerald-200"
            onClick={() => setMobileOpen(false)}
          >
            <span
              className="hidden shrink-0 text-emerald-400/90 sm:inline"
              aria-hidden
            >
              ~
            </span>
            <span className="truncate">
              <span className="text-cyan-400/90">ebubekir</span>
              <span className="text-zinc-500">@</span>
              <span className="text-zinc-400">portfolio</span>
              <span className="text-emerald-400/80">:~$</span>
            </span>
            <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 opacity-80 shadow-[0_0_10px_var(--color-neon-green)] group-hover:opacity-100 sm:block" />
          </Link>

          <ul className="hidden items-center gap-0.5 md:flex">
            {sections.map((section) => {
              const active = activeSection === section.id;
              return (
                <li key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className={`relative rounded-lg px-3 py-2 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.18em] transition ${
                      active
                        ? "text-cyan-200"
                        : "text-zinc-500 hover:text-zinc-200"
                    }`}
                  >
                    {active ? (
                      <span
                        className="absolute inset-0 rounded-lg border border-cyan-400/25 bg-cyan-400/5 shadow-[0_0_24px_-12px_var(--color-neon-cyan)]"
                        aria-hidden
                      />
                    ) : null}
                    <span className="relative">{section.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700/80 text-zinc-300 transition hover:border-cyan-400/40 hover:text-cyan-200 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.75} />
            ) : (
              <Menu size={20} strokeWidth={1.75} />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-950/95 shadow-[0_0_40px_-20px_var(--color-neon-cyan)] backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col py-2">
                {sections.map((section) => {
                  const active = activeSection === section.id;
                  return (
                    <li key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className={`block px-4 py-3 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] transition ${
                          active
                            ? "border-l-2 border-emerald-400 bg-emerald-400/5 text-cyan-200"
                            : "border-l-2 border-transparent text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-100"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {section.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
