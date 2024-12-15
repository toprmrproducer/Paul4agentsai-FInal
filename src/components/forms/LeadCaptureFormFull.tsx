import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';

export function LeadCaptureFormFull() {
  return (
    <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Let's Get Started
      </h3>
      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg bg-black/50 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          />
          <input
            type="email"
            placeholder="Business Email"
            className="px-4 py-3 rounded-lg bg-black/50 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        />
        <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-800 text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
          <option value="">Select Business Type</option>
          <option value="ecommerce">E-commerce</option>
          <option value="saas">SaaS</option>
          <option value="service">Service Business</option>
          <option value="other">Other</option>
        </select>
        <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-800 text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
          <option value="">Services Interested In</option>
          <option value="marketing">AI Marketing</option>
          <option value="sales">Sales Automation</option>
          <option value="operations">Operations</option>
          <option value="support">Customer Support</option>
        </select>
        <Button className="w-full group">
          Start Your AI Journey Today
          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>
    </div>
  );
}