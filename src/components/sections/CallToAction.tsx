
import { motion } from 'framer-motion';
import { CheckCircle2, User, Building2, Phone, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function CallToAction() {
    const [step, setStep] = useState(1);

    return (
        <section className="relative py-24 bg-black overflow-hidden" id="contact">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Persuasive Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Geleceği <br />
                            <span className="text-blue-500">Bugün İnşa Edin.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-8 max-w-lg">
                            İşletmenizi yapay zeka devrimine hazırlayın. Formu doldurun, size özel otomasyon mimarisini birlikte kurgulayalım.
                        </p>

                        {/* Process Steps List */}
                        <div className="space-y-6">
                            {[
                                { title: 'Başvuru', desc: 'Kurumsal ihtiyaç analizi için formu doldurun.' },
                                { title: 'Veri Analitiği', desc: 'AI algoritmaları pazar potansiyelinizi hesaplasın.' },
                                { title: 'Sistem Entegrasyonu', desc: 'Size özel demoyu canlı ortamda deneyimleyin.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center group">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step > i ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                                        {step > i ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                                    </div>
                                    <div>
                                        <h4 className={`font-bold transition-colors ${step > i ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                    {i < 2 && <div className="h-8 w-px bg-gray-800 absolute ml-5 translate-y-10" />}
                                </div>
                            ))}
                        </div>

                        {/* Social Proof Mini */}
                        <div className="mt-12 p-4 bg-zinc-900/50 rounded-2xl border border-white/5 flex items-center gap-4 max-w-sm">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-500 border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">U{i}</div>
                                ))}
                            </div>
                            <div className="text-xs text-gray-400">
                                <span className="text-white font-bold block">+120 Kurumsal Firma</span>
                                Reklamatic AI altyapısını kullanıyor
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden shadow-2xl"
                    >
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>

                        <h3 className="text-2xl font-bold text-white mb-6 relative">Demo Başvurusu</h3>

                        <form className="space-y-4 relative" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Ad Soyad</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                                        <input type="text" placeholder="Örn: Ahmet Yılmaz" className="w-full bg-black/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 transition-colors outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Firma Adı</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                                        <input type="text" placeholder="Örn: Yılmaz İnşaat" className="w-full bg-black/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 transition-colors outline-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Telefon</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                                    <input type="tel" placeholder="05XX XXX XX XX" className="w-full bg-black/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 transition-colors outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">E-Posta</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                                    <input type="email" placeholder="ahmet@sirket.com" className="w-full bg-black/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 transition-colors outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Hangi Çözümlerle İlgileniyorsunuz?</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['LeadForge (Müşteri)', 'ViralEngine (Video)', 'AgendaBot (Randevu)', 'SocialFlow (Sosyal)'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-2 bg-black/30 p-3 rounded-lg border border-gray-800 cursor-pointer hover:border-gray-600 transition-colors">
                                            <input type="checkbox" className="accent-blue-500 w-4 h-4" />
                                            <span className="text-xs text-gray-300 font-medium">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-6 shadow-lg shadow-blue-900/20"
                            >
                                Ücretsiz Demo Planla <ArrowRight className="w-5 h-5" />
                            </button>

                            <p className="text-center text-xs text-gray-500 mt-4">
                                Kişisel verileriniz KVKK kapsamında korunmaktadır.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
