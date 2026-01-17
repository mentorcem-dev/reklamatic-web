'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const scaleIn = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2 } }
};

export default function YogaPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = (id) => {
        setIsMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 600);
    };

    const menuVariants = {
        closed: { clipPath: "circle(0% at 95% 5%)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
        open: { clipPath: "circle(150% at 95% 5%)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-[#1C1C1C] font-sans selection:bg-[#D4C5B8] selection:text-white overflow-x-hidden">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
                <Link href="/yoga" className="text-2xl font-bold tracking-tighter uppercase z-50 hover:opacity-80 transition-opacity">
                    Reklamatic Yoga
                </Link>

                <button onClick={toggleMenu} className="z-50 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2 group cursor-pointer">
                    <span className="hidden md:inline group-hover:-translate-x-1 transition-transform">Menu</span>
                    <div className="flex flex-col gap-1.5 items-end">
                        <span className={`w-8 h-[2px] bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-8 h-[2px] bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </nav>

            {/* Cinematic Full Screen Menu */}
            <motion.div
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuVariants}
                className="fixed inset-0 bg-[#1C1C1C] text-[#FDFBF7] z-40 flex flex-col justify-center items-center pointer-events-auto"
            >
                <ul className="text-center space-y-6 md:space-y-8">
                    {[
                        { name: 'Classes', id: 'classes' },
                        { name: 'The Studio', id: 'studio' },
                        { name: 'Instructors', id: 'instructors' },
                        { name: 'Schedule', id: 'schedule' },
                        { name: 'Contact', id: 'contact' }
                    ].map((item, i) => (
                        <li key={item.name} className="overflow-hidden">
                            <motion.div
                                variants={{
                                    closed: { y: 100, opacity: 0 },
                                    open: { y: 0, opacity: 1, transition: { delay: i * 0.1 } }
                                }}
                                className="text-5xl md:text-8xl font-light hover:italic cursor-pointer transition-all hover:text-[#D4C5B8] hover:scale-110 active:scale-95 duration-300"
                                onClick={() => handleNavClick(item.id)}
                            >
                                {item.name}
                            </motion.div>
                        </li>
                    ))}
                </ul>
                <div className="absolute bottom-10 left-0 w-full text-center text-sm font-mono opacity-30 uppercase tracking-[0.5em]">
                    Wellness • Movement • Life
                </div>
            </motion.div>

            {/* Parallax Hero Section */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop"
                        alt="Yoga Studio Hero"
                        className="w-full h-full object-cover brightness-[0.85]"
                    />
                </motion.div>

                <div className="relative z-10 text-center text-white mix-blend-overlay px-4">
                    <motion.h1
                        initial={{ y: 100, opacity: 0, filter: "blur(20px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="text-[18vw] leading-[0.8] font-bold tracking-tighter uppercase"
                    >
                        Inhale
                    </motion.h1>
                    <motion.h1
                        initial={{ y: 100, opacity: 0, filter: "blur(20px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="text-[18vw] leading-[0.8] font-bold tracking-tighter uppercase italic pr-24"
                    >
                        Exhale
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 animate-bounce"
                >
                    <svg className="w-6 h-6 text-white text-opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </motion.div>
            </section>

            {/* Introduction with Scroll Reveal */}
            <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-light leading-tight">
                        More than<br /> a studio. <br /> <span className="italic font-serif text-[#D4C5B8] ml-4">A movement.</span>
                    </motion.h2>
                    <motion.div variants={fadeInUp}>
                        <p className="text-xl text-[#5A5A5A] leading-relaxed mb-8 font-light">
                            At Reklamatic Yoga, we strip away the noise to help you find your rhythm. Our classes are designed not just to work your body, but to awaken your consciousness.
                        </p>
                        <ul className="text-sm font-bold uppercase tracking-widest space-y-4">
                            <li className="flex items-center gap-2"><span className="w-12 h-[1px] bg-black"></span> Holistic Approach</li>
                            <li className="flex items-center gap-2"><span className="w-12 h-[1px] bg-black"></span> Expert Guidance</li>
                            <li className="flex items-center gap-2"><span className="w-12 h-[1px] bg-black"></span> Community Driven</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </section>

            {/* Dynamic Classes Grid */}
            <section id="classes" className="py-20 px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase inline-block border-b border-black pb-2">Classes</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        {
                            title: "Reformer Core",
                            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
                            desc: "Sculpt and strengthen with precision."
                        },
                        {
                            title: "Hot Vinyasa",
                            image: "https://images.unsplash.com/photo-1544367563-12123d815074?q=80&w=800&auto=format&fit=crop",
                            desc: "Flow, sweat, and detoxify in 38°C heat."
                        },
                        {
                            title: "Deep Stretch",
                            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
                            desc: "Restore flexibility and calm the mind."
                        },
                        {
                            title: "Barre & Tone",
                            image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop",
                            desc: "Ballet-inspired micro-movements."
                        },
                        {
                            title: "Aerial Yoga",
                            image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop",
                            desc: "Defy gravity and decompose your spine."
                        },
                        {
                            title: "Morning Meditation",
                            image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800&auto=format&fit=crop",
                            desc: "Start your day with intention."
                        }
                    ].map((cls, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: i * 0.1 } }
                            }}
                            className="group relative h-[500px] overflow-hidden cursor-pointer"
                        >
                            <img src={cls.image} alt={cls.title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-bold text-white mb-2">{cls.title}</h3>
                                <p className="text-[#D4C5B8] font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cls.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* The Studio - Bento Grid Layout */}
            <section id="studio" className="py-32 px-6 md:px-12 bg-[#F1F1F0]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-light">The Space</h2>
                        <p className="text-gray-500 mt-2">Designed for serenity.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
                        <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
                            <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-full text-sm font-bold uppercase">Main Studio</div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" />
                            <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-full text-sm font-bold uppercase">Lounge</div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" />
                            <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-full text-sm font-bold uppercase">Equipment</div>
                        </motion.div>
                        <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-full text-sm font-bold uppercase">Organic Bar</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Instructors with Hover Effect */}
            <section id="instructors" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center uppercase">Our Guides</h2>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        {[
                            { name: "Elif", role: "Founder", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" },
                            { name: "Can", role: "Master Trainer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" },
                            { name: "Selin", role: "Yin Specialist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop" }
                        ].map((inst, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
                                }}
                                whileHover={{ y: -10 }}
                                className="flex-1 max-w-sm mx-auto"
                            >
                                <div className="aspect-[3/4] overflow-hidden rounded-t-[100px] mb-6 relative group">
                                    <img src={inst.img} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-serif italic">{inst.name}</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#D4C5B8] mt-1">{inst.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Schedule */}
            <section id="schedule" className="py-32 bg-[#1c1c1c] text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl mb-12 text-center font-light">Weekly Rhythm</h2>
                    <div className="space-y-4">
                        {[
                            { time: "07:00", class: "Morning Awakening", guide: "Elif", bg: "bg-orange-100" },
                            { time: "09:30", class: "Reformer Foundation", guide: "Can", bg: "bg-blue-100" },
                            { time: "12:00", class: "Power Hour", guide: "Guest", bg: "bg-red-100" },
                            { time: "17:30", class: "Sunset Flow", guide: "Selin", bg: "bg-purple-100" },
                            { time: "19:00", class: "Candlelit Yin", guide: "Selin", bg: "bg-indigo-100" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                className="flex justify-between items-center p-6 border-b border-gray-800 cursor-pointer group rounded-xl transition-all"
                            >
                                <div className="font-mono text-[#D4C5B8]">{item.time}</div>
                                <div className="text-xl md:text-2xl font-serif">{item.class}</div>
                                <div className="text-sm uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{item.guide}</div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <button className="bg-[#D4C5B8] text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Book A Mat
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <section id="contact" className="py-24 px-6 md:px-12 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto border-t border-black pt-12 flex flex-col md:flex-row justify-between gap-12">
                    <div>
                        <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter mb-8">CONTACT.</h2>
                        <div className="space-y-4 text-lg">
                            <p>Alsancak, İzmir</p>
                            <a href="mailto:hello@reklamaticyoga.com" className="block hover:italic decoration-wavy underline">hello@reklamaticyoga.com</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <div className="flex gap-4 mb-4">
                            {['Instagram', 'Spotify', 'Twitter'].map(social => (
                                <a key={social} href="#" className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">{social[0]}</a>
                            ))}
                        </div>
                        <p className="text-xs uppercase tracking-widest text-gray-400">© 2024 Reklamatic Yoga</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
