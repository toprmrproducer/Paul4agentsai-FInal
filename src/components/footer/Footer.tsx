import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { SocialLinks } from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <Container className="py-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <GradientText>4agents.ai</GradientText>
            </h3>
            <p className="text-gray-400">Empowering businesses with AI, one solution at a time.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@4agents.ai</li>
              <li>+1 (555) 123-4567</li>
              <li>123 AI Street, Tech City</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <SocialLinks />
          </div>
        </div>
        
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
      </Container>
    </footer>
  );
}