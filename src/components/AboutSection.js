"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
    const { t } = useLanguage();

    const teamImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop";

    // Dummy happy clients for visual proof
    const clients = [
        { img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop", name: "David M." },
        { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop", name: "Sarah K." },
        { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop", name: "Michael B." },
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-2 block">
                            {t.about?.badge || "WHO WE ARE"}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            {t.about?.title || "We are the architects of specific intelligence."}
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t.about?.desc || "Reklamatic is not just an AI tool. We are a team of creative engineers, data scientists, and strategists dedicated to solving the most complex content challenges. We bridge the gap between human creativity and machine speed."}
                    </p>

                    {/* Happy Clients / Social Proof */}
                    <div className="pt-8 border-t border-white/10">
                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {clients.map((client, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden relative">
                                        <img src={client.img} alt={client.name} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-2 border-black bg-purple-600 flex items-center justify-center text-xs font-bold">
                                    +500
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400">
                                    {t.about?.trusted || "Trusted by happy clients worldwide"}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                        <img
                            src={teamImage}
                            alt="Our Team"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-white text-lg">The A-Team</h3>
                                    <p className="text-purple-300 text-sm">Engineers & Creatives</p>
                                </div>
                                <div className="text-3xl">🚀</div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;
