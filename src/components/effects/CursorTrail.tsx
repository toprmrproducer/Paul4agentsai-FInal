import React, { useEffect, useRef } from 'react';

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const RING_SIZE = 10; // Reduced size by 50%
    const SMOOTHING = 0.2;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth cursor movement
      cursorPos.current.x += (targetPos.current.x - cursorPos.current.x) * SMOOTHING;
      cursorPos.current.y += (targetPos.current.y - cursorPos.current.y) * SMOOTHING;

      // Draw main ring
      ctx.beginPath();
      ctx.arc(cursorPos.current.x, cursorPos.current.y, RING_SIZE, 0, Math.PI * 2);
      ctx.strokeStyle = '#ff1493';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw outer glow
      const gradient = ctx.createRadialGradient(
        cursorPos.current.x,
        cursorPos.current.y,
        RING_SIZE - 2,
        cursorPos.current.x,
        cursorPos.current.y,
        RING_SIZE + 2
      );
      gradient.addColorStop(0, 'rgba(255, 20, 147, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 20, 147, 0)');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 4;
      ctx.stroke();

      rafId.current = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}