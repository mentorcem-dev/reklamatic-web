import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, Instagram, Search, Zap, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Phases for 4 steps (0-25, 25-50, 50-75, 75-100)
    const step1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
    const step2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.5], [0, 1, 0]);
    const step3Opacity = useTransform(scrollYProgress, [0.5, 0.65, 0.75], [0, 1, 0]);
    const step4Opacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]); // Keep last one visible

    // Vertical line progress
    const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={containerRef} id="how-it-works" className="relative h-[400vh] bg-zinc-950">

            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* PROGRESS LINE (Left Side) */}
                <div className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 h-[60vh] w-1 bg-zinc-800 rounded-full overflow-hidden hidden md:block">
                    <motion.div style={{ scaleY: lineProgress }} className="w-full h-full bg-blue-500 origin-top"></motion.div>
                </div>

                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: DYNAMIC VISUAL STAGE */}
                    <div className="relative h-[400px] md:h-[500px] w-full bg-zinc-900/50 rounded-[3rem] border border-zinc-800 overflow-hidden shadow-2xl">
                        {/* Grid BG */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                        {/* --- visual 1: RADAR SCAN (Analiz) --- */}
                        <motion.div style={{ opacity: step1Opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="relative">
                                <div className="w-64 h-64 border border-blue-500/30 rounded-full animate-[spin_4s_linear_infinite]">
                                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-blue-500/20 absolute right-0 top-0 rounded-r-full blur-md"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Search className="w-12 h-12 text-blue-400" />
                                </div>
                                {/* Found Dots */}
                                <motion.div animate={{ scale: [0, 1], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute top-10 right-10 w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
                                <motion.div animate={{ scale: [0, 1], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1.2 }} className="absolute bottom-16 left-12 w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
                                <div className="absolute -bottom-12 w-full text-center text-blue-300 font-mono text-xs">SCANNING_TARGETS...</div>
                            </div>
                        </motion.div>

                        {/* --- visual 2: INTEGRATION (Entegrasyon) --- */}
                        <motion.div style={{ opacity: step2Opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="flex items-center gap-8">
                                <div className="w-20 h-20 bg-zinc-800 rounded-2xl border border-zinc-600 flex items-center justify-center">
                                    <Settings className="w-10 h-10 text-gray-400 animate-[spin_5s_linear_infinite]" />
                                </div>
                                {/* Animated Cord */}
                                <div className="w-24 h-2 bg-zinc-800 rounded overflow-hidden relative">
                                    <div className="absolute inset-0 bg-green-500 w-1/2 animate-[translateX_1s_linear_infinite]"></div>
                                </div>
                                <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                                    <Instagram className="w-10 h-10 text-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-10 w-full text-center text-green-400 font-mono text-xs">API_HANDSHAKE: CONNECTED</div>
                        </motion.div>

                        {/* --- visual 3: AUTOMATION (Otomasyon) --- */}
                        <motion.div style={{ opacity: step3Opacity }} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-4">
                            <motion.div
                                initial={{ x: -100 }} animate={{ x: 0 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                                className="bg-zinc-800 p-4 rounded-xl rounded-tl-none border border-zinc-700 max-w-[200px] self-start ml-12"
                            >
                                <div className="h-2 w-24 bg-zinc-600 rounded mb-2"></div>
                                <div className="h-2 w-16 bg-zinc-600 rounded"></div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 100 }} animate={{ x: 0 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5, delay: 0.2 }}
                                className="bg-blue-600 p-4 rounded-xl rounded-tr-none text-white max-w-[200px] self-end mr-12"
                            >
                                <div className="h-2 w-28 bg-blue-300 rounded mb-2"></div>
                                <div className="h-2 w-20 bg-blue-300 rounded"></div>
                            </motion.div>

                            <div className="absolute bottom-10 flex gap-2">
                                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                                <span className="text-xs text-yellow-400 font-mono">AUTOPILOT_ENGAGED</span>
                            </div>
                        </motion.div>

                        {/* --- visual 4: GROWTH (Büyüme) --- */}
                        <motion.div style={{ opacity: step4Opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="flex items-end gap-4 h-40">
                                <motion.div animate={{ height: [40, 60, 40] }} transition={{ repeat: Infinity, duration: 2 }} className="w-12 bg-zinc-800 rounded-t-lg relative group">
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-zinc-500">Oc</span>
                                </motion.div>
                                <motion.div animate={{ height: [60, 100, 60] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="w-12 bg-zinc-700 rounded-t-lg relative group">
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-zinc-500">Şb</span>
                                </motion.div>
                                <motion.div animate={{ height: [80, 140, 80] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="w-12 bg-blue-500 rounded-t-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] relative">
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-blue-400 font-bold">Mr</span>
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
                                </motion.div>
                            </div>
                            <div className="absolute bottom-10 flex gap-2 items-center">
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                <span className="text-xs text-green-400 font-mono">+340% REVENUE</span>
                            </div>
                        </motion.div>
                    </div>


                    {/* RIGHT: TEXT CONTENT */}
                    <div className="space-y-12">
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Süreç <span className="text-blue-500">Nasıl İşliyor?</span></h2>
                            <p className="text-gray-400">Arkanıza yaslanın, Enterprise AI sistemimiz işletmenizi 4 adımda dönüştürsün.</p>
                        </div>

                        {/* Step 1 Text */}
                        <motion.div style={{ opacity: step1Opacity, x: useTransform(step1Opacity, [0, 1], [-20, 0]) }}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center font-bold">1</div>
                                <h3 className="text-2xl font-bold text-white">Veri Analitiği & İçgörü</h3>
                            </div>
                            <p className="text-gray-400 pl-12 text-lg">LeadForge algoritmaları, hedef pazarınızdaki binlerce potansiyel müşteriyi analiz eder ve nitelikli lead listeleri oluşturur.</p>
                        </motion.div>

                        {/* Step 2 Text */}
                        <motion.div style={{ opacity: step2Opacity, x: useTransform(step2Opacity, [0, 1], [-20, 0]) }}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-8 h-8 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center font-bold">2</div>
                                <h3 className="text-2xl font-bold text-white">Entegrasyon & Kurulum</h3>
                            </div>
                            <p className="text-gray-400 pl-12 text-lg">Mevcut dijital varlıklarınız (Web, CRM, Sosyal Medya) güvenli API protokolleri ile Reklamatic AI ekosistemine entegre edilir.</p>
                        </motion.div>

                        {/* Step 3 Text */}
                        <motion.div style={{ opacity: step3Opacity, x: useTransform(step3Opacity, [0, 1], [-20, 0]) }}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-8 h-8 bg-yellow-500/20 text-yellow-400 rounded-lg flex items-center justify-center font-bold">3</div>
                                <h3 className="text-2xl font-bold text-white">Yapay Zeka Otomasyonu</h3>
                            </div>
                            <p className="text-gray-400 pl-12 text-lg">ViralEngine ve SocialFlow devreye girer; içerik üretimi, dağıtımı ve müşteri etkileşimi tamamen otonom olarak yönetilir.</p>
                        </motion.div>

                        {/* Step 4 Text */}
                        <motion.div style={{ opacity: step4Opacity, x: useTransform(step4Opacity, [0, 1], [-20, 0]) }}>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-8 h-8 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center font-bold">4</div>
                                <h3 className="text-2xl font-bold text-white">Büyüme & Raporlama</h3>
                            </div>
                            <p className="text-gray-400 pl-12 text-lg">AgendaBot ile kesinleşen randevuları ve artan ciro grafiklerini yönetim panelinizden anlık olarak takip edersiniz.</p>
                        </motion.div>

                    </div>

                </div>
            </div>
        </div>
    );
}
