"use client";
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(el.querySelectorAll('.fade-up'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%'
                }
            }
        );
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-24 px-4 bg-[#070712] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-900/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

                {/* Left: Info */}
                <div className="lg:w-1/2 fade-up">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block">{t.nav.contact}</span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        {t.contactSection.title}
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-md">
                        {t.contactSection.desc}
                    </p>

                    <div className="space-y-8">
                        {/* Phone */}
                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{t.contactSection.phone}</h3>
                                <a href="tel:+905302312947" className="text-xl sm:text-2xl font-bold text-white hover:text-purple-400 transition-colors break-words">
                                    +90 530 231 29 47
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">{t.contactSection.emailLabel}</h3>
                                <a href="mailto:info@reklamatic.ai" className="text-xl sm:text-2xl font-bold text-white hover:text-purple-400 transition-colors break-all">
                                    info@reklamatic.ai
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: direct contact options */}
                <div className="lg:w-1/2 fade-up delay-100">
                    <div className="submission-card relative z-10">
                        <div className="relative z-10">
                            <p className="text-purple-300 font-mono text-sm uppercase tracking-widest mb-4">Start with one clear campaign form</p>
                            <h3 className="text-3xl font-bold mb-4">Tell us what you sell and who should see it.</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">We will reply with the most suitable accounts, content format, delivery plan and commercial package. No vague discovery form and no fake automated confirmation.</p>
                            <div className="grid gap-3">
                                <a href="mailto:info@reklamatic.ai?subject=Campaign%20Form&body=Hi%20Reklamatic%2C%0A%0ACompany%3A%0AProduct%20or%20service%3A%0ATarget%20market%3A%0AGoal%3A%0ATimeline%3A" className="submit-btn text-center">Send campaign details</a>
                                <a href="https://wa.me/905302312947?text=Hi%20Reklamatic%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="w-full py-4 rounded-full border border-white/15 text-center font-bold hover:bg-white/5 transition-colors">Talk on WhatsApp</a>
                            </div>
                            <p className="text-xs text-gray-600 mt-6">Global projects welcome · English and Turkish · 50% deposit to begin campaign work</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
