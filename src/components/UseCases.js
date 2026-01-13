"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

const UseCases = () => {
    const { t } = useLanguage();

    // Fallback if items are missing to prevent crash, though translations should cover it
    const items = t.useCases.items || [];

    const handleMouseEnter = (e) => {
        const target = e.currentTarget;
        const title = target.querySelector('.case-title');
        const outcome = target.querySelector('.case-outcome');

        gsap.to(title, { y: -20, opacity: 0, duration: 0.3, ease: 'power2.out' });
        gsap.to(outcome, { y: 0, opacity: 1, duration: 0.3, delay: 0.1, ease: 'power2.out' });
        gsap.to(target, { backgroundColor: 'rgba(124,58,237,0.1)', borderColor: '#7C3AED', duration: 0.3 });
    };

    const handleMouseLeave = (e) => {
        const target = e.currentTarget;
        const title = target.querySelector('.case-title');
        const outcome = target.querySelector('.case-outcome');

        gsap.to(title, { y: 0, opacity: 1, duration: 0.3, delay: 0.1, ease: 'power2.out' });
        gsap.to(outcome, { y: 20, opacity: 0, duration: 0.3, ease: 'power2.out' });
        gsap.to(target, { backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)', duration: 0.3 });
    };

    return (
        <section className="py-24 px-4 bg-[#0b0b18]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">{t.useCases.title}</h2>
                    <p className="text-gray-400">{t.useCases.sub}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="relative h-48 border border-white/10 bg-white/[0.03] rounded-xl flex items-center justify-center cursor-none overflow-hidden hover:z-10 transition-all"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                                <h3 className="case-title text-2xl font-bold">{item.title}</h3>
                                <p className="case-outcome absolute text-lg text-purple-300 font-medium translate-y-4 opacity-0">{item.outcome}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
