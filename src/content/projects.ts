import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Crowd Pulse",
    description:
      "A live Q&A and polling platform with its own cookieless analytics. People join a room from their phone with just a name, and votes and questions reach the big screen in real time. One room holds 5,000 WebSocket connections at a vote-to-screen p95 of 182 ms, analytics ingest handles about 32,000 events per second, and dashboard queries over 850,000 events take under 2 ms. Built as three independently deployed apps composed with Module Federation, with CI, browser tests and eight architecture decision records.",
    tech: [
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "React",
      "Tailwind CSS",
      "Module Federation",
      "Turborepo",
      "Playwright",
      "Vitest",
      "Docker",
    ],
    githubUrl: "https://github.com/ebubekirylmaz/crowd-pulse",
    liveUrl: "https://crowd-pulse-shell.vercel.app",
    image: {
      src: "/projects/crowd-pulse-live.jpg",
      alt: "Crowd Pulse: a live poll on the presenter screen showing 100% for the chosen option, next to a participant's phone that has just voted",
      width: 1920,
      height: 1080,
    },
    featured: true,
  },
  {
    title: "RouteIQ",
    description:
      "A cost-aware decision layer for routing text requests. A free baseline model answers when it is sure, a language model only when it is not, and a person when neither is, so LLM spend goes only where it changes the outcome. On 300 held-out CLINC150 examples the cascade matched an LLM-only setup's accuracy (98.3%) at about 54% of its cost. Built end to end: a FastAPI service with a human review queue, an evaluation toolkit with calibration and confidence intervals, and a React dashboard, packaged with Docker and covered by more than 1,100 automated tests.",
    tech: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "SQLite",
      "OpenRouter",
      "React",
      "TypeScript",
      "TanStack Query",
      "Recharts",
      "Docker",
      "Vitest",
    ],
    githubUrl: "https://github.com/ebubekirylmaz/RouteIQ",
    image: {
      src: "/projects/routeiq-overview.png",
      alt: "The RouteIQ dashboard: an overview of a day of requests with cost, latency, how requests ended and delivery status",
      width: 2880,
      height: 2000,
    },
    featured: true,
  },
  {
    title: "FlowKit",
    description:
      "A node-based workflow editor library for React with a real execution engine on top, so the diagrams you build actually run. The canvas is built from scratch with no canvas library: pan and zoom, drag, connect, multi-select and cut and paste. A topological runner executes the graph branch by branch and shows which step failed and which steps it skipped as a result. Published on npm and extracted from a production component library, where it was iterated on across 22 pull requests.",
    tech: [
      "React",
      "JavaScript",
      "MUI",
      "styled-components",
      "Vite",
      "Vitest",
      "npm package",
    ],
    githubUrl: "https://github.com/ebubekirylmaz/flowkit",
    npmUrl: "https://www.npmjs.com/package/@ebubekirylmaz/flowkit",
    liveUrl: "https://pulseflowexample.vercel.app/",
    summary:
      "A node-based workflow editor for React with a real execution engine: a topological runner that shows which step failed and which it skipped. Published on npm.",
  },
  {
    title: "PulseFlow",
    description:
      "An AI pull-request review bot built on FlowKit, a node-based workflow editor library with a real topological execution engine underneath. Paste a GitHub PR URL and the pipeline fetches the diff, runs static analysis and, optionally with your own API key, asks Claude to approve or request changes, with branch-aware failure isolation. The editor and engine are published as their own npm package and consumed here as a real dependency.",
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
    image: {
      src: "/projects/pulseflow-editor.png",
      alt: "The PulseFlow editor with a pull-request review pipeline: PR Opened, Fetch Diff, Run Linter and AI Code Review lead to an Issues Found? branch that either requests changes or approves, merges and deploys",
      width: 2880,
      height: 1500,
    },
    summary:
      "An AI pull-request review bot built on FlowKit: paste a GitHub PR URL and the pipeline fetches the diff, analyses it and, with your own key, asks Claude for a verdict.",
  },

  {
    title: "Zen Data",
    description:
      "A fully browser-based data wrangling tool. Upload a CSV or JSON file, clean and transform it, explore it in an interactive grid and visualise key statistics, all without a backend: your data never leaves your machine.",
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
    image: {
      src: "/projects/zen-data-analytics.png",
      alt: "Zen Data's analytics view for a 180-row sales file: an overview, null values per column, a completeness chart and the distribution of values by product",
      width: 2880,
      height: 1800,
    },
    summary:
      "A browser-based data wrangling tool: load a CSV or JSON file, clean it, explore it in a grid and chart it, with nothing leaving your machine.",
  },
  {
    title: "Book Appointment",
    description:
      "A full-stack appointment booking platform for small service businesses such as salons and tutors. Customers book through a mobile-first four-step wizard with real-time availability computed from working hours and existing bookings, so double-booking is impossible. The owner manages everything from a protected admin dashboard: weekly calendar, services, manual bookings and working hours, backed by Postgres.",
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
    image: {
      src: "/projects/book-appointment-booking.jpg",
      alt: "The Book Appointment booking flow on two phone screens: choosing a service, then a day and an available time slot",
      width: 1920,
      height: 1080,
    },
    featured: true,
  },
];
