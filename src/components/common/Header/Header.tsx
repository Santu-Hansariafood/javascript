'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Home,
  UserCircle,
  LogIn,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/mylogo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="flex items-center text-gray-700 hover:text-green-600 transition font-medium"
          >
            <Home className="h-5 w-5 mr-1 text-green-600" />
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 hover:text-green-600 transition font-medium"
            >
              <BookOpen className="h-5 w-5 mr-1 text-green-600" />
              Courses <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl"
                >
                  <Link
                    href="/courses/javascript"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-green-50 hover:text-green-600 transition"
                    onClick={closeMenus}
                  >
                    JavaScript
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className="flex items-center text-gray-700 hover:text-green-600 transition font-medium"
          >
            <UserCircle className="h-5 w-5 mr-1 text-green-600" />
            About
          </Link>

          <Link
            href="/login"
            className="flex items-center text-gray-700 hover:text-green-600 transition font-medium"
          >
            <LogIn className="h-5 w-5 mr-1 text-green-600" />
            Login
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-green-600 transition"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 overflow-hidden"
          >
            <Link
              href="/"
              className="flex items-center py-2 text-gray-700 hover:text-green-600"
              onClick={closeMenus}
            >
              <Home className="h-5 w-5 mr-2 text-green-600" />
              Home
            </Link>

            <button
              onClick={toggleDropdown}
              className="flex items-center w-full text-left text-gray-700 hover:text-green-600 py-2 font-medium"
            >
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Courses <ChevronDown className="ml-auto h-4 w-4" />
            </button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pl-6 mt-1 space-y-2"
              >
                <Link
                  href="/courses/javascript"
                  className="block text-sm text-gray-700 hover:text-green-600"
                  onClick={closeMenus}
                >
                  JavaScript
                </Link>
              </motion.div>
            )}

            <Link
              href="/about"
              className="flex items-center py-2 text-gray-700 hover:text-green-600"
              onClick={closeMenus}
            >
              <UserCircle className="h-5 w-5 mr-2 text-green-600" />
              About
            </Link>

            <Link
              href="/login"
              className="flex items-center py-2 text-gray-700 hover:text-green-600"
              onClick={closeMenus}
            >
              <LogIn className="h-5 w-5 mr-2 text-green-600" />
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
