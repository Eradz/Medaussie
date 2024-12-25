'use client'

import { useState, useEffect } from 'react';

const Loading = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-secondary rounded-full animate-bounce" />
          <div className="w-5 h-5 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]" />
          <div className="w-5 h-5 bg-secondary rounded-full animate-bounce [animation-delay:0.4s]" />
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">
          Loading{dots}
        </p>
      </div>
    </div>
  );
};

export default Loading;