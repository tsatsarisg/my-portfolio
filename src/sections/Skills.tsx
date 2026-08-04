import { Card, CardContent } from "@/components/ui/card";

type SkillGroup = {
  label: string;
  description: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Architecture & Design",
    description: "Patterns I use to model business rules and manage real complexity",
    items: [
      "Domain-Driven Design",
      "CQRS",
      "Event Sourcing",
      "Event-Driven Architecture",
      "Hexagonal Architecture (Ports & Adapters)",
      "Vertical Slice Architecture",
      "Microservices",
    ],
  },
  {
    label: "Backend Engineering",
    description: "The stack I reach for and the runtime I think in",
    items: ["Node.js", "NestJS", "TypeScript", "Go", ".NET Core", "REST APIs"],
  },
  {
    label: "Data & Messaging",
    description: "Persistence, streaming, and inter-service communication",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "ElasticSearch",
      "ClickHouse",
    ],
  },
  {
    label: "Practices",
    description: "How I work and what I hold teams to",
    items: [
      "Test-Driven Development",
      "Code Review",
      "CI/CD",
      "Docker",
      "Git",
      "Linux",
    ],
  },
  {
    label: "Frontend",
    description: "Enough to own a feature end-to-end",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "TanStack"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-3 text-center text-gray-900 dark:text-white">
          Skills
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto text-sm">
          Organised by what I think about most — architecture first, tools
          second.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Architecture card spans full width — it's the differentiator */}
          {(() => {
            const arch = skillGroups[0];
            if (!arch) return null;
            return (
              <Card className="md:col-span-2 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {arch.label}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {arch.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {arch.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })()}

          {/* Remaining groups in 2-column grid */}
          {skillGroups.slice(1).map((group) => (
            <Card
              key={group.label}
              className="hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {group.label}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {group.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
