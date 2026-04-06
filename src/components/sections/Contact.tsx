"use client";

import { GlowButton } from "@/components/ui/GlowButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TerminalCard } from "@/components/ui/TerminalCard";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something meaningful."
          subtitle="I am open to product-focused frontend and full-stack opportunities."
        />
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TerminalCard title="contact.sh">
            <p className="mb-2 text-zinc-300">
              $ open --email ebubekir.yilmazz.20@gmail.com
            </p>
            <p className="mb-2 text-zinc-300">
              $ open --github https://github.com/ebubekirylmaz
            </p>
            <p className="mb-4 text-zinc-300">
              $ open --linkedin https://linkedin.com/in/ebubekir-yilmaz
            </p>
            <GlowButton href="mailto:ebubekir.yilmazz.20@gmail.com">
              Send an Email
            </GlowButton>
          </TerminalCard>
        </motion.div>
      </div>
    </section>
  );
}
