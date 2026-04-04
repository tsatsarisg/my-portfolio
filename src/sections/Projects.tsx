import { CardContent } from "@/components/ui/card";
import { Button, Card } from "@radix-ui/themes";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function Projects({ isDarkMode = false }) {
  const projects = [
    {
      title: "Agrohands",
      description:
        "Full-stack web application designed to connect agricultural employers with available workers. The platform enables farm owners, contractors, and agribusinesses to post job listings with detailed requirements, pay rates, and location information, while allowing workers to create profiles showcasing their skills, availability, and experience.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "CQRS",
        "DDD",
        "Docker",
        "Tailwind CSS",
        "TypeScript",
        "Result Pattern",
        "Eslint",
      ],
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
        <div
          className={
            projects.length === 1
              ? "flex justify-center"
              : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
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
                    <GithubIcon className="w-3 h-3 mr-1" />
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
