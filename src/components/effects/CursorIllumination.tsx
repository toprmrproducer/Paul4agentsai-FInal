import React, { useEffect, useRef } from 'react';

export function CursorIllumination() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const GLOW_RADIUS = 100;
    const SMOOTHING = 0.1;

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

      // Create radial gradient for the glow effect
      const gradient = ctx.createRadialGradient(
        cursorPos.current.x,
        cursorPos.current.y,
        0,
        cursorPos.current.x,
        cursorPos.current.y,
        GLOW_RADIUS
      );

      gradient.addColorStop(0, 'rgba(255, 20, 147, 0.2)');   // Neon pink core
      gradient.addColorStop(0.5, 'rgba(255, 20, 147, 0.05)'); // Softer middle
      gradient.addColorStop(1, 'rgba(255, 20, 147, 0)');     // Transparent edge

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}