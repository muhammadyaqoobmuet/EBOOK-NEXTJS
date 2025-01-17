
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="rounded-md shadow-md shadow-black/50  p-3 relative overflow-hidden">
      <Image  alt="book-image" width={200} height={100}  className="w-screen h-[20rem] rounded-lg shadow-orange-300/30 shadow-md" src="/bookBanner.jpg" />
      <h1 className="bg-orange-800/80 py-2 text-center text-2xl font-bold tracking-widest rounded-e-full rounded-l-full w-full  text-white left-1/2 -translate-x-1/2  absolute top-1/2 -translate-y-1/2 ">OLD SCHOOL BOOKS</h1>
    </div>
  );
};

export default Banner;
