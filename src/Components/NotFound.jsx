// src/components/NotFound.js

import errorimage from '../assets/cactus.gif'

import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6">
        <img src={errorimage} alt="" className='bg-white'/>
      
      <p className="mt-4 text-xl sm:text-2xl text-gray-300">Oops! The page you're looking for doesn't exist.</p>
      <p className="mt-2 text-lg sm:text-xl text-gray-400">
        You can go back to the <a href="/" className="text-yellow-500 hover:underline">homepage</a>.
      </p>
    </div>
  );
};

export default NotFound;
