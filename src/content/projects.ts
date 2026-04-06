import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Twitter Clone",
    description:
      "Twitter Clone is a web application that allows users to create, read, update and delete tweets.",
    tech: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
    githubUrl: "https://github.com/ebubekirylmaz/twitterclone",
    liveUrl: "https://firebasetwitterclone.netlify.app",
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
