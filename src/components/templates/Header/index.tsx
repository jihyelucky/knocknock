import React, { useState } from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold text-white">Logo</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-500 text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
