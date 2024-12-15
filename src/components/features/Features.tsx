import React from 'react';
import { Bot, Target, Cog } from 'lucide-react';
import { Container } from '../ui/Container';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Bot,
    title: 'AI Chatbots & Assistants',
    description: 'Streamline customer support and engagement with intelligent conversational AI.',
  },
  {
    icon: Target,
    title: 'Lead Automation Tools',
    description: 'Pre-qualify leads and enhance sales conversion rates with smart automation.',
  },
  {
    icon: Cog,
    title: 'Custom AI Solutions',
    description: 'Tailored systems designed specifically to meet your unique business needs.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}