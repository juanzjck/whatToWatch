// src/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({title, subTitle, onClickTryAgain}) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className=" min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="mb-4">{subTitle}</p>
        {
            onClickTryAgain&&<button  className="p-2 bg-blue-500 text-white rounded-r" onClick={onClickTryAgain}>Clean Search</button>
        }
        {
            !onClickTryAgain&&<Link to="/" className="text-blue-500 underline">Go Back to Home</Link>
        }
      </div>
    </div>
  );
};

export default NotFound;