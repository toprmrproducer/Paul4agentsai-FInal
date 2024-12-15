import React from 'react';

interface HeroQuoteProps {
  className?: string;
}

export function HeroQuote({ className = '' }: HeroQuoteProps) {
  return (
    <blockquote className={`text-2xl italic text-gray-300 max-w-3xl p-6 border-l-4 border-blue-500 bg-white/5 backdrop-blur-sm rounded-r-lg ${className}`}>
      "If you don't employ AI, your business will fail. Period. End of story."
      <footer className="text-lg mt-2 text-blue-400">- Mark Cuban</footer>
    </blockquote>
  );
}