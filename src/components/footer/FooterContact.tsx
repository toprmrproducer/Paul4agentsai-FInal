import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export function FooterContact() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
      <ul className="space-y-3 text-gray-400">
        <li className="flex items-start gap-2">
          <Mail className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
          <span>contact@4agents.ai</span>
        </li>
        <li className="flex items-start gap-2">
          <Phone className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
          <span>+1 (555) 123-4567</span>
        </li>
        <li className="flex items-start gap-2">
          <MapPin className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
          <a 
            href="https://maps.app.goo.gl/y5xkbJCTD7jcYmCc9?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-pink transition-colors"
          >
            50 Doaks Lane<br />
            Marblehead, MA 01945
          </a>
        </li>
      </ul>
    </div>
  );
}