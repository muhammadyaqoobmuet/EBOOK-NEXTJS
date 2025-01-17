import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-blacke py-6 border-t mt-16">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Book Library. All Rights Reserved.
        </p>
        <p className="text-sm mt-2">
          Designed with ❤️ by <span className="font-semibold">jack</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
