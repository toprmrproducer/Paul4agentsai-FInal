import React from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const executives = [
  {
    name: 'Paul Gregory',
    title: 'CEO & Founder',
    image: 'https://drive.google.com/thumbnail?id=1ysdevAC7APyEUPJ1epGSlTfFqOQT4VJD',
    bio: 'A seasoned entrepreneur with over 30 years of business transformation experience, Paul brings unparalleled wisdom to AI integration. His deep understanding of traditional business challenges drives our mission to deliver practical, value-driven AI solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/the-paul-gregory/',
      email: 'paul@4agents.ai'
    }
  },
  {
    name: 'Shreyas Raj',
    title: 'CTO & Co-founder',
    image: 'https://drive.google.com/thumbnail?id=1edKT4kdXVzEcSZqykNoA-xvaHEfJ0frx',
    bio: 'A brilliant innovator in AI technology, Shreyas founded Rapid-xai.com in India before co-founding 4agents.ai. His technical expertise and vision for accessible AI solutions have revolutionized how businesses approach automation.',
    social: {
      linkedin: 'https://www.linkedin.com/in/shreyas-raj-156217280/',
      email: 'shreyas@4agents.ai'
    }
  }
];

export function ExecutiveTeam() {
  return (
    <div className="grid md:grid-cols-2 gap-12 mb-24">
      {executives.map((executive) => (
        <ScrollReveal key={executive.name}>
          <div className="group relative">
            {/* Animated Background Gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink via-purple-500 to-neon-blue rounded-xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative w-48 h-48 mx-auto md:mx-0 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                  {/* Image Container with Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-pink to-neon-blue opacity-20 rounded-xl group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative w-full h-full rounded-xl overflow-hidden transform group-hover:rotate-3 transition-transform duration-500">
                    <img
                      src={executive.image}
                      alt={`${executive.name} - ${executive.title} at 4agents.ai`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                    <div className="flex gap-4">
                      <a
                        href={executive.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-neon-pink transform hover:scale-110 transition-all duration-300"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href={`mailto:${executive.social.email}`}
                        className="text-white hover:text-neon-pink transform hover:scale-110 transition-all duration-300"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{executive.name}</h3>
                    <p className="text-neon-pink mb-4 group-hover:text-neon-blue transition-colors duration-300">
                      {executive.title}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {executive.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}