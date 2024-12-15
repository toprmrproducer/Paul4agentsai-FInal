import React from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';
import { CheckCircle } from 'lucide-react';

const highlights = [
  {
    title: 'Tailored Solutions',
    description: 'Every AI implementation is customized to your specific industry and business needs.'
  },
  {
    title: 'Continuous Support',
    description: 'Our team provides ongoing support and optimization throughout your AI journey.'
  },
  {
    title: 'Measurable Results',
    description: 'Clear KPIs and success metrics to track the impact of AI on your business.'
  }
];

export function ProcessHighlights() {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      {highlights.map((highlight, index) => (
        <ScrollReveal key={index}>
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-neon-pink/50 transition-all duration-300 group">
            <div className="relative">
              <CheckCircle className="w-8 h-8 text-neon-pink mb-4 transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.description}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}