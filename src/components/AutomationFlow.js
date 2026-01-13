"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AutomationFlow = () => {
    const sectionRef = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;
        const paths = svg.querySelectorAll('.flow-path');
        const pulses = svg.querySelectorAll('.pulse-circle');
        const nodes = svg.querySelectorAll('.node-group');

        // Draw paths animation
        gsap.fromTo(paths,
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%"
                }
            }
        );

        // Infinite pulse animation along paths
        pulses.forEach((pulse, i) => {
            // Create a motion path animation
            // Note: MotionPathPlugin is ideal but we can simulate with simple logic or just CSS keyframes
            // Since we didn't explicitly install MotionPathPlugin, let's use a simpler GSAP set of tweens 
            // or just standard CSS animation for the infinite flow if complex mapping isn't crucial.
            // Actually, simplest 'pulse' is just fading stroke opacity or moving a dash array.
            // Let's use moving dash array on a duplicate path for "data flow" look.
        });

        // Let's emulate data flow using stroke-dashoffset on the "flow" lines (cyan ones)
        gsap.to('.flow-active', {
            strokeDashoffset: -200,
            repeat: -1,
            ease: "none",
            duration: 1.5
        });

        // Node hover effects
        nodes.forEach(node => {
            node.addEventListener('mouseenter', () => {
                gsap.to(node.querySelector('rect'), { stroke: '#A855F7', strokeWidth: 2, fill: 'rgba(124,58,237,0.1)' });
                gsap.to(node.querySelector('text'), { fill: '#fff' });
            });
            node.addEventListener('mouseleave', () => {
                gsap.to(node.querySelector('rect'), { stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, fill: 'rgba(7,7,18,0.8)' });
                gsap.to(node.querySelector('text'), { fill: '#A7A7C2' });
            });
        });

    }, []);

    return (
        <section id="automations" ref={sectionRef} className="py-24 relative overflow-hidden bg-black/20">
            <div className="absolute inset-0 bg-[#070712] -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div>
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase block mb-4">Neural Workflows</span>
                    <h2 className="text-5xl font-bold mb-6">Automations that <br /><span className="gradient-text">remove chaos.</span></h2>
                    <ul className="space-y-4 text-lg text-gray-400">
                        <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Appointments auto-booked 24/7</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Leads captured from any source</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Content distributed automatically</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Reporting generated while you sleep</li>
                    </ul>
                </div>

                {/* Visual Graph */}
                <div className="h-[400px] w-full relative border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm p-4">
                    <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 600 400" className="w-full h-full">
                        <defs>
                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L9,3 z" fill="#444" />
                            </marker>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Connection Lines (Background) */}
                        <path d="M100 200 L 300 100" className="flow-path" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        <path d="M100 200 L 300 200" className="flow-path" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        <path d="M100 200 L 300 300" className="flow-path" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        <path d="M300 100 L 500 200" className="flow-path" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        <path d="M300 200 L 500 200" className="flow-path" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        <path d="M300 300 L 500 200" className="flow-path" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />

                        {/* Active Flow Lines (Overlays) */}
                        {/* We use stroke-dasharray tricks for movement */}
                        <path d="M100 200 L 300 100" className="flow-active" stroke="#7C3AED" strokeWidth="2" strokeDasharray="20 180" fill="none" filter="url(#glow)" strokeOpacity="0.8" />
                        <path d="M100 200 L 300 200" className="flow-active" stroke="#7C3AED" strokeWidth="2" strokeDasharray="20 180" fill="none" filter="url(#glow)" strokeOpacity="0.8" />
                        <path d="M100 200 L 300 300" className="flow-active" stroke="#7C3AED" strokeWidth="2" strokeDasharray="20 180" fill="none" filter="url(#glow)" strokeOpacity="0.8" />

                        {/* Nodes */}
                        {/* Center Brain */}
                        <g className="node-group" transform="translate(50, 180)">
                            <rect width="100" height="40" rx="20" fill="#0b0b18" stroke="rgba(255,255,255,0.1)" />
                            <text x="50" y="25" textAnchor="middle" fill="#ccc" fontSize="12" fontWeight="600">AI BRAIN</text>
                        </g>

                        {/* Mid Layer */}
                        <g className="node-group" transform="translate(250, 80)">
                            <rect width="100" height="40" rx="8" fill="#0b0b18" stroke="rgba(255,255,255,0.1)" />
                            <text x="50" y="25" textAnchor="middle" fill="#A7A7C2" fontSize="12">WhatsApp</text>
                        </g>
                        <g className="node-group" transform="translate(250, 180)">
                            <rect width="100" height="40" rx="8" fill="#0b0b18" stroke="rgba(255,255,255,0.1)" />
                            <text x="50" y="25" textAnchor="middle" fill="#A7A7C2" fontSize="12">G-Sheets</text>
                        </g>
                        <g className="node-group" transform="translate(250, 280)">
                            <rect width="100" height="40" rx="8" fill="#0b0b18" stroke="rgba(255,255,255,0.1)" />
                            <text x="50" y="25" textAnchor="middle" fill="#A7A7C2" fontSize="12">Calendar</text>
                        </g>

                        {/* End Layer */}
                        <g className="node-group" transform="translate(450, 180)">
                            <rect width="100" height="40" rx="8" fill="#0b0b18" stroke="rgba(255,255,255,0.1)" />
                            <text x="50" y="25" textAnchor="middle" fill="#A7A7C2" fontSize="12">Socials</text>
                        </g>

                    </svg>
                </div>
            </div>
        </section>
    );
};

export default AutomationFlow;
