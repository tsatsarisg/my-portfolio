import { useEffect, useState } from "react";
import { Button } from "@radix-ui/themes";
import { Mail } from "lucide-react";
import { Experience } from "./sections/Experience";
import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import { Nav } from "./Nav";
import { Skills } from "./sections/Skills";
import { Books } from "./sections/Books";
import { Projects } from "./sections/Projects";
import { Courses } from "./sections/Courses";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "blog",
        "books",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <Nav
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        toggleTheme={toggleTheme}
      />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Books isDarkMode={isDarkMode} />
      <Courses isDarkMode={isDarkMode} /> {/* Add here */}
      {/* Contact Section */}
      <section
        id="contact"
        className={`px-6 py-16 text-white transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-900"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can bring your ideas to life.
          </p>
          <Button size="3" className="bg-blue-600 hover:bg-blue-700">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer
        className={`px-6 py-8 text-center border-t transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-900 text-gray-400 border-gray-800"
            : "bg-gray-900 text-gray-400 border-gray-800"
        }`}
      >
        <p>
          &copy; 2025 George Tsatsaris. Built with React, Vite and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
