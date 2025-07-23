import { useEffect, useState } from "react";
import { Button, Card } from "@radix-ui/themes";
import { Github, Mail, ExternalLink, BookOpen } from "lucide-react";
import { CardContent } from "./components/ui/card";
import { Experience } from "./sections/Experience";
import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import { Nav } from "./Nav";
import { Skills } from "./sections/Skills";

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
        "projects",
        "experience",
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard with interactive charts and filters",
      tech: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      github: "#",
      live: "#",
    },
  ];

  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      description: "A handbook of agile software craftsmanship",
      category: "Programming",
    },
    {
      title: "System Design Interview",
      author: "Alex Xu",
      description: "An insider's guide to system design interviews",
      category: "System Design",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      description: "Deep dive into JavaScript fundamentals",
      category: "JavaScript",
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      description: "The big ideas behind reliable, scalable systems",
      category: "Architecture",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      description: "Your journey to mastery",
      category: "Career",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "An easy & proven way to build good habits",
      category: "Personal Development",
    },
  ];

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

      {/* Projects Section */}
      <section
        id="projects"
        className={`px-6 py-16 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 hover:bg-gray-650"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 text-sm transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs transition-colors duration-300 ${
                          isDarkMode
                            ? "bg-gray-600 text-gray-200"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="2"
                      className="flex-1 bg-transparent"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="2"
                      className="flex-1 bg-transparent"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Experience isDarkMode={isDarkMode} />

      <section id="books" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Recommended Books
          </h2>
          <p
            className={`text-center mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Books that have shaped my thinking as a developer and continue to
            influence my approach to building software.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 hover:bg-gray-650"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <BookOpen
                      className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-300 ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                    <div>
                      <h3
                        className={`font-semibold mb-1 transition-colors duration-300 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {book.title}
                      </h3>
                      <p
                        className={`text-sm mb-2 transition-colors duration-300 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        by {book.author}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-sm mb-3 transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {book.description}
                  </p>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium transition-colors duration-300 ${
                      isDarkMode
                        ? "bg-blue-900 text-blue-200"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {book.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
        <p>&copy; 2024 Alex Johnson. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
