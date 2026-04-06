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

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}
