import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { Lock } from "lucide-react";
import { projects } from "@/data/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-center text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-sm">
          Side projects are where I pressure-test architecture ideas — the same
          discipline across TypeScript, Go, and C#.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
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
                <div className="mt-auto">
                  {project.github ? (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 h-9">
                      <Lock className="w-3 h-3" />
                      Private repository
                    </span>
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
