'use client';

import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 text-center py-4 mt-auto shadow-inner">
      <p className="text-sm text-gray-600">
        © {year} Developed by <span className="font-semibold text-blue-600">Developer Eye</span>
      </p>
    </footer>
  );
};

export default Footer;
