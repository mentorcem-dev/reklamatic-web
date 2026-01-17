"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';
import { useLanguage } from '../context/LanguageContext';

// Components
import Header from '../components/Header';
import PurpleNeuralField from '../components/PurpleNeuralField';
import CustomCursor from '../components/CustomCursor';
import ServiceGrid from '../components/ServiceGrid';
import AutomationFlow from '../components/AutomationFlow';
import ReelGallery from '../components/ReelGallery';
import UseCases from '../components/UseCases';
import ProofMetrics from '../components/ProofMetrics';
import ProcessTimeline from '../components/ProcessTimeline';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const heroRef = useRef(null);
  const { t } = useLanguage();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Reklamatic.ai',
    url: 'https://reklamatic.ai',
    logo: 'https://reklamatic.ai/images/logo.jpg', // Ensure this exists
    description: 'Advanced AI Automation & Content Creation Agency',
    sameAs: [
      'https://www.instagram.com/reklamatic.ai',
      'https://www.linkedin.com/company/reklamatic'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-530-231-2947',
      contactType: 'customer service',
      email: 'info@reklamatic.ai'
    }
  };

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Hero Animations
    const tl = gsap.timeline({ delay: 0.5 });

    // Split text reveal simulation (lines)
    const lines = heroRef.current.querySelectorAll('.hero-line-inner');

    tl.fromTo(lines,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.1 }
    );

    // Fade in subline and chips
    tl.fromTo('.hero-sub',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      "-=0.8"
    );

    // Buttons
    tl.fromTo('.hero-cta',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      "-=0.6"
    );

    // Hero Interaction (Parallax)
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20; // range -10 to 10
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to('.hero-content', {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="main-wrapper font-sans text-white overflow-x-hidden selection:bg-purple-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CustomCursor />
      <PurpleNeuralField />
      <Header />

      <main>
        {/* HERO SECTION */}
        <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24">
          <div className="hero-content max-w-5xl z-10">
            {/* Chips */}
            <div className="flex flex-wrap gap-3 mb-8 hero-sub opacity-0">
              {t.hero.chips.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-purple-300 font-mono tracking-wide backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* Headline with Masking wrapper */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
              <div className="overflow-hidden hero-line"><div className="hero-line-inner">{t.hero.line1}</div></div>
              <div className="overflow-hidden hero-line"><div className="hero-line-inner text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient">{t.hero.line2}</div></div>
            </h1>

            {/* Subline */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 hero-sub opacity-0 leading-relaxed">
              {t.hero.sub}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-6 hero-cta opacity-0">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-50 hover:scale-105 transition-all duration-300">
                {t.hero.cta1}
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                {t.hero.cta2}
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </section>

        <ServiceGrid />
        <AutomationFlow />

        {/* Horizontal Reel Container (needs full width) */}
        <div id="ai-showcase" className="reel">
          <ReelGallery />
        </div>

        <UseCases />
        <ProofMetrics />
        <ProcessTimeline />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
