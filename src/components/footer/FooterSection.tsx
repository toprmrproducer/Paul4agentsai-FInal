import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { FooterLinks } from './FooterLinks';
import { FooterContact } from './FooterContact';
import { FooterSocial } from './FooterSocial';
import { FooterCopyright } from './FooterCopyright';

export default function FooterSection() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <Container className="py-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <GradientText>4agents.ai</GradientText>
            </h3>
            <p className="text-gray-400">Empowering businesses with AI, one solution at a time.</p>
          </div>
          
          <FooterLinks />
          <FooterContact />
          <FooterSocial />
        </div>
        
        <FooterCopyright />
      </Container>
    </footer>
  );
}