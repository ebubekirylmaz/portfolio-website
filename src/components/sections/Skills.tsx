"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack tuned for shipping and scaling."
          subtitle="A practical toolkit for high-performing product teams."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 transition hover:border-emerald-300/70 hover:text-emerald-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
