import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { ExternalLink } from "lucide-react";

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
    github: "https://github.com/tsatsarisg/agrohands",
    live: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div
          className={
            projects.length === 1
              ? "flex justify-center"
              : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 max-w-lg"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-3 h-3" />
                      Code
                    </a>
                  </Button>
                  {project.live !== "#" && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
