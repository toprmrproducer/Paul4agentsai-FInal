import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { BenefitList } from './BenefitList';
import { PerformanceChart } from './PerformanceChart';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_70%)]" />
      
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Why Choose <GradientText>Us?</GradientText>
            </h2>
            <BenefitList />
          </div>
          <PerformanceChart />
        </div>
      </Container>
    </section>
  );
}