import React from 'react';

export function QuoteDisplay() {
  return (
    <blockquote className="relative max-w-4xl mx-auto mb-16 group">
      {/* Animated Border Container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-black to-neon-pink opacity-75 blur-sm group-hover:opacity-100 transition-opacity animate-gradient-x" />
      
      {/* Quote Content */}
      <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-neon-pink/20">
        {/* Decorative Corner Elements */}
        <div className="absolute -top-4 -left-4 w-12 h-12 text-4xl font-serif text-neon-pink opacity-50">"</div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 text-4xl font-serif text-neon-pink opacity-50">"</div>
        
        <p className="text-3xl md:text-4xl font-serif italic tracking-wide leading-relaxed text-white">
          If you don't{' '}
          <span className="relative group/word">
            <span className="text-neon-pink font-bold">employ AI</span>
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-normal opacity-0 group-hover/word:opacity-100 transition-opacity whitespace-nowrap border border-neon-pink/20">
              AI is no longer optional
            </span>
          </span>
          , your business will{' '}
          <span className="relative group/word">
            <span className="text-neon-pink font-bold">fail</span>
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-normal opacity-0 group-hover/word:opacity-100 transition-opacity whitespace-nowrap border border-neon-pink/20">
              Don't risk falling behind
            </span>
          </span>
          . Period.{' '}
          <span className="relative group/word">
            <span className="text-neon-pink font-bold">End of story</span>
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-normal opacity-0 group-hover/word:opacity-100 transition-opacity whitespace-nowrap border border-neon-pink/20">
              The future is inevitable
            </span>
          </span>
          .
        </p>
        
        <footer className="mt-6 text-xl font-light tracking-wider">
          <span className="text-neon-pink">— Mark Cuban</span>
        </footer>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-neon-pink/5 rounded-2xl blur-xl group-hover:bg-neon-pink/10 transition-all duration-500" />
      </div>
    </blockquote>
  );
}