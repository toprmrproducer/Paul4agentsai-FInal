import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'pink' | 'silver' | 'cyber';
}

export function GradientText({ children, className = '', variant = 'pink' }: GradientTextProps) {
  const variants = {
    pink: 'bg-gradient-to-r from-neon-pink via-pink-500 to-neon-blue',
    silver: 'bg-gradient-to-r from-silver-200 via-silver-400 to-silver-200',
    cyber: 'bg-gradient-to-r from-neon-blue via-neon-pink to-neon-blue',
  };

  return (
    <span className={`${variants[variant]} animate-gradient-x bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}