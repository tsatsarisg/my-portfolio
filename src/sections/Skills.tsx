import { Card, CardContent } from "@/components/ui/card";

type SkillGroup = {
  label: string;
  description: string;
  color: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Architecture & Design",
    description: "Patterns I use to model business rules and manage real complexity",
    color:
      "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200",
    items: [
      "Domain-Driven Design",
      "CQRS",
      "Event Sourcing",
      "Clean Architecture",
      "Hexagonal Architecture",
      "Vertical Slice Architecture",
      "Ports & Adapters",
      "Strategic Design",
      "Bounded Contexts",
      "Aggregate Design",
      "Event-Driven Architecture",
      "Result Pattern",
      "Microservices",
    ],
  },
  {
    label: "Backend Engineering",
    description: "The stack I reach for and the runtime I think in",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
    items: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Go",
      ".NET Core",
      "REST APIs",
      "Express",
    ],
  },
  {
    label: "Data & Messaging",
    description: "Persistence, streaming, and inter-service communication",
    color:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "Valkey",
      "ElasticSearch",
      "ClickHouse",
      "BullMQ",
    ],
  },
  {
    label: "Practices",
    description: "How I work and what I hold teams to",
    color:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
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
    color: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
      "TanStack",
    ],
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
                        className={`px-3 py-1 rounded-full text-sm font-medium ${arch.color}`}
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
                      className={`px-3 py-1 rounded-full text-sm font-medium ${group.color}`}
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
