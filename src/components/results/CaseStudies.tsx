import React from 'react';

const caseStudies = [
  {
    company: 'TechCorp Solutions',
    industry: 'SaaS',
    challenge: 'Manual lead qualification taking 20+ hours weekly',
    solution: 'Implemented AI-powered lead scoring and qualification',
    result: 'Reduced lead qualification time by 85% while improving accuracy'
  },
  {
    company: 'Global Retail Co',
    industry: 'E-commerce',
    challenge: 'Customer support team overwhelmed with basic queries',
    solution: 'Deployed intelligent chatbot with natural language processing',
    result: 'Handled 70% of queries automatically, reduced response time by 60%'
  }
];

export function CaseStudies() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {caseStudies.map((study, index) => (
        <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4">{study.company}</h3>
          <div className="text-blue-400 mb-4">Industry: {study.industry}</div>
          <div className="space-y-3 text-gray-300">
            <p><span className="font-semibold">Challenge:</span> {study.challenge}</p>
            <p><span className="font-semibold">Solution:</span> {study.solution}</p>
            <p><span className="font-semibold">Result:</span> {study.result}</p>
          </div>
        </div>
      ))}
    </div>
  );
}