import React from 'react';
import { Bot, Target, Cog, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots & Assistants',
    description: 'Streamline customer support and engagement with intelligent conversational AI.'
  },
  {
    icon: Target,
    title: 'Lead Automation Tools',
    description: 'Pre-qualify leads and enhance sales conversion rates with smart automation.'
  },
  {
    icon: Cog,
    title: 'Custom AI Solutions',
    description: 'Tailored systems designed specifically to meet your unique business needs.'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your AI implementation needs.'
  }
];

export function ServiceAreas() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="hover-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl text-center group hover:border-neon-pink/50 interactive-border"
        >
          <service.icon className="w-12 h-12 text-neon-pink mx-auto mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12" />
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-animate">{service.title}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
        </div>
      ))}
    </div>
  );
}