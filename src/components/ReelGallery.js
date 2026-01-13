"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const ReelGallery = () => {
    const sectionRef = useRef(null);
    const reelRef = useRef(null);
    const { t } = useLanguage();

    const videos = [
        { title: "Neon Nights", cat: t.showcase.cats.brand, time: "4K", img: "brand_film_1768223568191.png" },
        { title: "Estate Tour 4K", cat: t.showcase.cats.realEstate, time: "4K", img: "real_estate_1768223585980.png" },
        { title: "Viral Dance", cat: t.showcase.cats.ugc, time: "1080p", img: "ugc_tiktok_1768223602544.png" },
        { title: "Tech Launch", cat: t.showcase.cats.ad, time: "4K", img: "abstract_neon_3_1768223280163.png" },
        { title: "Cafe Vibes", cat: t.showcase.cats.social, time: "1080p", img: "abstract_neon_2_1768223257765.png" },
    ];

    useEffect(() => {
        const reel = reelRef.current;
        const section = sectionRef.current;

        // Calculate scroll amount: total width - viewport width
        // We need to wait for layout, but in React effect it is usually fine

        let ctx = gsap.context(() => {
            const getScrollAmount = () => -(reel.scrollWidth - window.innerWidth);

            const tween = gsap.to(reel, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${reel.scrollWidth - window.innerWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen overflow-hidden bg-black relative">
            <div className="absolute top-12 left-12 z-10">
                <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">{t.showcase.badge}</span>
                <h2 className="text-4xl font-bold mt-2">{t.showcase.title}</h2>
            </div>

            <div ref={reelRef} className="flex h-full items-center pl-[10vw] gap-12 w-max">
                {videos.map((v, i) => (
                    <div
                        key={i}
                        className="video-card w-[60vh] h-[35vh] md:w-[80vh] md:h-[45vh] bg-[#111] border border-white/10 rounded-xl relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-500 shrink-0"
                    >
                        {/* Generated Image */}
                        <img
                            src={`/assets/${v.img}`}
                            alt={v.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <span className="text-purple-400 text-xs font-mono mb-2">{v.cat}</span>
                            <div className="flex justify-between items-end">
                                <h3 className="text-2xl font-bold">{v.title}</h3>
                                <span className="text-xs border border-white/20 px-2 py-1 rounded-full">{v.time}</span>
                            </div>
                        </div>


                    </div>
                ))}
                {/* End spacer */}
                <div className="w-[10vw]"></div>
            </div>
        </section>
    );
};

export default ReelGallery;
