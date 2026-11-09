export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  /** Leave out when the project has no hosted demo: the card then shows no "Live Demo" link. */
  liveUrl?: string;
  npmUrl?: string;
  summary?: string;
  /** A screenshot shown next to the text of a featured card. */
  image?: ProjectImage;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}
