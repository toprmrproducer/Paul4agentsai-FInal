import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gray-900/50 hover:bg-gray-900/80 transition-all backdrop-blur-sm border border-gray-800">
      <Icon className="w-16 h-16 text-blue-400 mb-6" />
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}