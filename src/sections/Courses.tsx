import { CardContent } from "@/components/ui/card";
import { courses } from "@/data/data";
import { Button, Card } from "@radix-ui/themes";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router";

export function Courses({ isDarkMode = false }) {
  return (
    <section
      id="courses"
      className={`px-6 py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Completed Courses
        </h2>
        <p
          className={`text-center mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Online courses and certifications that have helped me grow as a
          software engineer.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((course, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 hover:bg-gray-650"
                  : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap
                    className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-300 ${
                      isDarkMode ? "text-green-400" : "text-green-600"
                    }`}
                  />
                  <div>
                    <h3
                      className={`font-semibold mb-1 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {course.title}
                    </h3>
                    <p
                      className={`text-sm mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {course.instructor}
                    </p>
                  </div>
                </div>
                <p
                  className={`text-sm mb-3 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {course.description}
                </p>
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-green-900 text-green-200"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {course.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/courses">
            <Button variant="outline" size="2">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
