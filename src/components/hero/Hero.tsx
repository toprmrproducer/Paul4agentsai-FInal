import React from 'react';
import { Container } from '../ui/Container';
import { Hero3D } from './Hero3D';
import { HeroBackground } from './HeroBackground';
import { QuoteDisplay } from './QuoteDisplay';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <HeroBackground />
      
      <Container className="relative pt-32">
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-[500px] relative mb-12">
            <Hero3D />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            Your Business Needs{' '}
            <span className="bg-gradient-to-r from-neon-pink to-neon-blue text-transparent bg-clip-text animate-gradient-x">
              AI
            </span>
            .
            <br />
            <span className="text-neon-pink">Or It Will Fail.</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12">
            We specialize in AI automation for marketing, sales, operations, and support. 
            Let us handle the repetitive tasks, so you can focus on growth.
          </p>
          
          <QuoteDisplay />
        </div>
      </Container>
    </div>
  );
}