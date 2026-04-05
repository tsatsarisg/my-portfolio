import { Card, CardContent } from "@/components/ui/card";
import { Code2, BookOpen, Layers, MapPin } from "lucide-react";

const quickFacts = [
  {
    icon: BookOpen,
    label: "B.Sc. Informatics",
    sub: "Athens University of Economics & Business",
  },
  {
    icon: Layers,
    label: "5 Years Experience",
    sub: "Full-stack & backend engineering",
  },
  {
    icon: MapPin,
    label: "Athens, Greece",
    sub: "Open to remote/hybrid opportunities",
  },
  { icon: Code2, label: "300+ MRs Merged", sub: "Across production codebases" },
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
                I&apos;m a software engineer with five years of production
                experience across cybersecurity, e-commerce, and government
                systems. I gravitate toward backend and distributed systems work
                — the kind where design decisions compound over time and getting
                them right actually matters. Right now I&apos;m the founding
                backend engineer at a cybersecurity SaaS startup, building core
                infrastructure from the ground up.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Above all, I&apos;m pragmatic. I reach for{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  Domain-Driven Design
                </span>
                ,{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  CQRS
                </span>
                , and{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  clean architecture
                </span>{" "}
                because they help me understand and model business rules
                accurately. The goal is always to solve the right problem, with
                as little accidental complexity as possible.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                I invest time in reading deeply — refactoring, design patterns,
                architecture, TDD — and I bring that into daily work through
                code reviews, architectural conversations, and a habit of asking
                &ldquo;why&rdquo; before writing a line of code.
              </p>
            </div>

            {/* Right — quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickFacts.map(({ icon: Icon, label, sub }) => (
                <Card
                  key={label}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10 shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900 dark:text-white">
                        {label}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {sub}
                      </p>
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
