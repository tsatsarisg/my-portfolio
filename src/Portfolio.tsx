"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ScrollAnimate } from "@/components/scroll-animate";
import { ScrollProgress } from "@/components/scroll-progress";
import { Mail } from "lucide-react";
import { Experience } from "./sections/Experience";
import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import { Nav } from "./Nav";
import { Skills } from "./sections/Skills";
import { Books } from "./sections/Books";
import { Projects } from "./sections/Projects";
import { Courses } from "./sections/Courses";

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

export default function Portfolio() {
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      <ScrollProgress />
      <Nav activeSection={activeSection} />

      <main id="main-content">
        <Hero />

        <ScrollAnimate variant="fade-up">
          <About />
        </ScrollAnimate>

        <ScrollAnimate variant="fade-up">
          <Skills />
        </ScrollAnimate>

        <ScrollAnimate variant="fade-up">
          <Experience />
        </ScrollAnimate>

        <ScrollAnimate variant="fade-up">
          <Projects />
        </ScrollAnimate>

        <ScrollAnimate variant="fade-up">
          <Books />
        </ScrollAnimate>

        <ScrollAnimate variant="fade-up">
          <Courses />
        </ScrollAnimate>

        {/* Contact Section */}
        <ScrollAnimate variant="fade-in">
          <section
            id="contact"
            className="px-6 py-16 bg-gray-900 dark:bg-gray-950 text-white"
          >
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-3">
                Open to Work
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Senior backend &amp; software engineering roles.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:tsatsarisgiorgos@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  tsatsarisgiorgos@gmail.com
                </a>
              </Button>
            </div>
          </section>
        </ScrollAnimate>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 text-center border-t bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800">
        <p>
          &copy; {new Date().getFullYear()} George Tsatsaris. Built with React,
          Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
