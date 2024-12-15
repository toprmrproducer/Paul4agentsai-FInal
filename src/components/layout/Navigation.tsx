import React from 'react';
import { useScrollSpy } from '../../utils/scroll';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#advantage' },
  { label: 'Contact', href: '#book-audit' }
];

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export function Navigation({ className = '', onItemClick }: NavigationProps) {
  useScrollSpy();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href !== '#') {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onItemClick?.();
  };

  return (
    <nav className={className}>
      <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={handleClick}
              className="text-gray-300 hover:text-neon-pink transition-colors duration-200 relative group"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-pink transition-all duration-200 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}