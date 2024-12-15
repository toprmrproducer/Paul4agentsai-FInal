import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface LeadCaptureFormProps {
  variant?: 'simple' | 'full';
  className?: string;
}

export function LeadCaptureForm({ variant = 'simple', className = '' }: LeadCaptureFormProps) {
  return (
    <div className={`bg-[rgba(13,13,13,0.8)] backdrop-blur-md p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] animate-glow ${className}`}>
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Get Your Free AI Strategy Session
      </h3>
      <form className="space-y-4">
        {variant === 'full' ? (
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[rgba(255,255,255,0.1)] text-white placeholder-gray-500 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 outline-none transition-all text-lg"
            />
            <input
              type="email"
              placeholder="Business Email"
              className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[rgba(255,255,255,0.1)] text-white placeholder-gray-500 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 outline-none transition-all text-lg"
            />
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[rgba(255,255,255,0.1)] text-white placeholder-gray-500 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 outline-none transition-all text-lg"
            />
            <input
              type="email"
              placeholder="Business Email"
              className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[rgba(255,255,255,0.1)] text-white placeholder-gray-500 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 outline-none transition-all text-lg"
            />
          </>
        )}
        
        {variant === 'full' && (
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[rgba(255,255,255,0.1)] text-white placeholder-gray-500 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 outline-none transition-all text-lg"
          />
        )}

        <select className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[rgba(255,255,255,0.1)] text-gray-400 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 outline-none transition-all text-lg appearance-none">
          <option value="">Select Business Type</option>
          <option value="ecommerce">E-commerce</option>
          <option value="saas">SaaS</option>
          <option value="service">Service Business</option>
          <option value="other">Other</option>
        </select>

        {variant === 'full' && (
          <select className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[rgba(255,255,255,0.1)] text-gray-400 focus:border-neon-pink focus:ring-2 focus:ring-neon-pink/20 outline-none transition-all text-lg appearance-none">
            <option value="">Services Interested In</option>
            <option value="marketing">AI Marketing</option>
            <option value="sales">Sales Automation</option>
            <option value="operations">Operations</option>
            <option value="support">Customer Support</option>
          </select>
        )}

        <button className="w-full bg-gradient-to-r from-neon-pink to-neon-blue text-white px-6 py-4 rounded-xl text-lg font-semibold transition-all hover:opacity-90 flex items-center justify-center gap-2 group animate-neon">
          Start Your AI Journey
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}