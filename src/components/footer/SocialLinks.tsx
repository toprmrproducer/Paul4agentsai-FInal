import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}