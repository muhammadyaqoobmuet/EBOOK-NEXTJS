"use client";
import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const NavBar = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve token from localStorage on mount
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null); // Update state after removing the token
  };

  return (
    <div className={`w-full p-4 bg-orange-100/10 ${poppins.className}`}>
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="logo font-bold text-2xl tracking-tighter">
            OS BOOKS
          </div>
        </Link>
        <div className="flex gap-4">
          {token ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <div className="flex gap-2 items-center">
              <Button
                asChild
                className={`${buttonVariants({
                  variant: "secondary",
                })} bg-orange-700 text-white font-semibold hover:bg-orange-800`}
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-transparent border-orange-800 text-orange-900/50 font-bold border-2 hover:bg-transparent hover:outline-orange-950"
              >
                <Link href="/signup">Signup</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
