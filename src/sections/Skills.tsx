export function Skills({ isDarkMode = false }) {
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

  return (
    <section
      id="skills"
      className={`px-6 py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Skills
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
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
          <div className="text-center">
            <h3
              className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Methodologies
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.methodologies.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
