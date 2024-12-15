import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Expert AI Integration',
  'Proven ROI for Businesses',
  'Scalable Solutions',
  'Comprehensive Support',
];

export function BenefitList() {
  return (
    <div className="space-y-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center gap-4">
          <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
          <p className="text-xl text-gray-300">{benefit}</p>
        </div>
      ))}
    </div>
  );
}