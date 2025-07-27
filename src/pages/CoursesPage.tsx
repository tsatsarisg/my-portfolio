import { useState } from "react";
import { Link } from "react-router";
import { courses } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@radix-ui/themes";
import { ArrowLeft, Search, Tag, User } from "lucide-react";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const savedTheme = localStorage.getItem("theme");
  const isDarkMode = savedTheme === "dark";

  const categories = ["All", ...new Set(courses.map((c) => c.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .slice(0, 6); // ✅ show only first 6 courses

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "dark bg-gray-900" : "bg-white"}`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 border-b ${
          isDarkMode
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My Courses
          </h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`px-3 py-2 rounded-md border ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, i) => (
            <Card
              key={i}
              className={
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }
            >
              <CardContent className="p-5">
                <h3
                  className={`font-bold text-lg mb-1 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {course.title}
                </h3>
                <p
                  className={`text-sm mb-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  by {course.instructor}
                </p>
                <p
                  className={`text-sm mb-3 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {course.description}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <Tag className="w-3 h-3 text-purple-500" />
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    {course.category}
                  </span>
                  <User className="w-3 h-3 ml-2 text-gray-500" />
                  <span>{course.duration} hrs</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p
            className={`text-center mt-10 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
