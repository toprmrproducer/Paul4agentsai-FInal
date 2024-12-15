import React from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';
import { Target, Zap, Shield, TrendingUp, Binary } from 'lucide-react';

const missionPoints = [
  {
    icon: Target,
    title: 'Urgent Need for AI Adaptation',
    description: 'In today\'s rapidly evolving business landscape, AI adoption isn\'t just an advantage—it\'s a necessity for survival and growth.'
  },
  {
    icon: Zap,
    title: 'Seamless Transition Strategies',
    description: 'We guide businesses through their AI transformation journey with minimal disruption to existing operations.'
  },
  {
    icon: Binary,
    title: 'Practical Implementation',
    description: 'Our solutions are designed for real-world application, delivering immediate value while building for the future.'
  },
  {
    icon: Shield,
    title: 'Future-Proofing Businesses',
    description: 'We help organizations stay ahead of technological advances, ensuring long-term competitiveness and growth.'
  },
  {
    icon: TrendingUp,
    title: 'Value Preservation',
    description: 'Modernize operations while maintaining the core values and strengths that make your business unique.'
  }
];

export function CompanyMission() {
  return (
    <ScrollReveal>
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-white text-center mb-12">Our Mission</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
            >
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink to-neon-blue rounded-xl opacity-50 blur group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 h-full transform group-hover:-translate-y-2 transition-all duration-300">
                {/* Icon with Animation */}
                <div className="relative w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-neon-pink/20 rounded-full group-hover:scale-110 transition-transform duration-300" />
                  <point.icon className="w-16 h-16 text-neon-pink relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                {/* Content with Hover Effects */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neon-pink transition-colors duration-300">
                  {point.title}
                </h4>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {point.description}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-neon-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-neon-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}