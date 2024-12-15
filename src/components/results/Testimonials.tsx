import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../effects/ScrollReveal';

const testimonials = [
  {
    quote: "4agents.ai transformed our customer service operations. The AI solutions they implemented reduced response times by 80%.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The ROI we've seen from their lead automation tools has been incredible. Our conversion rates doubled in just three months.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "Their expertise in AI integration is unmatched. They didn't just provide a solution; they transformed our entire workflow.",
    author: "Emily Rodriguez",
    role: "CTO, InnovateNow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <ScrollReveal>
      <div className="relative px-12">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl hover:border-neon-pink/50 transition-all duration-300 group">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current transition-transform group-hover:scale-110" 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-lg italic">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-neon-pink/20 group-hover:ring-neon-pink/50 transition-all">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div>
                      <p className="font-semibold text-white group-hover:text-neon-pink transition-colors">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-neon-pink w-6' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}