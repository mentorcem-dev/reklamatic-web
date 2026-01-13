"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const ProofMetrics = () => {
    const sectionRef = useRef(null);
    const { t } = useLanguage();

    const metrics = [
        { value: 50, suffix: "K+", label: t.proof.m1.label },
        { value: 120, suffix: "+", label: t.proof.m2.label },
        { value: 40, suffix: "%", label: t.proof.m3.label },
    ];

    useEffect(() => {
        const counters = sectionRef.current.querySelectorAll('.counter');

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const obj = { val: 0 };

            gsap.to(obj, {
                val: target,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                },
                onUpdate: () => {
                    counter.innerText = Math.floor(obj.val);
                }
            });
        });
    }, []);

    return (
        <section ref={sectionRef} className="py-24 border-y border-white/5 bg-[#070712] relative">
            <div className="absolute inset-0 bg-purple-900/5 -z-10" />
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">

                <div className="md:w-1/3">
                    <h2 className="text-3xl font-bold mb-4 whitespace-pre-line">{t.proof.title}</h2>
                    <p className="text-gray-400">{t.proof.desc}</p>
                </div>

                <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {metrics.map((m, i) => (
                        <div key={i} className="bg-white/5 rounded-2xl p-6 text-center border border-white/5 hover:border-purple-500/30 transition-colors">
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">
                                <span className="counter" data-target={m.value}>0</span>{m.suffix}
                            </div>
                            <div className="text-sm text-purple-300 uppercase tracking-wider">{m.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProofMetrics;
