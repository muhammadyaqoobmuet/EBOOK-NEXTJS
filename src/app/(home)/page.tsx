import Banner from "@/components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading/>}>
        <BookList />
      </Suspense>
    </>
  );
}
