import React from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';

export function LeadershipSynergy() {
  return (
    <ScrollReveal>
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-6">Leadership Synergy</h3>
        
        <div className="group relative">
          {/* Animated Gradient Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue rounded-xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
          
          <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 transform group-hover:scale-[1.01] transition-all duration-300">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-neon-pink/30 rounded-tl-xl group-hover:border-neon-pink transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-neon-blue/30 rounded-br-xl group-hover:border-neon-blue transition-colors duration-300" />
            
            <p className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              The unique partnership between Paul Gregory and Shreyas Raj represents the perfect 
              fusion of seasoned business acumen and cutting-edge technical innovation. Paul's 
              decades of experience in business transformation combines seamlessly with Shreyas's 
              expertise in AI development and implementation. Together, they bridge the gap 
              between traditional business practices and revolutionary AI solutions, ensuring 
              our clients receive both practical wisdom and technical excellence in every engagement.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}