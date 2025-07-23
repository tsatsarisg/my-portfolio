import { Card, CardContent } from "@/components/ui/card";

export function About({ isDarkMode = false }) {
  return (
    <section
      id="about"
      className={`px-6 py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className={`text-lg mb-6 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I have a bachelors degree in Computer Science from AUEB and I
                work as a full stack developer.
              </p>
              <p
                className={`text-lg mb-6 transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Utilizing my experience and rigorous studies, I've honed a
                proficiency in methodologies such as clean code(refactoring),
                Domain-Driven Design (DDD), Ports and Adapters architecture, and
                thorough testing. This expertise empowers me to consistently
                implement high-quality, scalable solutions, prioritizing
                maintainability and efficiency.
              </p>
            </div>

            <Card
              className={`transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul
                  className={`space-y-2 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <li>🎓 Computer Science Degree</li>
                  <li>💼 4 Years Experience</li>
                  <li>🌍 Based in Athens, GRE</li>
                  <li>🚀 200+ MRS Delivered</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
