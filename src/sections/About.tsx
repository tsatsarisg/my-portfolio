import { Card, CardContent } from "@/components/ui/card";
import { Code2, BookOpen, Layers, MapPin } from "lucide-react";

const quickFacts = [
  { icon: BookOpen, label: "B.Sc. Informatics", sub: "Athens University of Economics & Business" },
  { icon: Layers, label: "4 Years Experience", sub: "Full-stack & backend engineering" },
  { icon: MapPin, label: "Athens, Greece", sub: "Open to remote opportunities" },
  { icon: Code2, label: "200+ MRs Delivered", sub: "Across production codebases" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — narrative */}
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm a software engineer who cares deeply about the craft. I hold a
                B.Sc. in Informatics from AUEB and have spent 4 years building
                production systems across e-commerce, government, and cybersecurity.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                My engineering philosophy centres on{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  Domain-Driven Design
                </span>
                ,{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  clean architecture
                </span>
                , and{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  test-driven development
                </span>{" "}
                — not as buzzwords, but as practical tools for building systems that
                remain maintainable as they grow.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Outside of code, I read extensively on software architecture and
                invest time in deepening my understanding of distributed systems,
                event-driven patterns, and backend scalability.
              </p>
            </div>

            {/* Right — quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickFacts.map(({ icon: Icon, label, sub }) => (
                <Card key={label} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10 shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900 dark:text-white">
                        {label}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{sub}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
