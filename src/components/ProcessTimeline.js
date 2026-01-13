"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const ProcessTimeline = () => {
    const containerRef = useRef(null);
    const [activeStep, setActiveStep] = useState(1);
    const { t } = useLanguage();

    const stepsData = t.process.steps || [];
    const colors = ["#8b5cf6", "#ec4899", "#06b6d4", "#a855f7", "#e879f9"];

    const steps = stepsData.map((step, i) => ({
        ...step,
        id: i + 1,
        color: colors[i] || colors[0]
    }));

    useEffect(() => {
        const triggers = [];
        const stepEls = containerRef.current.querySelectorAll('.process-step');

        // Steps animations
        stepEls.forEach((el, index) => {
            const trigger = ScrollTrigger.create({
                trigger: el,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveStep(index + 1),
                onEnterBack: () => setActiveStep(index + 1),
            });
            triggers.push(trigger);
        });

        // Pinning for the right side visual
        const pinTrigger = ScrollTrigger.create({
            trigger: ".steps-container",
            start: "top top",
            end: "bottom bottom-=120",
            pin: '.process-visual-sticky',
            pinSpacing: false
        });
        triggers.push(pinTrigger);

        return () => triggers.forEach(t => t.kill());
    }, []);

    return (
        <section ref={containerRef} id="process" className="py-24 px-4 bg-[#080816]">
            <div className="max-w-7xl mx-auto mb-16 px-4">
                <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2 block">{t.process.badge}</span>
                <h2 className="text-5xl font-bold">{t.process.title}</h2>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-24 relative">

                {/* Left: Steps Flow */}
                <div className="steps-container w-full lg:w-1/2 flex flex-col gap-24 py-12 relative z-10 border-l border-white/10 pl-8 ml-4 lg:ml-0">
                    {steps.map((step, i) => (
                        <div key={i} className={`process-step transition-opacity duration-500 ${activeStep === step.id ? 'opacity-100' : 'opacity-30'}`}>
                            <span className="text-xs font-mono text-purple-400 mb-2 block">0{step.id}</span>
                            <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                            <p className="text-lg text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Right: Sticky Visual */}
                <div className="process-visual-sticky hidden lg:block w-1/2 h-[calc(100vh-100px)] self-start">
                    <div className="w-full h-full relative flex items-center justify-center">
                        {/* Dynamic Background based on step */}
                        <div
                            className="absolute inset-0 transition-colors duration-700"
                            style={{
                                background: `radial-gradient(circle at center, ${steps[activeStep - 1]?.color}20 0%, transparent 70%)`
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 text-center p-8">
                            <div className="text-9xl font-bold text-white/5 font-mono mb-4">{activeStep}</div>
                            <h4 className="text-2xl font-bold text-white mb-2">{steps[activeStep - 1]?.title}</h4>
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-4" />
                        </div>

                        {/* Decoration Circles */}
                        <div className="absolute inset-0">
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full transition-all duration-700 ${activeStep % 2 === 0 ? 'scale-110 rotate-45' : 'scale-100 rotate-0'}`} />
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full transition-all duration-1000 delay-100 ${activeStep % 2 !== 0 ? 'scale-110 -rotate-45' : 'scale-100 rotate-0'}`} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProcessTimeline;
