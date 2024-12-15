import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { ExecutiveTeam } from './ExecutiveTeam';
import { CompanyMission } from './CompanyMission';
import { LeadershipSynergy } from './LeadershipSynergy';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black relative scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,20,147,0.1),transparent_70%)]" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <GradientText>4agents.ai</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging traditional business expertise with cutting-edge AI innovation
            to transform the future of enterprise automation.
          </p>
        </div>

        <ExecutiveTeam />
        <CompanyMission />
        <LeadershipSynergy />
      </Container>
    </section>
  );
}