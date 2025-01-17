import React from "react";

import BookCard from "./BookCard";
import { Book } from "@/types";


  const resp = await fetch(`${process.env.BACKEND_URL}/books`, {
    cache: "no-store",
  });
  if (!resp.ok) {
    throw new Error("An error occurred while fetching data");
  }


const data = await resp?.json();
const books = await data.books;

const BookList = async () => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 p-5">
      {books.map((book: Book) => {
        return <BookCard key={book._id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
