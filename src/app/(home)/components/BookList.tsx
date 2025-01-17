import React from "react";
import { Book } from "../../../types";
import BookCard from "./BookCard";

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 p-5">
      {books.map((book) => {
        return <BookCard key={book._id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
