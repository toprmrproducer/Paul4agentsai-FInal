import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { ContactForm } from './ContactForm';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15),transparent_70%)]" />
      
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't let your competition get ahead. Start your <GradientText>AI journey</GradientText> today.
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Book a free consultation and discover how AI can transform your business.
          </p>
          
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}