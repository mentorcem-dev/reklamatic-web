"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const headerRef = useRef(null);
    const { t } = useLanguage();
    const router = useRouter();
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const header = headerRef.current;

        gsap.to(header, {
            backgroundColor: "rgba(7, 7, 18, 0.8)",
            paddingTop: "12px",
            paddingBottom: "12px",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "+=100",
                scrub: true
            }
        });
    }, []);

    const scrollTo = (id) => {
        setIsMenuOpen(false); // Close menu on click
        if (pathname !== '/') {
            router.push('/#' + id);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (pathname?.startsWith('/yoga')) return <header ref={headerRef} className="hidden" />;

    return (
        <>
            <header
                ref={headerRef}
                className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-transparent transition-all"
            >
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer z-50" onClick={() => router.push('/')}>
                    <span className="text-xl font-bold tracking-tight font-heading text-white">reklamatic<span className="text-purple-500">.ai</span></span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
                    <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors relative group">
                        {t.nav.services}
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-500 transition-all group-hover:w-full"></span>
                    </button>
                    <button onClick={() => scrollTo('automations')} className="hover:text-white transition-colors relative group">
                        {t.nav.automations}
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-500 transition-all group-hover:w-full"></span>
                    </button>

                    <button onClick={() => scrollTo('process')} className="hover:text-white transition-colors relative group">
                        {t.nav.process}
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-500 transition-all group-hover:w-full"></span>
                    </button>

                    <Link href="/lead-finder" className="hover:text-white transition-colors relative group text-purple-400 font-semibold hover:text-purple-300">
                        {t.nav.leadFinder || "Lead Finder"}
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-500 transition-all group-hover:w-full"></span>
                    </Link>

                    <button onClick={() => scrollTo('contact')} className="px-5 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white">
                        {t.nav.contact}
                    </button>
                </nav>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden text-white p-2 z-50 relative group"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                        <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#070712] z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col items-center gap-8 text-2xl font-bold text-white">
                    <button onClick={() => scrollTo('services')} className="hover:text-purple-400 transition-colors">{t.nav.services}</button>
                    <button onClick={() => scrollTo('automations')} className="hover:text-purple-400 transition-colors">{t.nav.automations}</button>

                    <button onClick={() => scrollTo('process')} className="hover:text-purple-400 transition-colors">{t.nav.process}</button>

                    <Link href="/lead-finder" onClick={() => setIsMenuOpen(false)} className="hover:text-purple-400 transition-colors text-purple-500 font-bold text-3xl md:text-2xl mt-4 md:mt-0">
                        {t.nav.leadFinder || "Lead Finder"}
                    </Link>

                    <button onClick={() => scrollTo('contact')} className="hover:text-purple-400 transition-colors mt-4 md:mt-0">{t.nav.contact}</button>
                </nav>
            </div>
        </>
    );
};

export default Header;
