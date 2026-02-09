import { motion } from 'framer-motion';
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export function WebSolutions() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-6">
                                <Globe className="w-3 h-3" />
                                <span className="tracking-wider">DİJİTAL ALTYAPI ÇÖZÜMLERİ</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                                Kurumsal Kimliğinizi <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">İnternete Taşıyın.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Yapay zeka otomasyon sistemlerimiz ile tam entegre çalışan, modern ve yüksek performanslı web sitenizi kuruyoruz.
                                Sadece bir web sitesi değil, satış huninizin merkezi olacak bir dijital varlık inşa ediyoruz.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Ücretsiz 1 Yıl Hosting</h4>
                                    <p className="text-gray-500 text-sm">Yüksek hızlı, güvenli ve kesintisiz sunucu altyapısı ilk yıl bizden.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">500 TL Domain Desteği</h4>
                                    <p className="text-gray-500 text-sm">Kurumsal alan adınızı tescil etmeniz için finansal destek sağlıyoruz.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Tam Entegrasyon</h4>
                                    <p className="text-gray-500 text-sm">LeadForge ve AgendaBot ile %100 uyumlu altyapı.</p>
                                </div>
                            </div>
                        </div>

                        <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                            <span>Hemen Başvurun</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Visual Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] bg-zinc-900/50 rounded-[2rem] border border-zinc-800 overflow-hidden flex items-center justify-center"
                    >
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

                        <div className="relative z-10 flex flex-col items-center gap-8">
                            {/* Server Icons */}
                            <div className="flex gap-4">
                                <motion.div
                                    animate={{ height: [60, 80, 60] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="w-16 bg-zinc-800 border-t-2 border-blue-500 rounded-lg flex flex-col gap-2 p-2 shadow-lg shadow-blue-500/10"
                                >
                                    <div className="w-full h-1 bg-blue-500/30 rounded-full animate-pulse"></div>
                                    <div className="w-1/2 h-1 bg-blue-500/30 rounded-full animate-pulse delay-75"></div>
                                    <div className="w-3/4 h-1 bg-blue-500/30 rounded-full animate-pulse delay-150"></div>
                                </motion.div>
                                <motion.div
                                    animate={{ height: [80, 60, 80] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                                    className="w-16 bg-zinc-800 border-t-2 border-cyan-500 rounded-lg flex flex-col gap-2 p-2 shadow-lg shadow-cyan-500/10"
                                >
                                    <div className="w-full h-1 bg-cyan-500/30 rounded-full animate-pulse"></div>
                                    <div className="w-3/4 h-1 bg-cyan-500/30 rounded-full animate-pulse delay-75"></div>
                                </motion.div>
                            </div>

                            {/* Globe & Connections */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                                <Globe className="w-24 h-24 text-white relative z-10 animate-[spin_10s_linear_infinite]" strokeWidth={1} />

                                {/* Orbiting Particles */}
                                <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
                                    <div className="absolute -top-2 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
                                </div>
                            </div>

                            <div className="bg-zinc-950/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-mono text-gray-300">SYSTEM STATUS: ONLINE</span>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
