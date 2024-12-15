import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { RoadmapSteps } from './RoadmapSteps';
import { ProcessHighlights } from './ProcessHighlights';

export default function RoadmapSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,20,147,0.1),transparent_70%)]" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Journey to <GradientText>AI Excellence</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every business is unique, and so is our approach. We create custom AI solutions
            tailored specifically to your needs and goals.
          </p>
        </div>

        <RoadmapSteps />
        <ProcessHighlights />
      </Container>
    </section>
  );
}