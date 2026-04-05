import type { Metadata } from "next";
import BooksPage from "@/views/BooksPage";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books that have shaped my thinking as a software engineer — from Clean Code to Domain-Driven Design.",
};

export default function BooksRoute() {
  return <BooksPage />;
}
