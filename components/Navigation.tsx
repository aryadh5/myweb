import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Switch } from './switch';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

type NavigationProps = {
  hideLinks: boolean;
};

export const Navigation = ({ hideLinks = false }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // To handle client-specific rendering

  useEffect(() => {
    // Ensure that client-side logic only runs after the first render
    setIsClient(true);
  }, []);

  return (
    <div className="relative">
      {/* Main Navbar with Links */}
      <nav className="mt-8 mb-6 flex justify-between items-center text-lg font-semibold tracking-wide h-16 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Logo and Hamburger Icon for Mobile */}
        <div className="flex items-center space-x-4 w-full">
          <Link href="/">
            <Image src="/adh.png" alt="Logo" width={100} height={50} className="w-auto h-12" />
          </Link>

          {/* Hamburger Menu for Small Screens */}
          {isClient && (
            <button
              className="lg:hidden text-gray-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          )}
        </div>

        {/* Links - Visible on Medium and Larger Screens */}
        <div
          className={`lg:flex items-center space-x-6 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          {!hideLinks && (
            <>
              <Link
                href="/"
                className="relative text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="relative text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Blog
              </Link>
              <Link
                href="/portfolio"
                className="relative text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link
                href="/resume"
                className="relative text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Experience
              </Link>

              {/* Dark Mode Switch (Moved Next to Experience) */}
              <Switch className="ml-4 p-1 bg-transparent" />
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
