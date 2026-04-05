import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { books } from "@/data/data";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Books() {
  return (
    <section
      id="books"
      className="px-6 py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Recommended Books
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Books that have shaped my thinking as a developer and continue to
          influence my approach to building software.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.slice(0, 6).map((book) => (
            <Card
              key={book.isbn}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen className="w-5 h-5 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
                      {book.title}
                    </h3>
                    <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">
                      by {book.author}
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-3 text-gray-600 dark:text-gray-300">
                  {book.description}
                </p>
                <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {book.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/books">
              View All Books
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
