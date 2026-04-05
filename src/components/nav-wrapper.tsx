"use client";

import { useEffect, useRef, useState } from "react";
import { Nav } from "@/Nav";

const SECTIONS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "books",
  "courses",
  "contact",
];

export function NavWrapper() {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return <Nav activeSection={activeSection} />;
}
