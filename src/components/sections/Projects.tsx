"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and technical case studies."
          subtitle="A few examples of impact-focused product engineering."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className={project.image ? "md:grid md:grid-cols-2 md:items-center md:gap-8" : ""}>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
                  <p className="mt-3 text-zinc-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <a href={project.githubUrl} className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
                      <Code2 size={16} /> Code
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200">
                        <ArrowUpRight size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                {project.image && (
                  <a
                    href={project.githubUrl}
                    aria-label={`${project.title} on GitHub`}
                    className="mt-6 block overflow-hidden rounded-lg border border-zinc-800 md:mt-0"
                  >
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={project.image.width}
                      height={project.image.height}
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="h-auto w-full"
                    />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
