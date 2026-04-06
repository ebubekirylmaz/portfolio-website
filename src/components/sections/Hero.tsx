"use client";

import { BriefcaseBusiness, Globe, Mail } from "lucide-react";
import { useEffect, useState } from "react";

import { GlowButton } from "@/components/ui/GlowButton";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Performance Enthusiast",
  "Problem Solver",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const current = roles[index % roles.length];
    let i = 0;

    const typer = setInterval(() => {
      setDisplay(current.slice(0, i));
      i += 1;
      if (i > current.length + 1) {
        clearInterval(typer);
        setTimeout(() => setIndex((prev) => prev + 1), 1200);
      }
    }, 70);

    return () => clearInterval(typer);
  }, [index]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan-300"
        >
          Welcome to my digital terminal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-zinc-50 md:text-6xl"
        >
          Ebubekir Yilmaz
        </motion.h1>
        <p className="mt-4 font-mono text-lg text-emerald-300 md:text-xl">
          <span className="mr-2 text-zinc-500">$</span>
          {display}
          <span className="ml-1 animate-pulse text-cyan-300">|</span>
        </p>
        <p className="mt-6 max-w-2xl text-zinc-400">
          I build fast, elegant web products with strong engineering foundations
          and a relentless focus on user experience.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <GlowButton href="#projects">View Projects</GlowButton>
          <GlowButton href="#contact" variant="ghost">
            Contact Me
          </GlowButton>
        </div>
        <div className="mt-8 flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/ebubekirylmaz"
            aria-label="GitHub"
            className="hover:text-cyan-300"
            target="_blank"
          >
            <Globe size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ebubekir-yilmaz"
            aria-label="LinkedIn"
            className="hover:text-cyan-300"
            target="_blank"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <a
            href="mailto:ebubekir.yilmazz.20@gmail.com"
            aria-label="Email"
            className="hover:text-cyan-300"
            target="_blank"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
