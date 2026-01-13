"use client";
import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [status, setStatus] = useState('idle'); // idle, loading, success

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        await new Promise(r => setTimeout(r, 1500));

        setStatus('success');

        // Reset to idle after delay
        setTimeout(() => {
            setStatus('idle');
            formRef.current?.reset();
        }, 3000);
    };

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
                                <a href="tel:+905302312947" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
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
                                <a href="mailto:info@reklamatic.ai" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
                                    info@reklamatic.ai
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="lg:w-1/2 fade-up delay-100">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className={`submission-card ${status === 'success' ? 'success' : ''}`}
                    >
                        <div className="space-y-6 relative z-10">
                            <div className="field">
                                <span className="glowline"></span>
                                <input
                                    type="text"
                                    className="contact-input"
                                    placeholder={t.contactSection.name}
                                    required
                                />
                            </div>
                            <div className="field">
                                <span className="glowline"></span>
                                <input
                                    type="email"
                                    className="contact-input"
                                    placeholder={t.contactSection.email}
                                    required
                                />
                            </div>
                            <div className="field">
                                <span className="glowline"></span>
                                <textarea
                                    rows="4"
                                    className="contact-textarea"
                                    placeholder={t.contactSection.message}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Submitting...' : status === 'success' ? 'Submitted ✓' : t.contactSection.submit}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
