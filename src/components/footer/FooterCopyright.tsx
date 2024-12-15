import React from 'react';

export function FooterCopyright() {
  return (
    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} 4agents.ai. All rights reserved.
      </p>
      <p className="text-gray-500 mt-2">
        Website by{' '}
        <a 
          href="https://rapid-xai.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neon-pink hover:text-neon-blue transition-colors duration-300"
        >
          Rapid X AI Solutions
        </a>
      </p>
    </div>
  );
}