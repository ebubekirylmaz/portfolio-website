"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/types";

const sectionIds: SectionId[] = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -45% 0px" },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
