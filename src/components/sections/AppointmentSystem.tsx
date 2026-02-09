
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar as CalendarIcon, MessageSquare, CheckCircle, Smartphone, AlertCircle } from 'lucide-react';
import { useRef, useEffect } from 'react';

export function AppointmentSystem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress to steps (0 to 4)
    // 0-20%: Intro
    // 20-40%: Step 1 (Price Ask)
    // 40-60%: Step 2 (Busy 13:00)
    // 60-80%: Step 3 (Suggest 14:00)
    // 80-100%: Step 4 (Confirm)
    const opacityStep1 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const opacityStep2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const opacityStep3 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
    const opacityStep4 = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

    // Calendar States
    const busySlotOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const confirmedSlotOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0.5, 1]);
    const confirmedSlotScale = useTransform(scrollYProgress, [0.7, 0.8], [1, 1.05]);
    const confirmedSlotColor = useTransform(scrollYProgress, [0.7, 0.8], ["rgba(39, 39, 42, 0.5)", "rgba(34, 197, 94, 0.1)"]); // zinc-800 to green-500/10

    // Auto-scroll chat logic (visual only)
    const chatContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [scrollYProgress]); // Trigger on scroll updates slightly hacky but works for frame-by-frame

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-zinc-950">

            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-3xl animate-pulse"></div>

                <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">

                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                        className="absolute top-32 left-0 w-full text-center z-20 pointer-events-none"
                    >
                        <div className="inline-flex flex-col items-center animate-bounce">
                            <span className="text-gray-500 text-sm mb-2">Canlı Demoyu Görmek İçin Kaydırın</span>
                            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
                        </div>
                    </motion.div>

                    <div className="text-center max-w-4xl mx-auto mb-8 absolute top-10 w-full left-0 z-20 md:relative md:top-0 md:mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            AgendaBot <span className="text-purple-500">AI</span>
                        </h2>
                        <p className="text-gray-400 hidden md:block">
                            Siz sadece aşağı kaydırın, yapay zeka randevuyu nasıl yönetiyor izleyin.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-6 max-w-6xl mx-auto h-[60vh] md:h-[600px] w-full items-stretch">

                        {/* SCROLL-DRIVEN CHAT */}
                        <div className="lg:col-span-7 bg-black border border-zinc-800 rounded-[2rem] flex flex-col relative overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="bg-zinc-900/90 p-4 md:p-6 flex items-center justify-between backdrop-blur-md border-b border-white/5 z-20">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                                            <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-900 rounded-full"></div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-base md:text-lg">Asistan AI</div>
                                        <div className="text-xs text-green-400">Çevrimiçi</div>
                                    </div>
                                </div>
                            </div>

                            {/* Messages Layer */}
                            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 relative z-10 scroll-smooth pb-20">

                                {/* Static Greeting */}
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 bg-blue-600">
                                        <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </div>
                                    <div className="p-3 md:p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed bg-blue-600/10 border border-blue-500/20 text-blue-100 rounded-tl-none">
                                        Merhaba! Kliniğimize hoş geldiniz. Size nasıl yardımcı olabilirim?
                                    </div>
                                </div>

                                {/* Step 1: User asks price */}
                                <motion.div style={{ opacity: opacityStep1 }} className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 bg-zinc-700">
                                        <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                                    </div>
                                    <div className="p-3 md:p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed bg-zinc-800 text-white rounded-tr-none">
                                        Botoks fiyatları nedir?
                                    </div>
                                </motion.div>

                                {/* Step 2: Bot Reply & Ask Time */}
                                <motion.div style={{ opacity: opacityStep2 }} className="flex gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 bg-blue-600">
                                        <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </div>
                                    <div className="p-3 md:p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed bg-blue-600/10 border border-blue-500/20 text-blue-100 rounded-tl-none">
                                        Botoks işlemi 2500₺'dir. Yarın 13:00 uygun mudur?
                                    </div>
                                </motion.div>

                                {/* Step 3: Conflict Alert */}
                                <motion.div style={{ opacity: opacityStep3 }} className="flex gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 bg-red-600">
                                        <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </div>
                                    <div className="p-3 md:p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed bg-red-900/20 border border-red-500/30 text-red-200 rounded-tl-none">
                                        Pardon, şimdi kontrol ettim, 13:00 doluymuş! <br />
                                        Ancak 14:00 boş. Sizin için ayırayım mı?
                                    </div>
                                </motion.div>

                                {/* Step 4: Final Confirm */}
                                <motion.div style={{ opacity: opacityStep4 }} className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 bg-green-600">
                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </div>
                                    <div className="p-3 md:p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed bg-green-600 text-white rounded-tr-none font-bold shadow-lg shadow-green-900/50">
                                        Evet, 14:00 harika olur!
                                    </div>
                                </motion.div>

                            </div>
                        </div>

                        {/* SCROLL-DRIVEN CALENDAR */}
                        <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 relative flex flex-col h-full">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                                        <CalendarIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="font-bold text-white">Google Takvim</span>
                                </div>
                            </div>

                            <div className="space-y-4 relative flex-1">
                                {/* 13:00 Row (Attempts to book -> Fails) */}
                                <motion.div
                                    style={{ opacity: busySlotOpacity }}
                                    className="p-4 rounded-xl border-l-4 border-red-500 bg-red-500/10 flex justify-between items-center"
                                >
                                    <div>
                                        <span className="block font-bold text-red-400">13:00</span>
                                        <span className="text-xs text-gray-400">Dr. Ahmet</span>
                                    </div>
                                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded font-bold">DOLU</span>
                                </motion.div>

                                {/* 14:00 Row (Suggestion -> Success) */}
                                <motion.div
                                    style={{
                                        backgroundColor: confirmedSlotColor,
                                        scale: confirmedSlotScale,
                                        opacity: confirmedSlotOpacity
                                    }}
                                    className="p-4 rounded-xl border-l-4 border-green-500 flex justify-between items-center transition-colors"
                                >
                                    <div>
                                        <span className="block font-bold text-green-400">14:00</span>
                                        <span className="text-xs text-gray-500">Dr. Ahmet</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded font-bold flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3" /> REZERVE
                                        </span>
                                    </div>
                                </motion.div>

                                {/* 15:00 Row (Empty) */}
                                <div className="p-4 rounded-xl border-l-4 border-zinc-700 bg-black/40 flex justify-between items-center opacity-50">
                                    <span className="text-gray-500 font-bold">15:00</span>
                                    <span className="text-xs text-gray-600">Boş</span>
                                </div>
                            </div>

                            {/* Static Log */}
                            <div className="mt-auto bg-black rounded-xl p-4 font-mono text-[10px] text-zinc-500 h-32 overflow-hidden shadow-inner hidden md:block">
                                <div>[SYSTEM] Calendar Watcher Active...</div>
                                <motion.div style={{ opacity: busySlotOpacity }} className="text-red-400">[ALERT] 13:00 Slot Requested but BUSY.</motion.div>
                                <motion.div style={{ opacity: opacityStep3 }} className="text-yellow-400">{'>'} AI Suggesting alternative: 14:00...</motion.div>
                                <motion.div style={{ opacity: opacityStep4 }} className="text-green-400 text-xs bg-green-900/20 p-1 mt-2">{'>'} CONFIRMED. Event Created #99201.</motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
