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
      title: "Full Stack Developer",
      company: "Hellenic Republic Ministry Of National Defence",
      period: "Oct 2024 - Sept 2025",
      description:
        "During my military service, I was part of the Web Services Department, where I was responsible for fixing bugs and implementing feature improvements in the software. I actively contributed to enhancing the internal AI chatbot, which was developed for organizational use.",
      technologies: ["React", "Python", "Flask", "Docker", "Redis", "PHP"],
    },
    {
      title: "Full Stack Developer",
      company: "Upstream",
      period: "Apr 2022 - Oct 2024",
      description:
        "Been part of the E-commerce team which developed an in house SaaS platform for campaigns creation through an interface, supported sms text automations, leads management and consuming third party APIs. Actively contributed and been responsible for code reviews, solution investigations, designs and implementation. ",
      technologies: [
        "Typescript",
        "HTML5",
        "CSS3",
        "NodeJs",
        "Docker",
        "React",
        "MongoDB",
        "Kafka",
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
