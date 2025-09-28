import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience({ isDarkMode = false }) {
  const experiences = [
    {
      title: "Mid Level Software Engineer",
      company: "Tashita",
      period: "May 2025 - Present",
      description:
        "I am currently working as a mid-level software engineer at Tashita.",
      technologies: ["NestJs", "TypeScript", "MongoDB",  "Docker", "DDD"],
    },
    {
      title: "Software Engineer",
      company: "Hellenic Republic Ministry Of National Defence",
      period: "Oct 2024 - Sept 2025",
      description:
        "During my military service, served in the Web Services Department, where I was responsible for resolving critical issues, implementing new features, and improving the functionality of the ministry’s internal web applications. Contributed to the enhancement of the ministry’s custom internal chatbot and leveraged my professional experience to suggest and implement infrastructure improvements that increased system reliability and maintainability.",
      technologies: ["React", "LLM", "Flask", "Docker", "Redis", "PHP"],
    },
    {
      title: "Junior Software Engineer",
      company: "Upstream",
      period: "Apr 2022 - Sept 2024",
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

  return (
    <section
      id="experience"
      className={`px-6 py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-12 text-center transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 hover:bg-gray-650"
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
