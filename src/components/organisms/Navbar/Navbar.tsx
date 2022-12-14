import React, { useState } from 'react';
import { useMobile } from 'hooks/useMobile';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMobile();
  const displayMobileNavbar = isOpen && isMobile;

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="relative transition-all top-0 bg-secondary h-16 w-full flex justify-center items-center shadow-sm custom-lg:h-20 z-50">
        <div className="flex relative justify-around items-center w-full text-primary text-sm font-extrabold">
          <Link
            href="#"
            className="text-center custom-xs:text-base custom-lg:text-xl">
            PrzestrzeΕ rozmowy π§ 
          </Link>
          {!isMobile && (
            <div className="flex w-1/4 p-3 justify-around items-center text-base max-w-sm font-medium custom-lg:text-lg">
              <Link href="#about">O nas π©βπΌπ¨βπΌ</Link>
              <Link href="#contact">Kontakt π</Link>
            </div>
          )}
          <button
            onClick={handleOpen}
            aria-label="Toggle menu"
            className="bg-white rounded-xl p-2 m-0 custom-md:hidden drop-shadow-sm transition-colors hover:drop-shadow-md hover:text-white ">
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
        </div>
      </div>
      {displayMobileNavbar && (
        <div
          aria-expanded={isOpen}
          className="flex justify-around relative p-3 text-sm items-center w-full text-white bg-tertiary font-medium z-50 custom-xs:text-base">
          <Link href="#about">O nas π©βπΌπ¨βπΌ</Link>
          <Link href="#contact">Kontakt π</Link>
        </div>
      )}
    </nav>
  );
};
