import Image from "next/image";
import Link from "next/link";
import React from "react";

async function SingleBook({ params }: { params: { id: string } }) {
  const { id } = await params;

  // Fetch the book data from the API
  const resp = await fetch(`http://localhost:8080/api/books/${id}`);
  if (!resp.ok) {
    throw new Error("An error occurred while fetching the book details.");
  }

  const book = await resp.json();

  return (
    <div className="container mx-auto p-6">
      {/* Book Info */}
      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Book Cover Image */}
        <div className="flex justify-center items-center md:w-1/3 bg-gray-100">
          <Image
            height={400}
            width={300}
            src={book.coverImage}
            alt={book.title}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Book Details */}
        <div className="p-6 flex flex-col justify-between md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {book.title}
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Genre: <span className="font-semibold">{book.genre}</span>
          </p>

          <div className="mb-4">
            <p className="text-xl font-medium text-gray-800">
              Author: <span className="font-semibold">{book.author.name}</span>
            </p>
            <p className="text-sm text-gray-500">{book.author.email}</p>
          </div>

          <div className="mt-4">
            <Link
              href={book.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Download Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
