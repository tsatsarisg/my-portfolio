import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/data";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Courses() {
  return (
    <section
      id="courses"
      className="px-6 py-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Completed Courses
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Online courses and certifications that have helped me grow as a
          software engineer.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((course) => (
            <Card
              key={course.title}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 mt-1 flex-shrink-0 text-green-600 dark:text-green-400" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">
                      {course.instructor}
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-3 text-gray-600 dark:text-gray-300">
                  {course.description}
                </p>
                <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  {course.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/courses">
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
