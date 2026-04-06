import Link from "next/link";
import type { ReactNode } from "react";

interface GlowButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}

export function GlowButton({ href, children, variant = "primary" }: GlowButtonProps) {
  const base =
    "inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200";
  const styles =
    variant === "primary"
      ? "border border-emerald-300/50 bg-emerald-400/10 text-emerald-200 shadow-[0_0_30px_-14px_var(--color-neon-green)] hover:bg-emerald-300/20"
      : "border border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-cyan-300/60 hover:text-cyan-200";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
