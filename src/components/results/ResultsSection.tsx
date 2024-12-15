import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { ResultsMetrics } from './ResultsMetrics';
import { ComparisonGraphs } from './ComparisonGraphs';
import { CaseStudies } from './CaseStudies';
import { Testimonials } from './Testimonials';
import { Button } from '../ui/Button';

export default function ResultsSection() {
  return (
    <section id="advantage" className="py-24 bg-black relative scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.15),transparent_70%)]" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <GradientText>4agents.ai</GradientText> Advantage
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            See how our AI-powered approach outperforms traditional agencies
            across every metric that matters.
          </p>
          
          <ComparisonGraphs />
        </div>

        <ResultsMetrics />
        <CaseStudies />
        <Testimonials />
        
        <div className="text-center mt-16">
          <Button size="lg">
            Explore Solutions Tailored to Your Needs
          </Button>
        </div>
      </Container>
    </section>
  );
}