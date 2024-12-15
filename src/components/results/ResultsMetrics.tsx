import React from 'react';

const metrics = [
  {
    value: '67%',
    label: 'Average Increase in Sales Leads',
    description: 'Our clients see significant growth in qualified leads'
  },
  {
    value: '40%',
    label: 'Reduction in Support Costs',
    description: 'AI automation drastically reduces operational expenses'
  },
  {
    value: '80+',
    label: 'Hours Saved Monthly',
    description: 'Per business through intelligent automation'
  }
];

export function ResultsMetrics() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl text-center group hover:border-neon-pink/50 transition-all duration-300">
          <div className="text-4xl font-bold bg-gradient-to-r from-neon-pink to-neon-blue text-transparent bg-clip-text animate-gradient-x mb-2">{metric.value}</div>
          <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
          <div className="text-gray-400">{metric.description}</div>
        </div>
      ))}
    </div>
  );
}