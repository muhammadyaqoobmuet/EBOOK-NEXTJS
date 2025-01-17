import React from "react";
import { Book } from "../../../types";
import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg mt-10 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Book Cover */}
      <Image
        height={1000}
        width={1000}
        src={book.coverImage}
        alt={book.title}
        className="w-full h-56 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Book Title */}
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {book.title}
        </h3>

        {/* Book Genre */}
        <p className="text-sm text-gray-500 mt-2">{book.genre}</p>

        {/* Author */}
        {book.author && (
          <p className="text-sm text-gray-600 mt-1">
            By: <span className="font-medium">{book.author.name}</span>
          </p>
        )}

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between items-center">
          <Link
            href={`/books/${book._id}`}
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Read Now
          </Link>
          <button
            disabled
            className="text-orange-500 hover:text-orange-600 text-sm font-medium transition"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
