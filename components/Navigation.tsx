import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Switch } from './switch';
import { FaHome, FaBlog, FaSuitcase, FaUser, FaBars, FaTimes } from 'react-icons/fa';

type NavigationProps = {
  hideLinks: boolean;
};

export const Navigation = ({ hideLinks = false }: NavigationProps) => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // To handle client-specific rendering

  // Function to handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setShowSideNavbar(true); // Scrolling down, show side navbar
    } else {
      setShowSideNavbar(false); // Scrolling up, hide side navbar
    }
    setLastScrollY(window.scrollY); // Update the scroll position
  };

  useEffect(() => {
    // Ensure that client-side logic only runs after the first render
    setIsClient(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, [lastScrollY]);

  return (
    <div className="relative">
      {/* Main Navbar with Links */}
      <nav className="mt-8 mb-6 flex justify-between items-center text-lg font-semibold tracking-wide h-16 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Logo and Hamburger Icon for Mobile */}
        <div className="flex items-center space-x-4 w-full">
          <Link href="/" className="text-gray-800 dark:text-white font-semibold">
            Logo
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
                <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="/blog"
                className="relative text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="/portfolio"
                className="relative text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="/resume"
                className="relative text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Experience
                <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Side Navbar with Icons only (unchanged, stays fixed) */}
      <div
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 p-4 space-y-6 transition-all duration-500 z-50 ${
          showSideNavbar ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: '60px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Soft shadow for elegance
          borderRadius: '12px',
          backgroundColor: 'transparent', // Transparent background for both light and dark mode
          backdropFilter: 'none', // No blur effect for transparency
        }}
      >
        <Link
          href="/"
          className="block text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform duration-300 transform hover:scale-110"
        >
          <FaHome size={30} />
        </Link>
        <Link
          href="/blog"
          className="block text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform duration-300 transform hover:scale-110"
        >
          <FaBlog size={30} />
        </Link>
        <Link
          href="/portfolio"
          className="block text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform duration-300 transform hover:scale-110"
        >
          <FaSuitcase size={30} />
        </Link>
        <Link
          href="/resume"
          className="block text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform duration-300 transform hover:scale-110"
        >
          <FaUser size={30} />
        </Link>

        {/* Dark/Light Mode Switch */}
        <div className="mt-6 flex justify-center">
          <Switch className="p-1 bg-transparent" />
        </div>
      </div>
    </div>
  );
};
