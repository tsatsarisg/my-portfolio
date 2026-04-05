import { Badge } from "@/components/ui/badge";
import { ScrollAnimate } from "@/components/scroll-animate";

const experiences = [
  {
    title: "Founding Backend Software Engineer",
    company: "Tashita Software Security",
    period: "May 2025 - Present",
    bullets: [
      "Designed and built the backend infrastructure of a cybersecurity SaaS product from scratch, making foundational architecture decisions that will shape the system for years — API design, service boundaries, data models, and event flows.",
      "Applied Domain-Driven Design and Ports & Adapters to establish clear module boundaries early, keeping the codebase navigable and extensible as the product scope expands.",
      "Owned the full delivery pipeline end-to-end: CI/CD setup, containerisation, deployment workflows, and the engineering standards the team will build on going forward.",
    ],
    technologies: [] as string[],
  },
  {
    title: "Software Engineer",
    company: "Hellenic Republic Ministry Of National Defence",
    period: "Oct 2024 - Sept 2025",
    bullets: [
      "Diagnosed and resolved critical bugs across mission-critical internal web applications used by ministry staff, reducing production incidents and improving system reliability.",
      "Extended and improved an in-house LLM-powered chatbot, iterating on prompt architecture and backend integration to meaningfully increase response accuracy and uptime.",
      "Proposed and delivered infrastructure improvements — including caching and containerisation changes — that reduced operational friction and improved long-term maintainability.",
    ],
    technologies: ["React", "LLM", "Flask", "Docker", "Redis", "PHP"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Upstream",
    period: "Apr 2022 - Oct 2024",
    bullets: [
      "Built core product features of a high-traffic SaaS platform for SMS campaign management, lead tracking, and event-based analytics — taking ownership end-to-end from architecture through to production deployment.",
      "Integrated multiple third-party APIs and delivered advanced reporting dashboards and visitor-tracking tooling actively used by enterprise clients across the platform.",
      "Introduced and championed DDD and TDD practices across the engineering team, contributed to architecture reviews, and raised the bar for code quality through regular and substantive code reviews.",
    ],
    technologies: [
      "Typescript",
      "NodeJs",
      "React",
      "MongoDB",
      "Kafka",
      "ElasticSearch",
      "Docker",
      "TDD",
      "DDD",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Work Experience
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-600" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollAnimate
                  key={exp.company}
                  variant={index % 2 === 0 ? "fade-right" : "fade-left"}
                  delay={index * 100}
                >
                  <div
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-800 z-10" />

                    {/* Content */}
                    <div className="md:w-1/2 pl-8 md:pl-0">
                      <div className={index % 2 === 0 ? "md:pr-12" : "md:pl-12"}>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                          <div className="flex flex-col gap-2 mb-4">
                            <Badge variant="outline" className="w-fit text-xs">
                              {exp.period}
                            </Badge>
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-base font-medium text-muted-foreground">
                              {exp.company}
                            </p>
                          </div>
                          <ul className="space-y-2 mb-4">
                            {exp.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex gap-2 text-sm text-muted-foreground"
                              >
                                <span className="text-primary mt-0.5 shrink-0">▸</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                          {exp.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
