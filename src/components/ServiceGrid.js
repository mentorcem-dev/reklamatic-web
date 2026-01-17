"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

import ThreeDIcon from './ThreeDIcon';

gsap.registerPlugin(ScrollTrigger);

const ServiceGrid = () => {
    const gridRef = useRef(null);
    const { t } = useLanguage();

    const services = [
        { ...t.services.s1, iconType: "clapper" },
        { ...t.services.s2, iconType: "robot" },
        { ...t.services.s3, iconType: "nodes" },
        { ...t.services.s4, iconType: "music" },
        { ...t.services.s5, iconType: "building" },
        { ...t.services.s6, iconType: "camera" }
    ];

    useEffect(() => {
        const cards = gridRef.current.querySelectorAll('.service-card');

        cards.forEach((card, index) => {
            const details = card.querySelector('.card-details');

            // Mouse interaction (desktop)
            card.onmousemove = (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;

                gsap.to(card, {
                    rotationY: px * 12,
                    rotationX: -py * 12,
                    ease: 'power2.out',
                    duration: 0.5
                });

                const glow = card.querySelector('.glow-effect');
                if (glow) {
                    gsap.to(glow, {
                        x: (e.clientX - r.left),
                        y: (e.clientY - r.top),
                        ease: 'power2.out',
                        duration: 0.5
                    });
                }
            };

            card.onmouseleave = () => {
                gsap.to(card, {
                    rotationY: 0,
                    rotationX: 0,
                    ease: 'power2.out',
                    duration: 0.5
                });
            };

            // Auto-expand on scroll (mobile & desktop)
            ScrollTrigger.create({
                trigger: card,
                start: 'top 75%',
                end: 'bottom 25%',
                onEnter: () => {
                    gsap.to(details, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power2.out'
                    });
                },
                onLeave: () => {
                    gsap.to(details, {
                        opacity: 0,
                        y: 16,
                        duration: 0.4,
                        ease: 'power2.in'
                    });
                },
                onEnterBack: () => {
                    gsap.to(details, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power2.out'
                    });
                },
                onLeaveBack: () => {
                    gsap.to(details, {
                        opacity: 0,
                        y: 16,
                        duration: 0.4,
                        ease: 'power2.in'
                    });
                }
            });
        });

        // Initial reveal animation
        gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 80%'
            }
        });

    }, []);

    return (
        <section id="services" className="relative py-32 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase block mb-2">{t.services.subtitle}</span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight">{t.services.title}</h2>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="service-card group relative h-[300px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 overflow-hidden cursor-none"
                            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                        >
                            <div className="glow-effect absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ top: 0, left: 0 }} />

                            <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: 'translateZ(20px)' }}>
                                <div>
                                    <h3 className="text-3xl font-bold leading-tight group-hover:text-purple-300 transition-colors mb-4">{s.title}</h3>
                                    <div className="w-24 h-24 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                        <ThreeDIcon type={s.iconType} size={100} />
                                    </div>
                                </div>

                                <div className="card-details opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        {s.list.map((item, idx) => (
                                            <li key={idx}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
