import { useEffect } from 'react';

export function useScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const headerOffset = 80; // Height of fixed header

    const handleScroll = () => {
      let current = '';
      
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        
        if (rect.top <= headerOffset + 20) { // Added small buffer
          current = element.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('text-neon-pink');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-neon-pink');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}