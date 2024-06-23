// src/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({title, subTitle}) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="mb-4">{subTitle}</p>
        <Link to="/" className="text-blue-500 underline">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;