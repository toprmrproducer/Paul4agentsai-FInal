import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { CredibilityMetrics } from './CredibilityMetrics';
import { ServiceAreas } from './ServiceAreas';

export default function CredibilitySection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_70%)]" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <GradientText>4agents.ai?</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            AI solutions tailored to your business needs, with proven results and seamless integration.
          </p>
        </div>

        <CredibilityMetrics />
        <ServiceAreas />
        
        <div className="text-center mt-16">
          <p className="text-2xl text-white mb-4">
            What could you achieve with AI? Let us show you.
          </p>
          <a href="#case-studies" className="text-blue-400 hover:text-blue-300 transition-colors">
            See Success Stories →
          </a>
        </div>
      </Container>
    </section>
  );
}