import { Badge } from "@/components/ui/badge";
import { ScrollAnimate } from "@/components/scroll-animate";

const experiences = [
  {
    title: "Founding Backend Software Engineer",
    company: "Tashita Software Security",
    period: "May 2025 - Present",
    description:
      "I am currently working as a founding backend software engineer at Tashita Software Security.",
    technologies: [] as string[],
  },
  {
    title: "Software Engineer",
    company: "Hellenic Republic Ministry Of National Defence",
    period: "Oct 2024 - Sept 2025",
    description:
      "During my military service, served in the Web Services Department, where I was responsible for resolving critical issues, implementing new features, and improving the functionality of the ministry's internal web applications. Contributed to the enhancement of the ministry's custom internal chatbot and leveraged my professional experience to suggest and implement infrastructure improvements that increased system reliability and maintainability.",
    technologies: ["React", "LLM", "Flask", "Docker", "Redis", "PHP"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Upstream",
    period: "Apr 2022 - Oct 2024",
    description:
      "Part of the E-commerce team developing an in-house SaaS platform for campaign creation, SMS automation, lead management, third-party API integrations, and advanced campaign performance tools including dashboards, event-based analytics, and visitor tracking. Delivered key features end-to-end — from design to deployment — and contributed to code reviews, solution investigations, and the implementation of scalable, maintainable code.",
    technologies: [
      "Typescript",
      "HTML5",
      "CSS3",
      "NodeJs",
      "Docker",
      "React",
      "MongoDB",
      "Kafka",
      "ElasticSearch",
      "TDD",
      "DDD",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-16 bg-gray-50 dark:bg-gray-800"
    >
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
                      <div
                        className={`${
                          index % 2 === 0
                            ? "md:pr-12"
                            : "md:pl-12"
                        }`}
                      >
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                          <div className="flex flex-col gap-2 mb-3">
                            <Badge
                              variant="outline"
                              className="w-fit text-xs"
                            >
                              {exp.period}
                            </Badge>
                            <h3 className="text-xl font-semibold">
                              {exp.title}
                            </h3>
                            <p className="text-lg font-medium text-foreground">
                              {exp.company}
                            </p>
                          </div>
                          <p className="text-muted-foreground mb-4 text-sm">
                            {exp.description}
                          </p>
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

                    {/* Spacer for the other side */}
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
