import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky transition-all top-0 bg-secondary h-16 w-full flex justify-center items-center shadow-sm">
        <div className="flex justify-around items-center w-full text-primary text-sm font-extrabold">
          <button
            onClick={handleOpen}
            aria-label="Toggle menu"
            className="bg-white rounded-xl  p-2 m-0 bo md:hidden drop-shadow-sm transition-colors hover:drop-shadow-md hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="#034626">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link href="#" className="text-center mr-5">
            Przestrzeń rozmowy 🧠
          </Link>
        </div>
      </nav>
      {isOpen && (
        <div
          aria-expanded={isOpen}
          className="flex justify-around p-3 text-sm items-center w-full text-white bg-tertiary font-medium ">
          <Link href="#about">O nas 👩‍💼👨‍💼</Link>
          <Link href="#contact">Kontakt 📞</Link>
        </div>
      )}
    </>
  );
};
