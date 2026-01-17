"use client";
import { useEffect, useRef } from 'react';
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
        if (pathname !== '/') {
            router.push('/#' + id);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (pathname?.startsWith('/yoga')) return <header ref={headerRef} className="hidden" />;

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-transparent transition-all"
        >
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
                <span className="text-xl font-bold tracking-tight font-heading">reklamatic<span className="text-purple-500">.ai</span></span>
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
                <button onClick={() => scrollTo('ai-showcase')} className="hover:text-white transition-colors relative group">
                    {t.nav.aiVideos}
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

            {/* Mobile Menu Icon (Placeholder functionality) */}
            <div className="md:hidden text-white flex gap-4">
                <button className="p-2">Menu</button>
            </div>
        </header>
    );
};

export default Header;
