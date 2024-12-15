import React from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';
import { 
  Lightbulb, 
  ClipboardList, 
  Cog, 
  Rocket,
  ArrowDown 
} from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We start by understanding your business, challenges, and goals through in-depth consultation.',
    highlights: [
      'Business analysis',
      'Pain point identification',
      'Goal setting',
      'Opportunity mapping'
    ]
  },
  {
    icon: ClipboardList,
    title: 'Strategy',
    description: 'Our experts design a custom AI implementation strategy aligned with your objectives.',
    highlights: [
      'Solution architecture',
      'Technology selection',
      'Implementation roadmap',
      'ROI projection'
    ]
  },
  {
    icon: Cog,
    title: 'Implementation',
    description: 'We develop and integrate AI solutions while ensuring seamless adoption.',
    highlights: [
      'Agile development',
      'Regular updates',
      'Team training',
      'Progress tracking'
    ]
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'Continuous optimization and scaling of AI solutions as your business evolves.',
    highlights: [
      'Performance monitoring',
      'Optimization cycles',
      'Scale planning',
      'Success measurement'
    ]
  }
];

export function RoadmapSteps() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical Connection Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-neon-pink via-neon-blue to-neon-pink transform -translate-x-1/2" />
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <ScrollReveal key={index}>
            <div className="relative group">
              {/* Step Number */}
              <div className="absolute -left-4 top-0 text-5xl font-bold text-gray-800 opacity-20 group-hover:text-neon-pink group-hover:opacity-10 transition-all">
                {index + 1}
              </div>

              <div className="ml-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl group-hover:border-neon-pink/50 transition-all duration-300">
                <div className="relative z-10">
                  <div className="absolute -left-24 top-1/2 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-neon-pink/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6 text-neon-pink" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <ArrowDown className="w-4 h-4 text-neon-pink mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-6">
                  <ArrowDown className="w-6 h-6 text-neon-pink animate-bounce" />
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}