import React, { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    
    // Grid settings
    const size = 55; // denser grid spacing for high fidelity
    const mouse = { x: null, y: null, targetX: null, targetY: null };
    
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Interpolate mouse coordinates for fluid movement
      if (mouse.targetX !== null) {
        if (mouse.x === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.08;
          mouse.y += (mouse.targetY - mouse.y) * 0.08;
        }
      } else {
        mouse.x = null;
        mouse.y = null;
      }
      
      const cols = Math.ceil(width / size) + 1;
      const rows = Math.ceil(height / size) + 1;
      
      // Draw grid points
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * size;
          const y = r * size;
          
          let dx = 0;
          let dy = 0;
          
          if (mouse.x !== null) {
            const rx = x - mouse.x;
            const ry = y - mouse.y;
            const dist = Math.sqrt(rx * rx + ry * ry);
            const maxDist = 240; // gravity radius
            
            if (dist < maxDist) {
              const force = (maxDist - dist) / maxDist;
              dx = (rx / dist) * force * 20; // push force
              dy = (ry / dist) * force * 20;
            }
          }
          
          // Draw dots
          ctx.fillStyle = mouse.x !== null && Math.sqrt((x + dx - mouse.x)**2 + (y + dy - mouse.y)**2) < 140
            ? 'rgba(6, 182, 212, 0.4)' // cyan glow near mouse
            : 'rgba(255, 255, 255, 0.06)'; // normal dots
            
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Radial glow effect
      if (mouse.x !== null) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        grad.addColorStop(0, 'rgba(139, 92, 246, 0.12)'); // violet glow core
        grad.addColorStop(0.4, 'rgba(6, 182, 212, 0.04)'); // cyan outer glow
        grad.addColorStop(1, 'rgba(7, 8, 10, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} id="global-canvas" aria-hidden="true" />
  );
};

export default InteractiveBackground;
