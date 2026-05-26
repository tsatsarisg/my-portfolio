"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { books } from "@/data/data";
import { ArrowLeft, BookOpen, Search, Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const categories = ["All", ...new Set(books.map((book) => book.category))];

const totalPages = books.reduce((sum, book) => sum + book.pages, 0);

function renderStars(rating: number) {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${
        i < rating
          ? "fill-yellow-400 text-yellow-400"
          : "text-gray-300 dark:text-gray-600"
      }`}
    />
  ));
}

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
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
            My Books
          </h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {books.length} books &middot; {totalPages.toLocaleString()} pages
        </p>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
            <Input
              placeholder="Search books or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              aria-label="Search books"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter by category"
            className="px-3 py-2 rounded-md border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <Card
              key={book.isbn}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                  {book.title}
                </h3>
                <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">
                  by {book.author}
                </p>
                <p className="text-sm leading-relaxed line-clamp-3 text-gray-600 dark:text-gray-300">
                  {book.description}
                </p>
                <div className="flex gap-3 items-center text-xs flex-wrap mt-4">
                  <div
                    className="flex"
                    role="img"
                    aria-label={`Rated ${book.rating} out of 5 stars`}
                  >
                    {renderStars(book.rating)}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">
                    &middot;
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {book.pages} pages
                  </span>
                </div>
                <div className="mt-3">
                  <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    {book.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              No books found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
