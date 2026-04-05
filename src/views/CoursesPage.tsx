"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Tag, User } from "lucide-react";

const categories = ["All", ...new Set(courses.map((c) => c.category))];

function getStatusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "In Progress":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  }
}

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="sticky top-0 border-b backdrop-blur-md z-40 bg-white/90 dark:bg-gray-900/90 border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            My Courses
          </h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              aria-label="Search courses"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter by category"
            className="px-3 py-2 rounded-md border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card
              key={course.title}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">
                  by {course.instructor}
                </p>
                <p className="text-sm mb-3 text-gray-600 dark:text-gray-300">
                  {course.description}
                </p>
                <div className="flex items-center gap-2 text-xs flex-wrap">
                  <Tag className="w-3 h-3 text-purple-500" />
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 rounded">
                    {course.category}
                  </span>
                  <User className="w-3 h-3 ml-2 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {course.duration} hrs
                  </span>
                  <span className={`px-2 py-1 rounded font-medium ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="text-center mt-10 text-gray-500 dark:text-gray-400">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
