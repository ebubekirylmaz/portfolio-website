"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Code2, Package } from "lucide-react";
import { projects } from "@/content/projects";
import type { Project } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

const COMPACT_LIMIT = 6;
const COMPACT_TAGS = 6;

function TechTags({ tags, limit }: { tags: string[]; limit?: number }) {
  const shown = limit ? tags.slice(0, limit) : tags;
  const hidden = tags.length - shown.length;
  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((tag) => (
        <span key={tag} className="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-300">
          {tag}
        </span>
      ))}
      {hidden > 0 && (
        <span className="rounded border border-zinc-800 px-2 py-1 text-xs text-zinc-500">+{hidden}</span>
      )}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a href={project.githubUrl} className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
        <Code2 size={16} /> Code
      </a>
      {project.npmUrl && (
        <a href={project.npmUrl} className="inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200">
          <Package size={16} /> npm
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200">
          <ArrowUpRight size={16} /> Live Demo
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
    >
      <div className={project.image ? "md:grid md:grid-cols-2 md:items-center md:gap-8" : ""}>
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
          <p className="mt-3 text-zinc-400">{project.description}</p>
          <div className="mt-4">
            <TechTags tags={project.tech} />
          </div>
          <div className="mt-6">
            <ProjectLinks project={project} />
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
              className="h-auto max-h-64 w-full object-cover object-top md:max-h-none"
            />
          </a>
        )}
      </div>
    </motion.article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
    >
      <h4 className="text-lg font-semibold text-zinc-100">{project.title}</h4>
      <p className="mt-2 text-sm text-zinc-400">{project.summary ?? project.description}</p>
      <div className="mt-4">
        <TechTags tags={project.tech} limit={COMPACT_TAGS} />
      </div>
      <div className="mt-auto pt-5">
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);
  const visible = showAll ? others : others.slice(0, COMPACT_LIMIT);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and technical case studies."
          subtitle="A few examples of impact-focused product engineering."
        />
        <div className="flex flex-col gap-6">
          {featured.map((project) => (
            <FeaturedCard key={project.title} project={project} />
          ))}
        </div>
        {others.length > 0 && (
          <>
            <h3 className="mb-5 mt-14 text-lg font-semibold text-zinc-200">More projects</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((project) => (
                <CompactCard key={project.title} project={project} />
              ))}
            </div>
            {others.length > COMPACT_LIMIT && (
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                aria-expanded={showAll}
                className="mt-6 inline-flex items-center gap-2 rounded border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500 hover:text-zinc-100"
              >
                {showAll ? "Show fewer" : `Show all ${others.length} projects`}
                <ChevronDown size={16} className={showAll ? "rotate-180" : ""} />
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
