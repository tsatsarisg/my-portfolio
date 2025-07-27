import { CardContent } from "@/components/ui/card";
import { Button, Card } from "@radix-ui/themes";
import { Github, ExternalLink } from "lucide-react";

export function Projects({ isDarkMode = false }) {
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
  return (
    <section
      id="projects"
      className={`px-6 py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
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
  );
}
