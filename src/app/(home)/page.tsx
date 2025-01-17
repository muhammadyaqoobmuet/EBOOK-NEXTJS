import Banner from "@/components/Banner";
import BookList from "./components/BookList";

export default async function Home() {
  const resp = await fetch(`${process.env.BACKEND_URL}/books`);
  if (!resp.ok) {
    throw new Error("An error occurred while fetching data");
  }

  const books = await resp.json();
 

  return (
    <>
      <Banner />
      <BookList books={books.books} />
    </>
  );
}
