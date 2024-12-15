import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export function FooterSocial() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-gray-400 hover:text-neon-pink transition-colors"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
}