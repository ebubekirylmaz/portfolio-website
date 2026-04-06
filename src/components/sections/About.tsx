"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="About"
            title="Engineering focused on clarity, scale, and speed."
            subtitle="I enjoy building robust products, refining developer experience, and turning complex requirements into elegant interfaces."
          />
          <div className="grid grid-cols-3 gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
            <div>
              <AnimatedCounter value={4} suffix="+" />
              <p className="text-xs text-zinc-500">Years building</p>
            </div>
            <div>
              <AnimatedCounter value={20} suffix="+" />
              <p className="text-xs text-zinc-500">Projects shipped</p>
            </div>
            <div>
              <AnimatedCounter value={95} suffix="%" />
              <p className="text-xs text-zinc-500">Lighthouse avg.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TerminalCard title="about.json">
            <pre className="overflow-x-auto text-xs leading-6 text-zinc-300">
              {`{
  "name": "Ebubekir Yilmaz",
  "location": "Remote / Türkiye",
  "focus": ["Frontend Architecture", "Performance", "DX"],
  "currentlyLearning": "System Design for Web Scale"
}`}
            </pre>
          </TerminalCard>
        </motion.div>
      </div>
    </section>
  );
}
