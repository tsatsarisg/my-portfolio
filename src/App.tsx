import { useEffect, useState } from "react";

import { Button, Card } from "@radix-ui/themes";
import {
  Coffee,
  Code2,
  Zap,
  Heart,
  Sun,
  Moon,
  X,
  Menu,
  MapPin,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  Clock,
  BookOpen,
} from "lucide-react";
import { CardContent } from "./components/ui/card";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

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

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  };

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

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications serving 100k+ users",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description:
        "Built and maintained multiple client projects using modern web technologies",
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description:
        "Developed responsive user interfaces and improved application performance",
    },
  ];

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Best practices for structuring large React applications with proper state management and component architecture.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Best Practices"],
    },
    {
      title: "Mastering TypeScript in 2024",
      excerpt:
        "Advanced TypeScript patterns and techniques that will make your code more robust and maintainable.",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
    },
    {
      title: "Database Design for Modern Applications",
      excerpt:
        "How to design efficient database schemas for high-performance web applications with PostgreSQL.",
      date: "Nov 10, 2024",
      readTime: "15 min read",
      tags: ["Database", "PostgreSQL", "Backend"],
    },
    {
      title: "The Art of Code Reviews",
      excerpt:
        "Creating a culture of constructive code reviews that improve code quality and team collaboration.",
      date: "Oct 22, 2024",
      readTime: "6 min read",
      tags: ["Code Review", "Team", "Process"],
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

  const quickFacts = [
    { icon: Coffee, label: "Coffee consumed", value: "∞ cups" },
    { icon: Code2, label: "Lines of code", value: "500k+" },
    { icon: Zap, label: "Projects completed", value: "50+" },
    { icon: Heart, label: "Years of experience", value: "5+" },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 backdrop-blur-sm border-b z-50 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-900/90 border-gray-700"
            : "bg-white/90 border-gray-200"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className={`font-bold text-xl transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Alex Johnson
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "blog", label: "Blog" },
                { id: "books", label: "Books" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : isDarkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="2"
                onClick={toggleTheme}
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "border-gray-600 hover:bg-gray-800"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="outline"
                size="2"
                onClick={toggleTheme}
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "border-gray-600 hover:bg-gray-800"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={isDarkMode ? "text-white" : "text-gray-900"}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              className={`md:hidden mt-4 py-4 border-t transition-colors duration-300 ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="flex flex-col space-y-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "experience", label: "Experience" },
                  { id: "blog", label: "Blog" },
                  { id: "books", label: "Books" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors hover:text-blue-600 ${
                      activeSection === item.id
                        ? "text-blue-600"
                        : isDarkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-6 py-20 pt-32 max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8"></div>
          <h1
            className={`text-5xl font-bold tracking-tight transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Alex Johnson
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Full Stack Engineer crafting digital experiences with modern
            technologies
          </p>
          <div
            className={`flex items-center justify-center gap-2 transition-colors duration-300 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="outline" size="2">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="2">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="2">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`px-6 py-16 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm a passionate full stack engineer with 5+ years of experience
                building scalable web applications. I specialize in React,
                Node.js, and cloud technologies, with a keen eye for user
                experience and performance optimization.
              </p>
              <p
                className={`text-lg leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                When I'm not coding, you'll find me writing technical blogs,
                contributing to open source projects, or exploring the great
                outdoors. I believe in continuous learning and sharing knowledge
                with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <Card
                  key={index}
                  className={`transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CardContent className="p-4 text-center">
                    <fact.icon
                      className={`w-8 h-8 mx-auto mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                    <div
                      className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {fact.value}
                    </div>
                    <div
                      className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {fact.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Backend
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Experience Section */}
      <section id="experience" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="border-l-2 border-blue-500 pl-6 relative"
              >
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-0"></div>
                <div className="space-y-2">
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {job.title}
                  </h3>
                  <div
                    className={`flex items-center gap-2 transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="font-medium">{job.company}</span>
                    <span>•</span>
                    <span className="text-sm">{job.period}</span>
                  </div>
                  <p
                    className={`transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className={`px-6 py-16 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Latest Blog Posts
          </h2>
          <p
            className={`text-center mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I write about web development, best practices, and lessons learned
            from building scalable applications.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 hover:bg-gray-650"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {post.title}
                  </h3>
                  <p
                    className={`mb-4 text-sm leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-300 ${
                          isDarkMode
                            ? "bg-blue-900 text-blue-200"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
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
