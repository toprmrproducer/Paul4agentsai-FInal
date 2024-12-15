import React, { useEffect, useRef } from 'react';
import { ScrollReveal } from '../effects/ScrollReveal';

export function ComparisonGraphs() {
  const otherAgenciesCanvasRef = useRef<HTMLCanvasElement>(null);
  const ourAgencyCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const drawGraph = (canvas: HTMLCanvasElement | null, isPositive: boolean) => {
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;
      const points: [number, number][] = [];
      
      // Generate points for the graph
      for (let x = 0; x < width; x += width / 50) {
        const progress = x / width;
        let y;
        
        if (isPositive) {
          // Ascending curve with some randomness
          y = height - (height * 0.2 + (height * 0.6 * progress) + Math.random() * 20);
        } else {
          // Descending curve with some randomness
          y = height * 0.2 + (height * 0.6 * progress) + Math.random() * 20;
        }
        
        points.push([x, y]);
      }

      // Safety check for points array
      if (points.length === 0) return;

      // Draw the graph
      ctx.clearRect(0, 0, width, height);
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      // Horizontal grid lines
      for (let y = 0; y < height; y += height / 10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let x = 0; x < width; x += width / 10) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw the line
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      
      for (let i = 1; i < points.length - 2; i++) {
        const xc = (points[i][0] + points[i + 1][0]) / 2;
        const yc = (points[i][1] + points[i + 1][1]) / 2;
        ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
      }

      // Complete the curve
      if (points.length > 2) {
        const lastPoint = points[points.length - 1];
        ctx.quadraticCurveTo(
          points[points.length - 2][0],
          points[points.length - 2][1],
          lastPoint[0],
          lastPoint[1]
        );
      }

      ctx.strokeStyle = isPositive ? '#00ff00' : '#ff1493';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Create gradient fill
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      if (isPositive) {
        gradient.addColorStop(0, 'rgba(0, 255, 0, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(255, 20, 147, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 20, 147, 0)');
      }

      ctx.lineTo(points[points.length - 1][0], height);
      ctx.lineTo(points[0][0], height);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const setupCanvas = (canvas: HTMLCanvasElement | null) => {
      if (!canvas) return;
      
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    // Setup and draw graphs
    const setupAndDrawGraphs = () => {
      setupCanvas(otherAgenciesCanvasRef.current);
      setupCanvas(ourAgencyCanvasRef.current);
      
      drawGraph(otherAgenciesCanvasRef.current, false);
      drawGraph(ourAgencyCanvasRef.current, true);
    };

    // Initial setup
    setupAndDrawGraphs();

    // Handle window resize
    const handleResize = () => {
      setupAndDrawGraphs();
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScrollReveal>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Other Agencies Graph */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Other AI Agencies</h3>
            <span className="text-red-500 flex items-center">-75% ↓</span>
          </div>
          <div className="relative h-48 mb-6">
            <canvas
              ref={otherAgenciesCanvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-400 hover:text-red-400 transition-colors">• Empty promises leaving businesses stranded</p>
            <p className="text-gray-400 hover:text-red-400 transition-colors">• Chronic delays costing valuable market opportunities</p>
            <p className="text-gray-400 hover:text-red-400 transition-colors">• Yesterday's solutions for tomorrow's challenges</p>
            <p className="text-gray-400 hover:text-red-400 transition-colors">• Radio silence when you need answers most</p>
            <p className="text-gray-400 hover:text-red-400 transition-colors">• One-size-fits-all approaches that never fit</p>
            <p className="text-gray-400 hover:text-red-400 transition-colors">• Unpredictable results hurting your bottom line</p>
          </div>
        </div>

        {/* 4agents.ai Graph */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">4agents.ai Advantage</h3>
            <span className="text-green-500 flex items-center">+280% ↑</span>
          </div>
          <div className="relative h-48 mb-6">
            <canvas
              ref={ourAgencyCanvasRef}
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-gray-400 hover:text-neon-pink transition-colors">• Consistent delivery backed by real results</p>
            <p className="text-gray-400 hover:text-neon-pink transition-colors">• Lightning-fast implementation and deployment</p>
            <p className="text-gray-400 hover:text-neon-pink transition-colors">• Cutting-edge AI solutions that evolve with you</p>
            <p className="text-gray-400 hover:text-neon-pink transition-colors">• Always-on support when you need it</p>
            <p className="text-gray-400 hover:text-neon-pink transition-colors">• Custom strategies that fit like a glove</p>
            <p className="text-gray-400 hover:text-neon-pink transition-colors">• Predictable growth you can bank on</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}