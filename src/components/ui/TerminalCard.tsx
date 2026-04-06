import type { ReactNode } from "react";

interface TerminalCardProps {
  title?: string;
  children: ReactNode;
}

export function TerminalCard({ title = "terminal", children }: TerminalCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 shadow-[0_0_40px_-24px_var(--color-neon-cyan)]">
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <p className="font-mono text-xs text-zinc-400">{title}</p>
      </div>
      <div className="p-4 font-mono text-sm text-zinc-300">{children}</div>
    </article>
  );
}
