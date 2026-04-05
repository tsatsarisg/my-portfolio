import type { Metadata } from "next";
import BooksPage from "./_components/books-page";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books that have shaped my thinking as a software engineer — from Clean Code to Domain-Driven Design.",
};

export default function BooksRoute() {
  return <BooksPage />;
}
