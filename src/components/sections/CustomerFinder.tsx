import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Search, Download, CheckCircle2, Database } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export function CustomerFinder() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // SCROLL ANIMATION PHASES
    // 0.0 - 0.2: Input Typing (Search Bar)
    // 0.2 - 0.5: Scanning/Loading (Radar)
    // 0.5 - 0.8: Results Populating (Grid)
    // 0.8 - 1.0: Success & Export (Button)

    // VISUALS
    const searchBarY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
    const searchBarOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    const radarOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [0, 1, 0]);
    const radarScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1.2]);

    const resultsOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
    const resultsY = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);

    const exportBtnScale = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
    const exportBtnOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

    // TEXT OPACITIES
    const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const step1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
    const step2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [0, 1, 0]);
    const step3Opacity = useTransform(scrollYProgress, [0.55, 0.7, 0.85], [0, 1, 0]);
    const step4Opacity = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);

    // Simulated Typing Effect
    const [typedText, setTypedText] = useState("");
    const targetText = "Diş Klinikleri, Nişantaşı";

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) => {
            if (value < 0.2) {
                const length = Math.floor((value / 0.2) * targetText.length);
                setTypedText(targetText.substring(0, length));
            } else {
                if (typedText !== targetText) setTypedText(targetText);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="relative h-[350vh] bg-black font-sans">

            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Scrollytelling Text */}
                    <div className="relative h-[400px]">
                        {/* Intro / Static Header */}
                        <motion.div style={{ opacity: headerOpacity }} className="absolute -top-32 left-0 mb-8 w-full">
                            <div className="flex items-center gap-2 text-blue-400 font-bold mb-2 tracking-wider uppercase text-sm">
                                <Target className="w-4 h-4" /> LeadForge v3.0
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                Google Maps'i <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                    Müşteri Veritabanına
                                </span> <br />
                                Dönüştürün.
                            </h2>
                        </motion.div>

                        {/* Step 1: Search */}
                        <motion.div style={{ opacity: step1Opacity }} className="absolute pt-12">
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <Search className="w-6 h-6 text-blue-500" /> 1. Hedef Belirleme
                            </h3>
                            <p className="text-gray-400 text-lg">Sektör (ör: Diş Hekimi) ve konum (ör: Nişantaşı, İstanbul) girin.</p>
                        </motion.div>

                        {/* Step 2: Scan */}
                        <motion.div style={{ opacity: step2Opacity }} className="absolute pt-12">
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <Database className="w-6 h-6 text-purple-500" /> 2. Derin Tarama
                            </h3>
                            <p className="text-gray-400 text-lg">Yapay zeka binlerce işletmeyi saniyeler içinde tarar ve analiz eder.</p>
                        </motion.div>

                        {/* Step 3: Filter */}
                        <motion.div style={{ opacity: step3Opacity }} className="absolute pt-12">
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-green-500" /> 3. Akıllı Filtreleme
                            </h3>
                            <p className="text-gray-400 text-lg">Web sitesi olmayanları veya eksik bilgileri otomatik olarak ayıklar.</p>
                        </motion.div>

                        {/* Step 4: Export */}
                        <motion.div style={{ opacity: step4Opacity }} className="absolute pt-12">
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <Download className="w-6 h-6 text-yellow-500" /> 4. Tek Tıkla Aktar
                            </h3>
                            <p className="text-gray-400 text-lg">Temizlenmiş veriyi Excel veya CRM sisteminize anında indirin.</p>
                        </motion.div>
                    </div>


                    {/* Right: Dynamic Dashboard Visual */}
                    <div className="relative h-[500px] w-full bg-[#0A0A0A] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

                        {/* Header Bar */}
                        <div className="bg-[#141414] px-4 py-3 flex items-center justify-between border-b border-gray-800 shrink-0 z-20 relative">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                                <Search className="w-3 h-3" /> finding_leads.exe
                            </div>
                        </div>

                        <div className="relative p-6 font-mono text-sm flex-1 overflow-hidden">

                            {/* VISUAL 1: SEARCH BAR */}
                            <motion.div
                                style={{ y: searchBarY, opacity: searchBarOpacity }}
                                className="flex gap-2 mb-6 relative z-10"
                            >
                                <div className="flex-1 bg-black border border-gray-700 rounded px-3 py-3 text-white flex items-center gap-2 shadow-lg">
                                    <Search className="w-4 h-4 text-gray-500" />
                                    <span className="text-blue-400 min-h-[20px]">{typedText}<span className="animate-pulse">|</span></span>
                                </div>
                                <button className="bg-blue-600 text-white px-6 rounded font-bold transition-transform active:scale-95">BAŞLAT</button>
                            </motion.div>

                            {/* VISUAL 2: RADAR SCANNING */}
                            <motion.div
                                style={{ opacity: radarOpacity, scale: radarScale }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <div className="relative">
                                    <div className="w-64 h-64 border-2 border-blue-500/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
                                    <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full animate-[spin_5s_linear_infinite_reverse] scale-75"></div>
                                    <Search className="absolute inset-0 m-auto w-12 h-12 text-blue-500 animate-pulse" />
                                    <div className="absolute top-full mt-4 text-center w-full text-blue-400 text-xs animate-pulse">Scanning DB...</div>
                                </div>
                            </motion.div>

                            {/* VISUAL 3: RESULTS GRID */}
                            <motion.div
                                style={{ opacity: resultsOpacity, y: resultsY }}
                                className="absolute top-24 left-6 right-6 bottom-6 border border-gray-800 rounded-lg overflow-hidden bg-black/80 backdrop-blur-sm flex flex-col"
                            >
                                <div className="grid grid-cols-4 gap-4 p-3 bg-gray-900 border-b border-gray-800 text-gray-500 text-xs uppercase font-bold shrink-0">
                                    <div>İşletme</div>
                                    <div>Tel</div>
                                    <div>Web</div>
                                    <div>Durum</div>
                                </div>
                                <div className="p-2 space-y-1 overflow-hidden">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="grid grid-cols-4 gap-4 p-2 text-[10px] items-center border-b border-white/5"
                                        >
                                            <div className="font-bold text-white flex gap-2 items-center">
                                                <div className="w-4 h-4 bg-gray-800 rounded flex items-center justify-center">A</div>
                                                Dentist Club
                                            </div>
                                            <div className="text-gray-500">+90 532...</div>
                                            <div className="text-blue-400">dentist.com</div>
                                            <div className="text-green-500 bg-green-900/20 px-1 rounded w-fit">Bulundu</div>
                                        </motion.div>
                                    ))}
                                    {/* Infinite scroll fade effect */}
                                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent"></div>
                                </div>
                            </motion.div>

                            {/* VISUAL 4: EXPORT SUCCESS */}
                            <motion.div
                                style={{ scale: exportBtnScale, opacity: exportBtnOpacity }}
                                className="absolute inset-0 flex items-center justify-center z-30 bg-black/60 backdrop-blur-sm"
                            >
                                <div className="bg-zinc-900 border border-green-500/50 p-8 rounded-2xl flex flex-col items-center gap-4 text-center shadow-2xl shadow-green-900/20">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                                        <CheckCircle2 className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">Tarama Tamamlandı!</h4>
                                        <p className="text-gray-400 text-sm mb-4">524 yeni müşteri bulundu.</p>
                                        <button className="bg-green-600 px-6 py-3 rounded-xl font-bold text-white flex items-center gap-2 hover:bg-green-500 transition-colors mx-auto">
                                            <Download className="w-4 h-4" /> Excel Olarak İndir
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
