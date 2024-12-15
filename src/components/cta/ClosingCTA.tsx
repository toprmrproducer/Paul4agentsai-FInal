import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { ArrowRight, Clock, Award, Shield } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/411gregory/30min?back=1&month=2024-12';

const benefits = [
  {
    icon: Clock,
    text: 'Limited Time: Free Business Audit (Until Jan 31, 2025)'
  },
  {
    icon: Award,
    text: 'Custom AI Strategy Worth $2,500'
  },
  {
    icon: Shield,
    text: 'No Obligation, 100% Risk-Free'
  }
];

export default function ClosingCTA() {
  return (
    <section id="book-audit" className="py-24 bg-black relative scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(59,130,246,0.2),transparent_70%)]" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business <GradientText>Today</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Schedule your free business audit and discover how AI can revolutionize your operations.
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Main CTA Button */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-6 text-xl font-bold text-white bg-gradient-to-r from-neon-pink to-neon-blue rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/20 mb-12"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative flex items-center gap-3">
                Book Your Free AI Strategy Session
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex items-center gap-3"
                >
                  <benefit.icon className="w-6 h-6 text-neon-pink flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <p className="text-gray-400 text-sm mt-8">
              Join 100+ businesses that have transformed their operations with our AI solutions.
              Your data is protected by enterprise-grade security.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}