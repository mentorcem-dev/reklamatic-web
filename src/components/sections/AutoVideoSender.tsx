
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Users, UploadCloud, Image as ImageIcon, Type, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export function AutoVideoSender() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // PHASES
    // 0.0 - 0.3: INPUTS -> AI BRAIN (Text + Image merge)
    // 0.3 - 0.6: AI BRAIN -> CLOUD (Video Created)
    // 0.6 - 1.0: CLOUD -> SOCIAL APPS (Distribution)

    // -- Phase 1: Inputs
    const inputOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const inputScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
    const inputY = useTransform(scrollYProgress, [0, 0.2], [0, 100]); // Move into brain

    // -- Phase 2: Processing visual
    const brainScale = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [1, 1.2, 1]);
    const brainGlow = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

    // -- Phase 3: Video File Movement
    // 0.3: Starts at Brain center
    // 0.6: Arrives at Cloud center
    const fileOpacity = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
    const fileX = useTransform(scrollYProgress, [0.3, 0.6], [0, 200]); // Moves right to cloud
    const fileY = useTransform(scrollYProgress, [0.3, 0.6], [0, -50]);
    const fileScale = useTransform(scrollYProgress, [0.3, 0.6], [0.5, 1]);

    // -- Phase 4: Distribution Lines & Icons
    // 0.6: Cloud Active
    // 0.8: Icons Appear
    // Extended range: Start connectors earlier (0.55) and keep badges visible longer
    const connectorLength = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
    const socialIconsScale = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
    const uploadedBadgeOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);


    return (
        <div ref={containerRef} className="relative h-[300vh] bg-black">

            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Helper Scroll Hint */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center"
                >
                    <p className="text-gray-500 text-xs mb-2 animate-pulse">Video Sürecini İzlemek İçin Kaydırın</p>
                    <div className="w-1 h-8 bg-zinc-800 mx-auto rounded-full overflow-hidden">
                        <div className="w-full h-1/2 bg-green-500 animate-[scrollDown_1.5s_infinite]"></div>
                    </div>
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: VISUAL STAGE */}
                    <div className="relative h-[500px] w-full bg-zinc-900/50 rounded-3xl border border-zinc-800 overflow-hidden">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                        {/* --- 1. AI GENERATION STATION (Left) --- */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-10 md:left-20 z-10 flex flex-col items-center">

                            {/* Inputs */}
                            <motion.div style={{ opacity: inputOpacity, scale: inputScale, y: inputY }} className="absolute -top-32 flex gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700">
                                        <Type className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <span className="text-[10px] text-gray-500">Metin</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700">
                                        <ImageIcon className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <span className="text-[10px] text-gray-500">Görsel</span>
                                </div>
                            </motion.div>

                            {/* The Brain */}
                            <motion.div style={{ scale: brainScale }} className="relative w-24 h-24 bg-black border-2 border-zinc-700 rounded-2xl flex items-center justify-center shadow-2xl z-20">
                                <Sparkles className="w-10 h-10 text-purple-500" />
                                <motion.div style={{ opacity: brainGlow }} className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full"></motion.div>
                                <div className="absolute -bottom-6 text-xs text-purple-400 font-bold">AI ENGINE</div>
                            </motion.div>
                        </div>

                        {/* --- 2. THE VIDEO FILE (Moving Actor) --- */}
                        <motion.div
                            style={{
                                opacity: fileOpacity,
                                x: fileX,
                                y: fileY,
                                scale: fileScale
                            }}
                            className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 -translate-x-1/2 z-30 pointer-events-none"
                        >
                            <div className="w-16 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center transform -rotate-6 border border-white/20">
                                <Play className="w-8 h-8 text-white fill-white" />
                            </div>
                        </motion.div>

                        {/* --- 3. CLOUD HUB (Center Right) --- */}
                        <div className="absolute top-1/2 -translate-y-1/2 right-10 md:right-32 z-10">
                            <div className="w-32 h-32 bg-zinc-900 rounded-full border border-zinc-600 flex items-center justify-center relative">
                                <UploadCloud className="w-12 h-12 text-blue-500" />
                                <div className="absolute -bottom-8 text-xs text-gray-500 font-mono text-center w-full">UPLOAD<br />SERVER</div>

                                {/* Connecting Lines to Apps */}
                                <svg className="absolute top-1/2 left-1/2 overflow-visible w-[200px] h-[200px] -translate-y-1/2 -translate-x-1/2 pointer-events-none">
                                    {/* Top Right (IG) */}
                                    <motion.path
                                        d="M 20 0 Q 80 -80 140 -80"
                                        fill="none" stroke="#E1306C" strokeWidth="2"
                                        style={{ pathLength: connectorLength, opacity: connectorLength }}
                                    />
                                    {/* Right (TikTok) */}
                                    <motion.path
                                        d="M 20 0 Q 80 0 160 0"
                                        fill="none" stroke="#ffffff" strokeWidth="2"
                                        style={{ pathLength: connectorLength, opacity: connectorLength }}
                                    />
                                    {/* Bottom Right (YT) */}
                                    <motion.path
                                        d="M 20 0 Q 80 80 140 80"
                                        fill="none" stroke="#FF0000" strokeWidth="2"
                                        style={{ pathLength: connectorLength, opacity: connectorLength }}
                                    />
                                </svg>

                                {/* Social Icons - Adjusted to be closer/left-shifted */}
                                <motion.div
                                    style={{ scale: socialIconsScale }}
                                    className="absolute -top-[90px] -right-[90px] flex flex-col items-center"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="font-bold text-white text-xs">IG</span>
                                    </div>
                                    <motion.div style={{ opacity: uploadedBadgeOpacity }} className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full mt-1 whitespace-nowrap">Yüklendi</motion.div>
                                </motion.div>

                                <motion.div
                                    style={{ scale: socialIconsScale }}
                                    className="absolute top-1/2 -translate-y-1/2 -right-[110px] flex flex-col items-center"
                                >
                                    <div className="w-12 h-12 bg-black border border-zinc-700 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="font-bold text-white text-xs">TikTok</span>
                                    </div>
                                    <motion.div style={{ opacity: uploadedBadgeOpacity }} className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full mt-1 whitespace-nowrap">Yüklendi</motion.div>
                                </motion.div>

                                <motion.div
                                    style={{ scale: socialIconsScale }}
                                    className="absolute -bottom-[90px] -right-[90px] flex flex-col items-center"
                                >
                                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="font-bold text-white text-xs">YT</span>
                                    </div>
                                    <motion.div style={{ opacity: uploadedBadgeOpacity }} className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full mt-1 whitespace-nowrap">Yüklendi</motion.div>
                                </motion.div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT: TEXT CONTENT (Syncs with scroll) */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-4">
                                <Play className="w-3 h-3 fill-current" /> ViralEngine v4.0
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Tek Tıkla <br />
                                <span className="text-blue-500">Tüm Platformlarda</span> <br />
                                Yayındasınız.
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Hazırladığınız videoları aynı anda Instagram Reels, TikTok ve Youtube Shorts'a yükleyen tam otomatik sistem.
                            </p>
                        </div>
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.3, 1]), x: useTransform(scrollYProgress, [0, 0.3], [-20, 0]) }}
                            className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <Sparkles className="w-6 h-6 text-purple-500" />
                                <h3 className="text-xl font-bold text-white">1. Yapay Zeka Üretimi</h3>
                            </div>
                            <p className="text-gray-400">Sadece konu başlığını girin. Yapay zeka metinleri yazar, görselleri seçer ve videoyu kurgular.</p>
                        </motion.div>

                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0.3, 0.6], [0.3, 1]), x: useTransform(scrollYProgress, [0.3, 0.6], [-20, 0]) }}
                            className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <UploadCloud className="w-6 h-6 text-blue-500" />
                                <h3 className="text-xl font-bold text-white">2. Bulut Sunucuya Yükleme</h3>
                            </div>
                            <p className="text-gray-400">Oluşturulan videolar otomatik olarak güvenli bulut sunucusuna aktarılır ve optimize edilir.</p>
                        </motion.div>

                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0.6, 0.9], [0.3, 1]), x: useTransform(scrollYProgress, [0.6, 0.9], [-20, 0]) }}
                            className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <Users className="w-6 h-6 text-green-500" />
                                <h3 className="text-xl font-bold text-white">3. Çoklu Platform Paylaşımı</h3>
                            </div>
                            <p className="text-gray-400">Tek tıkla Instagram Reels, TikTok ve YouTube Shorts hesaplarınıza aynı anda paylaşılır.</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
