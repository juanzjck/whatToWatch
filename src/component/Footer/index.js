// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} What To Watch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export  { Footer };
