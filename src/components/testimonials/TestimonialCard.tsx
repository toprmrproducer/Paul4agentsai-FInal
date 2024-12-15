import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-300 mb-6">{quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-400"
        />
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}