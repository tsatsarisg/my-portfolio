import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { books } from "@/data/data";
import { Button, Card } from "@radix-ui/themes";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Search,
  Star,
  Tag,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const savedTheme = localStorage.getItem("theme");
  const isDarkMode = savedTheme === "dark";

  const categories = ["All", ...new Set(books.map((book) => book.category))];
  const statuses = ["All", "Read", "Currently Reading", "Want to Read"];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "All" || book.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : isDarkMode
            ? "text-gray-600"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Read":
        return "bg-green-100 text-green-800";
      case "Currently Reading":
        return "bg-blue-100 text-blue-800";
      case "Want to Read":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const stats = {
    totalBooks: books.length,
    readBooks: books.filter((b) => b.status === "Read").length,
    currentlyReading: books.filter((b) => b.status === "Currently Reading")
      .length,
    wantToRead: books.filter((b) => b.status === "Want to Read").length,
    totalPages: books
      .filter((b) => b.status === "Read")
      .reduce((sum, book) => sum + book.pages, 0),
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 backdrop-blur-sm border-b z-50 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-900/90 border-gray-700"
            : "bg-white/90 border-gray-200 text-black"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <Button variant="outline" size="2" color="gray">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <div>
            <h1
              className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Library
            </h1>
            <p
              className={`text-sm transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Books that shape my thinking as a developer
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card
            className={`transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-200"
            }`}
          >
            <CardContent className="p-4 text-center">
              <div
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {stats.totalBooks}
              </div>
              <div
                className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Total Books
              </div>
            </CardContent>
          </Card>

          <Card
            className={`transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {stats.readBooks}
              </div>
              <div
                className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Read
              </div>
            </CardContent>
          </Card>

          <Card
            className={`transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {stats.currentlyReading}
              </div>
              <div
                className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Reading
              </div>
            </CardContent>
          </Card>

          <Card
            className={`transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-600">
                {stats.wantToRead}
              </div>
              <div
                className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Want to Read
              </div>
            </CardContent>
          </Card>

          <Card
            className={`transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <CardContent className="p-4 text-center">
              <div
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {stats.totalPages.toLocaleString()}
              </div>
              <div
                className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Pages Read
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <Input
              placeholder="Search books or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`px-3 py-2 rounded-md border transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className={`px-3 py-2 rounded-md border transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-800 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-900"
            }`}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                  : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen
                    className={`w-6 h-6 mt-1 flex-shrink-0 transition-colors duration-300 ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <div className="flex-1">
                    <h3
                      className={`font-bold text-lg mb-1 transition-colors duration-300 ${
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

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">{renderStars(book.rating)}</div>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                      book.status
                    )}`}
                  >
                    {book.status}
                  </span>
                </div>

                <p
                  className={`text-sm mb-4 leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {book.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs">
                    <Tag
                      className={`w-3 h-3 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`px-2 py-1 rounded transition-colors duration-300 ${
                        isDarkMode
                          ? "bg-purple-900 text-purple-200"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {book.category}
                    </span>
                  </div>

                  {book.dateRead && (
                    <div className="flex items-center gap-2 text-xs">
                      <Calendar
                        className={`w-3 h-3 transition-colors duration-300 ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`transition-colors duration-300 ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Read on {new Date(book.dateRead).toLocaleDateString()}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-xs">
                    <User
                      className={`w-3 h-3 transition-colors duration-300 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`transition-colors duration-300 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {book.pages} pages
                    </span>
                  </div>
                </div>

                {book.keyTakeaways.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4
                      className={`text-sm font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Key Takeaways:
                    </h4>
                    <ul className="space-y-1">
                      {book.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                        <li
                          key={i}
                          className={`text-xs transition-colors duration-300 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          • {takeaway}
                        </li>
                      ))}
                      {book.keyTakeaways.length > 2 && (
                        <li
                          className={`text-xs transition-colors duration-300 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          + {book.keyTakeaways.length - 2} more...
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {book.review && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4
                      className={`text-sm font-semibold mb-2 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      My Review:
                    </h4>
                    <p
                      className={`text-xs italic transition-colors duration-300 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      "{book.review}"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen
              className={`w-16 h-16 mx-auto mb-4 transition-colors duration-300 ${
                isDarkMode ? "text-gray-600" : "text-gray-400"
              }`}
            />
            <h3
              className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              No books found
            </h3>
            <p
              className={`transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
