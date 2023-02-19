import React, { useState } from 'react';
import { useMobile } from 'hooks/useMobile';
import { useScroll } from 'hooks/useScroll';

import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMobile();
  const { handleScroll } = useScroll();
  const displayMobileNavbar = isOpen && isMobile;

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-20">
      <div className="relative transition-all top-0 bg-secondary h-20 w-full flex justify-center items-center shadow-sm custom-lg:h-20 z-50">
        <div className="flex relative justify-around items-center w-full text-primary text-sm font-extrabold">
          <Link
            href="#"
            className="text-center custom-xs:text-base custom-md:text-lg">
            Przestrzeń rozmowy 🧠
          </Link>
          {!isMobile && (
            <div className="flex p-3 justify-around items-center text-base max-w-md font-medium">
              <Link
                className="mx-5"
                onClick={() => handleScroll('about')}
                href="#about">
                O nas 👩‍💼👨‍💼
              </Link>
              <Link
                className="mx-5"
                href="#contact"
                onClick={() => handleScroll('contact')}>
                Kontakt 📞
              </Link>
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
          <Link
            onClick={() => {
              handleScroll('about'), setIsOpen(false);
            }}
            href="#about">
            O nas 👩‍💼👨‍💼
          </Link>
          <Link
            onClick={() => {
              handleScroll('contact'), setIsOpen(false);
            }}
            href="#contact">
            Kontakt 📞
          </Link>
        </div>
      )}
    </nav>
  );
};
