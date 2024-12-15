import React from 'react';

const metrics = [
  {
    value: '100+',
    label: 'Businesses Transformed'
  },
  {
    value: '95%',
    label: 'Client Satisfaction'
  },
  {
    value: '24/7',
    label: 'AI-Powered Support'
  },
  {
    value: '3x',
    label: 'Average ROI'
  }
];

export function CredibilityMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-blue-400 mb-2">{metric.value}</div>
          <div className="text-lg text-gray-300">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}