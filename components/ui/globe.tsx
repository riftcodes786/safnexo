"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const drawGlobe = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.3;
      
      // Create gradient for globe
      const gradient = ctx.createRadialGradient(centerX - radius * 0.3, centerY - radius * 0.3, 0, centerX, centerY, radius);
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)");
      gradient.addColorStop(0.7, "rgba(30, 64, 175, 0.6)");
      gradient.addColorStop(1, "rgba(15, 23, 42, 0.4)");
      
      // Draw globe
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add grid lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 1;
      
      // Horizontal lines
      for (let i = 0; i <= 6; i++) {
        const y = centerY - radius + (i * (radius * 2) / 6);
        ctx.beginPath();
        ctx.arc(centerX, centerY, Math.sqrt(radius * radius - Math.pow(y - centerY, 2)), 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Vertical lines
      for (let i = 0; i <= 8; i++) {
        const angle = (i * Math.PI * 2) / 8 + time * 0.01;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      
      // Add floating particles
      for (let i = 0; i < 20; i++) {
        const angle = (i * Math.PI * 2) / 20 + time * 0.005;
        const distance = radius + 20 + Math.sin(time * 0.01 + i) * 10;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${0.6 + Math.sin(time * 0.01 + i) * 0.4})`;
        ctx.fill();
      }
      
      time += 1;
      animationId = requestAnimationFrame(drawGlobe);
    };

    resizeCanvas();
    drawGlobe();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "transparent" }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="text-6xl mb-4">🌍</div>
          <p className="text-sm text-muted-foreground font-medium">
            Global Reach
          </p>
        </motion.div>
      </div>
    </div>
  );
}
