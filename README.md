# Portfolio Website

Performance-focused personal developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This repository contains a single-page portfolio experience with smooth section-based navigation, animated UI elements, and content-driven sections for projects, skills, and experience.

The site is designed around:

- fast load and rendering performance
- clean, maintainable component architecture
- easy content updates through dedicated `src/content` files

## Features

- Terminal-inspired UI with modern dark theme accents
- Scroll spy navigation with active section highlighting
- Responsive navbar with animated mobile menu
- Animated hero typing effect and CTA buttons
- Structured sections: About, Skills, Projects, Experience, Contact
- SEO-ready metadata and sitemap support
- Framer Motion transitions for polished interactions

## Tech Stack

- `Next.js` (App Router)
- `React`
- `TypeScript`
- `Tailwind CSS` (v4)
- `Framer Motion`
- `Lucide React`
- `ESLint`

## Project Structure

```text
src/
  app/
    layout.tsx         # Global layout + metadata
    page.tsx           # Main page section composition
    sitemap.ts         # Sitemap definition
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, About, Skills, Projects, Experience, Contact
    ui/                # Reusable UI primitives
  content/
    skills.ts
    projects.ts
    experience.ts
  hooks/
    useScrollSpy.ts
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Run local development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Customization Guide

### Personal and SEO metadata

Update metadata values in:

- `src/app/layout.tsx` (`title`, `description`, Open Graph, Twitter, `metadataBase`)
- `src/app/sitemap.ts` (replace placeholder URL)

### Section content

Update portfolio content in:

- `src/content/skills.ts`
- `src/content/projects.ts`
- `src/content/experience.ts`

### Social links and contact

Update links and email in:

- `src/components/sections/Hero.tsx`
- `src/components/sections/Contact.tsx`

### Navigation labels and anchors

Navbar section definitions are in:

- `src/components/layout/Navbar.tsx`

Scroll tracking behavior is in:

- `src/hooks/useScrollSpy.ts`

## Deployment

This project can be deployed on any Node-compatible platform. Vercel is the recommended option for the best Next.js experience.

Typical production flow:

1. `npm run build`
2. `npm run start`

## Author

Ebubekir Yilmaz

## License

MIT
