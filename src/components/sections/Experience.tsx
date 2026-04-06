"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey and outcomes."
          subtitle="Roles where I shipped user-facing value and improved engineering throughput."
        />
        <ol className="relative border-s border-zinc-800">
          {experience.map((item, idx) => (
            <motion.li
              key={item.company + item.role}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="mb-10 ms-6"
            >
              <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-cyan-300" />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-100">
                {item.role} · {item.company}
              </h3>
              <ul className="mt-3 list-disc space-y-1 ps-4 text-zinc-400">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
