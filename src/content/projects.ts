import type { Project } from "@/types";

export const projects: Project[] = [
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
    liveUrl: "https://zendata.netlify.app",
    featured: true,
  },
  {
    title: "Chat App",
    description:
      "Case-study project focused on Core Web Vitals improvements and conversion lift.",
    tech: ["Next.js", "Lighthouse", "Edge Caching", "A/B Testing"],
    githubUrl: "https://github.com/ebubekirylmaz/chatApp",
    liveUrl: "https://vitechatapp.netlify.app",
  },
];
