import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const NavBar = () => {
  return (
    <div className={`w-full p-4  bg-orange-100/10 ${poppins.className}`}>
      <div className="flex justify-between items-center">
        <div className="logo font-bold text-2xl tracking-tighter">OS BOOKS</div>
        <div className="flex gap-4">
          <Button
            asChild
            className={`${buttonVariants({
              variant: "secondary",
            })}  bg-orange-700 text-white font-semibold hover:bg-orange-800`}
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            className="bg-transparent border-orange-800 text-orange-900/50 font-bold border-2 hover:bg-transparent hover:outline-orange-950 "
          >
            <Link href="/singup">SingUp</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;




