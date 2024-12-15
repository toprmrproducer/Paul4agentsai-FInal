import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'default',
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-semibold transition-all flex items-center gap-2 backdrop-blur-sm relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-neon-pink to-neon-blue hover:from-pink-600 hover:to-blue-600 text-white shadow-lg shadow-neon-pink/20 hover:shadow-neon-pink/30 animate-gradient',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20',
    outline: 'bg-transparent border-2 border-neon-pink text-neon-pink hover:bg-neon-pink/10',
  };

  const sizes = {
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-0 group-hover:opacity-20 transition-opacity" />
    </button>
  );
}