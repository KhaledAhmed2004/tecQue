"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useMe } from "@/hooks/auth/useMe";
import { useLogout } from "@/hooks/auth/useLogout";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { user } = useMe();
  const { logout } = useLogout();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Set theme based on saved preference on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg py-4 transition-colors duration-300">
      {/* <nav className="bg-blue-600 dark:bg-gray-800 shadow-lg py-4 transition-colors duration-300"> */}
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-3xl font-bold text-black dark:text-white transition"
              >
                TecQue
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-black dark:text-white font-medium transition duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-black dark:text-white font-medium hover transition duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            {user ? (
              <>
                <Link
                  href="/"
                  className="text-black dark:text-white font-medium transition duration-300 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 rounded-full shadow-md transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 rounded-full shadow-md transition duration-300"
              >
                Login
              </Link>
            )}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="text-2xl text-black dark:text-white ml-4 transition-colors duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
              whileTap={{ rotate: -20 }}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            className="md:hidden text-3xl text-black dark:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <RxCross2 /> : <IoIosMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden  bg-white dark:bg-gray-800 px-5 py-4 rounded-b-lg space-y-4"
          >
            <Link
              href="/about"
              className="block text-black dark:text-white font-medium hover:text-yellow-300 transition duration-300 relative group"
              onClick={toggleMobileMenu}
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="block text-black dark:text-white font-medium hover:text-yellow-300 transition duration-300 relative group"
              onClick={toggleMobileMenu}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            {user ? (
              <>
                <Link
                  href="/feeds"
                  className="block text-black dark:text-white font-medium hover:text-yellow-300 transition duration-300 relative group"
                  onClick={toggleMobileMenu}
                >
                  Feeds
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleMobileMenu();
                  }}
                  className="w-full text-left px-4 py-2 bg-blue-600 text-black dark:text-white hover:bg-blue-500 rounded-md shadow-md transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="block w-full text-left px-4 py-2 rounded-md shadow-md bg-blue-600 text-white hover:bg-blue-500 transition duration-300"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            )}
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="text-2xl text-white transition-colors duration-300 hover:scale-110"
              whileHover={{ rotate: 20 }}
              whileTap={{ rotate: -20 }}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
