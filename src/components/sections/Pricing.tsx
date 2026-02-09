
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

const plans = [
    {
        name: "Başlangıç",
        price: "2.500₺",
        period: "/ay",
        desc: "Küçük işletmeler ve yeni başlayanlar için temel otomasyon araçları.",
        features: [
            { name: "Google Maps Müşteri Bulma (Limitli)", included: true },
            { name: "Excel Veri Çıktısı", included: true },
            { name: "Manuel WhatsApp Gönderimi", included: true },
            { name: "Otomatik Yanıtlayıcı", included: false },
            { name: "Randevu Takvim Entegrasyonu", included: false },
        ]
    },
    {
        name: "Pro Büyüme",
        price: "5.000₺",
        period: "/ay",
        isPopular: true,
        desc: "Hızlı büyümek isteyen klinikler ve hizmet işletmeleri için.",
        features: [
            { name: "Google Maps Sınırsız Tarama", included: true },
            { name: "Otomatik WhatsApp Video Gönderimi", included: true },
            { name: "Akıllı Chatbot (7/24 Yanıt)", included: true },
            { name: "Instagram DM Otomasyonu", included: true },
            { name: "Basit Randevu Yönetimi", included: true },
        ]
    },
    {
        name: "Enterprise",
        price: "Özel Teklif",
        period: "",
        desc: "Zincir işletmeler ve detaylı CRM entegrasyonu gerektirenler için.",
        features: [
            { name: "Tüm Pro Özellikleri", included: true },
            { name: "Özel Entegrasyon (CRM/ERP)", included: true },
            { name: "Özel Müşteri Temsilcisi", included: true },
            { name: "Gelişmiş Raporlama & Analiz", included: true },
            { name: "SLA Destek Garantisi", included: true },
        ]
    }
];

export function Pricing() {
    const [annual, setAnnual] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-black relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Sizin İçin En Uygun <span className="text-purple-500">Planı Seçin</span>
                    </motion.h2>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>Aylık</span>
                        <button
                            onClick={() => setAnnual(!annual)}
                            className="w-14 h-8 bg-zinc-800 rounded-full p-1 relative transition-colors hover:bg-zinc-700"
                        >
                            <motion.div
                                animate={{ x: annual ? 24 : 0 }}
                                className="w-6 h-6 bg-blue-500 rounded-full shadow-lg"
                            />
                        </button>
                        <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-gray-500'}`}>
                            Yıllık <span className="text-blue-500 text-xs ml-1">(%20 İndirim)</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative bg-zinc-900/50 backdrop-blur-xl border ${plan.isPopular ? 'border-blue-500' : 'border-white/10'} rounded-3xl p-8 flex flex-col`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-blue-900/50">
                                    En Popüler
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm h-10">{plan.desc}</p>
                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-500">{plan.period}</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3">
                                        {feature.included ? (
                                            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                                <Check className="w-3 h-3 text-blue-400" />
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                                <X className="w-3 h-3 text-zinc-700" />
                                            </div>
                                        )}
                                        <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}`}>
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                                Hemen Başla
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
