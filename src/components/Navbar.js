import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 border-2">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">
          <img src="./logo.avif" className="h-10"></img>
        </a>
        <div className="flex space-x-4">
          <a
            href="/signup"
            className="text-black hover:text-gray-300 px-3 py-2 border border-black rounded-3xl text-md font-bold"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="text-black hover:text-gray-300 px-3 py-2 border border-black rounded-3xl text-md font-bold"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
