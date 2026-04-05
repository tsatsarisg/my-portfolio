import type { Metadata } from "next";
import CoursesPage from "./_components/courses-page";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Online courses and certifications in JavaScript, React, Node.js, Docker, and more that have helped me grow as a software engineer.",
};

export default function CoursesRoute() {
  return <CoursesPage />;
}
