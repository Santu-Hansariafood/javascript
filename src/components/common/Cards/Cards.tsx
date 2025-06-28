'use client';

import React, { Suspense } from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Cards: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
    <div className="w-full max-w-2xl min-h-[400px] p-8 rounded-3xl bg-white shadow-xl border border-gray-200 relative overflow-hidden">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-md mb-2">
        {title}
      </h2>
      <p className="text-gray-600 italic mb-6">{description}</p>
        {children}
      <div className="absolute bottom-4 right-6 text-sm text-gray-400 italic">
        Contributed by - <span className="text-green-600 font-semibold">Developer Eye</span>
      </div>
    </div>
    </Suspense>
  );
};

export default Cards;
