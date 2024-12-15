import React from 'react';
import { Container } from '../components/ui/Container';
import { GradientText } from '../components/ui/GradientText';
import { ScrollReveal } from '../components/effects/ScrollReveal';
import { Mail, Bot, Target, Brain, Users } from 'lucide-react';

const solutions = [
  {
    icon: Mail,
    title: 'AI-Powered Email Automation',
    description: 'Achieve 15% response rates and 5x ROI with our intelligent email automation system.',
    metrics: [
      '15% Average Response Rate',
      '5x Return on Investment',
      'Smart A/B Testing',
      'Personalized Content Generation'
    ]
  },
  {
    icon: Bot,
    title: 'Intelligent Chatbots',
    description: 'Provide 24/7 customer support with AI chatbots that understand context and intent.',
    metrics: [
      '90% Query Resolution Rate',
      '24/7 Availability',
      'Multi-language Support',
      'Seamless CRM Integration'
    ]
  },
  {
    icon: Target,
    title: 'Lead Generation AI',
    description: 'Automatically identify and qualify leads using advanced AI algorithms.',
    metrics: [
      '3x Lead Quality Improvement',
      '60% Reduced Response Time',
      'Automated Lead Scoring',
      'Predictive Analytics'
    ]
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <Container>
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Solutions That <GradientText>Drive Results</GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with our cutting-edge AI solutions.
            Each solution is customized to your specific needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
          {solutions.map((solution, index) => (
            <ScrollReveal key={index}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-neon-pink/50 transition-all duration-300 group">
                <solution.icon className="w-12 h-12 text-neon-pink mb-6 transform transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-neon-pink rounded-full mr-3" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </div>
  );
}