"use client";
import { useEffect, useRef } from 'react';

const PurpleNeuralField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationFrameId;

        // Configuration
        const particleCount = window.innerWidth < 768 ? 60 : 120;
        const connectionDist = 110;
        const baseSpeed = 0.5;

        // Simple pseudo-noise function using sin/cos
        const noise = (x, y) => {
            return Math.sin(x * 0.001) * Math.cos(y * 0.001);
        };

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * baseSpeed,
                    vy: (Math.random() - 0.5) * baseSpeed,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const drawParticles = () => {
            // Soft purple gradient fog background
            // We can do this with CSS for better performance, but here is clear rect
            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = 'rgba(124, 58, 237, 0.25)'; // Purple opacity 0.25
            ctx.strokeStyle = 'rgba(124, 58, 237, 0.08)'; // Line opacity 0.08
            ctx.lineWidth = 1;

            // Draw links first
            ctx.beginPath();
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDist) {
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                    }
                }
            }
            ctx.stroke();

            // Draw particles
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
        };

        const updateParticles = () => {
            particles.forEach(p => {
                // Flow field effect
                const angle = noise(p.x, p.y) * Math.PI * 2;
                p.vx += Math.cos(angle) * 0.02;
                p.vy += Math.sin(angle) * 0.02;

                // Friction
                p.vx *= 0.98;
                p.vy *= 0.98;

                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around screen
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
            });
        };

        const tick = () => {
            updateParticles();
            drawParticles();
            animationFrameId = requestAnimationFrame(tick);
        };

        // Initialize
        resize();
        window.addEventListener('resize', resize);

        // Check for reduced motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!mediaQuery.matches) {
            tick();
        } else {
            drawParticles(); // Draw once static
        }

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'linear-gradient(to bottom, #070712, #0b0b18)', // Fallback / Base gradient
                pointerEvents: 'none'
            }}
        />
    );
};

export default PurpleNeuralField;
