import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "PulseFlow",
    description:
      "An AI pull-request review bot built on FlowKit, a node-based workflow editor library with a real topological execution engine underneath — not just static boxes and arrows. Paste a real GitHub PR URL and the pipeline fetches the actual diff, runs deterministic static analysis, and (optionally, with your own API key) calls Claude directly from the browser to decide whether to approve or request changes, with branch-aware failure isolation when a step fails. The editor + execution engine is published separately as its own npm package, consumed here as a real dependency rather than a monorepo shortcut.",
    tech: [
      "React",
      "MUI",
      "styled-components",
      "Vite",
      "Vitest",
      "npm package",
      "GitHub API",
      "Claude API",
    ],
    githubUrl: "https://github.com/ebubekirylmaz/pulseflow",
    liveUrl: "https://pulseflowexample.vercel.app/",
    featured: true,
  },

  {
    title: "Zen Data",
    description:
      "A fully browser-based data wrangling tool built with React, TypeScript, and MUI. Upload a CSV or JSON file, clean and transform its contents, explore it through an interactive data grid, and visualise key statistics — all without a backend, a server, or any data ever leaving your machine.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "MUI",
      "React-Data-Grid",
      "PapaParse",
      "Zustand",
      "TanStack Table",
      "Recharts",
    ],
    githubUrl: "https://github.com/ebubekirylmaz/zen-data",
    liveUrl: "https://zen-data.vercel.app/",
    featured: true,
  },
  {
    title: "Book Appointment",
    description:
      "A full-stack appointment booking platform for small service businesses (salons, spas, tutors) — a self-serve alternative to managing bookings over WhatsApp or phone calls. Customers book through a mobile-first, four-step wizard with real-time availability computed from the business's working hours and existing bookings, so double-booking is impossible. The business owner runs everything from a protected admin dashboard: a weekly calendar, services CRUD, manual bookings, and per-day working hours, all backed by a real Postgres database.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "FullCalendar",
    ],
    githubUrl: "https://github.com/ebubekirylmaz/rendezvous-app",
    liveUrl: "https://rendezvous-app-seven.vercel.app",
    featured: true,
  },
];
