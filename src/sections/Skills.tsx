const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "HTML5",
    "CSS3",
    "JavaScript",
  ],
  backend: [
    "Node.js",
    "NestJs",
    "MongoDB",
    "Express",
    "GO",
    "DotNet",
    "Kafka",
    "Redis",
    "Jest",
  ],
  tools: ["Git", "Docker", "Figma", "Postman", "Jira", "Linux"],
  methodologies: [
    "DDD",
    "CQRS",
    "Clean Code",
    "Kanban",
    "TDD",
    "CI/CD",
    "Scrum",
    "Microservices",
    "Event-Driven Architecture",
  ],
};

const categories = [
  { key: "frontend" as const, label: "Frontend", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  { key: "backend" as const, label: "Backend", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  { key: "tools" as const, label: "Tools", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  { key: "methodologies" as const, label: "Methodologies", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ key, label, color }) => (
            <div key={key} className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {label}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills[key].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
