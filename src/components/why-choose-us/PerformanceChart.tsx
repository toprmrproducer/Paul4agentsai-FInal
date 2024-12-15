import React from 'react';
import { TrendingUp } from 'lucide-react';

export function PerformanceChart() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
      <TrendingUp className="w-12 h-12 text-blue-400 mb-6" />
      <h3 className="text-2xl font-bold text-white mb-4">Performance Comparison</h3>
      <div className="space-y-6">
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-400">Traditional Methods</span>
            <span className="text-sm font-semibold text-gray-400">40%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full">
            <div className="h-2 bg-gray-600 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-400">AI-Powered Automation</span>
            <span className="text-sm font-semibold text-gray-400">95%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}