import { CardContent } from "@/components/ui/card";
import { books } from "@/data/data";
import { Button, Card } from "@radix-ui/themes";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export function Books({ isDarkMode = false }) {
  return (
    <section
      id="books"
      className={`px-6 py-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Recommended Books
        </h2>
        <p
          className={`text-center mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Books that have shaped my thinking as a developer and continue to
          influence my approach to building software.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.slice(0, 6).map((book, index) => (
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
                  <BookOpen
                    className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors duration-300 ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <div>
                    <h3
                      className={`font-semibold mb-1 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {book.title}
                    </h3>
                    <p
                      className={`text-sm mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      by {book.author}
                    </p>
                  </div>
                </div>
                <p
                  className={`text-sm mb-3 transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {book.description}
                </p>
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-blue-900 text-blue-200"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {book.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/books">
            <Button variant="outline" size="2">
              View All Books
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
