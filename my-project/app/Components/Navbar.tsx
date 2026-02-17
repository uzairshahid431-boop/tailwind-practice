import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-500 flex justify-end items-center px-19 py-5">
      <ul className="flex gap-4 text-gray-700 font-medium">
        <button className="px-5 py-2 bg-white hover:bg-red-300 text-red rounded-md shadow transition">Works</button>
        <button className="px-5 py-2 bg-white hover:bg-red-300 text-red rounded-md shadow transition">Blog</button>
        <button className="px-5 py-2 bg-white hover:bg-red-300 text-red rounded-md shadow transition">Contact</button>
      </ul>
    </nav>
  );
};

export default Navbar;
