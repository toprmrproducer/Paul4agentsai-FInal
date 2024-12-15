import React from 'react';

const links = [
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Blog', href: '#' }
];

export function FooterLinks() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a 
              href={link.href} 
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}