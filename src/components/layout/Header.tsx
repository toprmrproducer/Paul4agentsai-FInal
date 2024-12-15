import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { Navigation } from './Navigation';

const CALENDLY_URL = 'http://calendly.com/411gregory';

function PromoHeader() {
  return (
    <div className="bg-gradient-to-r from-neon-pink/10 to-neon-blue/10 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-2">
        <p className="text-center text-sm">
          <span className="text-gray-300">Limited Time Offer: </span>
          <a 
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-pink hover:text-white transition-colors font-semibold"
          >
            Book Your Free Business Audit (Valid until Jan 31, 2025) →
          </a>
        </p>
      </div>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <PromoHeader />
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold">
              <GradientText>4agents.ai</GradientText>
            </a>

            <div className="hidden md:block">
              <Navigation />
            </div>

            <div className="hidden md:block">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="default">
                  Book Free Audit
                </Button>
              </a>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <Navigation 
                className="mb-4" 
                onItemClick={() => setIsMenuOpen(false)} 
              />
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" size="default" className="w-full">
                  Book Free Audit
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}