"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// Dynamic Mock Data Generator
const generateResults = (query, location) => {
    const city = location || "İstanbul";
    const sector = query || "İşletme";
    const districts = ["Merkez", "Çarşı", "Sanayi", "Cadde", "Bulvar"];

    return Array.from({ length: 8 }).map((_, i) => ({
        name: `${sector} ${["Dünyası", "Merkezi", "Noktası", "Global", "Plus"][i % 5]}`,
        address: `${districts[i % districts.length]}, ${city}`,
        phone: `05${Math.floor(Math.random() * 899) + 100} ${Math.floor(Math.random() * 899) + 100} ${Math.floor(Math.random() * 89) + 10}`,
        website: `www.${sector.toLowerCase().replace(/[^a-z]/g, '')}${i + 1}.com`,
        rating: (4 + Math.random()).toFixed(1),
        reviews: Math.floor(Math.random() * 500) + 10
    }));
};

const TESTIMONIALS = [
    { name: "Ahmet Yılmaz", role: "Emlak Ofisi Sahibi", text: "Eskiden tek tek Google Maps'ten numara toplardım. BULUR ile 10 dakikada tüm Ankara'daki satılık mülk sahiplerine ulaştım.", avatar: "https://i.pravatar.cc/150?u=a042581f4e290260241" },
    { name: "Ayşe Kaya", role: "Diş Kliniği Müdürü", text: "Yeni kliniğimiz için bölgedeki potansiyel müşteri kitlesini analiz etmek istiyorduk. Nokta atışı veriler sağladı.", avatar: "https://i.pravatar.cc/150?u=a042581f4e290260242" },
    { name: "Mehmet Demir", role: "Toptancı", text: "Bakkal ve marketlere ulaşmak hiç bu kadar kolay olmamıştı. Satış ekibim artık veri aramakla değil, satış yapmakla ilgileniyor.", avatar: "https://i.pravatar.cc/150?u=a042581f4e290260243" },
    { name: "Zeynep Çelik", role: "Dijital Ajans Başkanı", text: "Seo çalışmaları için çok iyi.", avatar: "https://i.pravatar.cc/150?u=a042581f4e290260244" }
];

const PACKAGES = [
    { name: "Esnaf Paketi", count: 200, price: 500, features: ["200 Doğrulanmış Veri", "Excel Listesi", "Otomatik Email Gönderimi"], color: "blue" },
    { name: "Kobi Paketi", count: 1000, price: 1500, features: ["1000 Doğrulanmış Veri", "Detaylı Analiz", "Öncelikli Teslimat", "Whatsapp Desteği"], popular: true, color: "red" },
    { name: "Patron Paketi", count: 5000, price: 5000, features: ["5000+ Veri", "API Erişimi", "CRM Entegrasyonu", "Özel Danışman"], color: "green" },
];

const AUTO_PACKAGES = [
    { name: "Başlangıç Otomasyonu", price: "25.000", features: ["Günde 50 Kişiye Erişim", "1 Hat Bağlantısı", "Otomatik Mesaj Gönderimi", "Raporlama Paneli"], icon: "🚀" },
    { name: "Profesyonel Sistem", price: "35.000", features: ["Günde 150 Kişiye Erişim", "3 Telefon Numarası", "Akıllı Yanıt Sistemi", "Excel Entegrasyonu"], popular: true, icon: "⚡" },
    { name: "Business Empire", price: "40.000", features: ["Max Kapasite (5 Sim Kart)", "Günde 250+ Erişim", "Özel Danışman & Kurulum", "Garanti Destek"], icon: "👑" },
];



export default function ClientPage() {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [results, setResults] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPkg, setSelectedPkg] = useState(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const [n8nStatus, setN8nStatus] = useState('idle'); // idle, loading, success, error

    // REPLACE THIS WITH YOUR REAL N8N WEBHOOK URL
    const N8N_WEBHOOK_URL = "https://YOUR_N8N_WEBHOOK_URL_HERE";

    const handleSearch = () => {
        if (!query || !location) return;
        setStatus('loading');

        // Simulate scanning process
        setTimeout(() => {
            // Fake results count calculation
            const estimatedResults = Math.floor(Math.random() * (850 - 150 + 1)) + 150;

            // Instead of showing results, show a "Found!" message and scroll to pricing
            setStatus('complete'); // But we won't show the list

            // Trigger a modal or toast saying "Found X leads!" (Optional, or just scroll)
            // For now, let's scroll to pricing with a slight delay
            setTimeout(() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                    // Optional: Highlight the pricing section title
                }
            }, 500);

        }, 3000); // 3 seconds scanning simulation
    };

    const handlePackageSelect = (pkg) => {
        setSelectedPkg(pkg);
        setModalOpen(true);
    };

    const completeOrder = async () => {
        if (!email || !email.includes('@')) {
            alert("Lütfen geçerli bir e-posta adresi giriniz.");
            return;
        }

        setN8nStatus('loading');

        try {
            // Send data to N8N
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    package: selectedPkg,
                    searchQuery: { query, location },
                    timestamp: new Date().toISOString(),
                    type: 'lead_finder_order'
                })
            });

            if (response.ok) {
                setN8nStatus('success');
                // Close modal after 2 seconds
                setTimeout(() => {
                    setModalOpen(false);
                    setN8nStatus('idle');
                    setEmail('');
                    alert("Talebiniz alındı! Ödeme linki ve detaylar e-posta adresinize gönderildi.");
                }, 1000);
            } else {
                throw new Error('Webhook failed');
            }
        } catch (error) {
            console.error("N8N Error:", error);
            // Fallback for demo purposes if webhook fails or is not valid
            setN8nStatus('success');
            setTimeout(() => {
                setModalOpen(false);
                setN8nStatus('idle');
                setEmail('');
                alert("Talebiniz alındı! (Demo Modu: Webhook bağlantısı yapılmadı)");
            }, 1000);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans text-[#202124] selection:bg-blue-100">

            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#dadce0] px-6 h-16 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full"><circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="3" /><path d="M12 7v5l3 3" stroke="#DB4437" strokeWidth="3" strokeLinecap="round" /></svg>
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-xl font-bold tracking-tight text-[#5f6368] font-heading">bulur</span>
                        <span className="text-[10px] font-medium text-[#5f6368] opacity-60">by reklamatic.ai</span>
                    </div>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-[#5f6368]">
                    <Link href="/" className="hover:text-[#1a73e8] transition-colors">Ana Sayfa</Link>
                    <button onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1a73e8] transition-colors">Nasıl Çalışır?</button>
                    <button onClick={() => document.getElementById('tool-interface').scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1a73e8] transition-colors">Araç</button>
                    <button onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1a73e8] transition-colors">Paketler</button>
                    <button onClick={() => document.getElementById('automation').scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1a73e8] transition-colors">Otomasyon</button>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => document.getElementById('tool-interface').scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2 rounded-full bg-[#1a73e8] text-white font-medium hover:bg-[#1557b0] transition-colors shadow-blue-200 shadow-lg">Şimdi Bul</button>
                </div>
                <motion.div style={{ scaleX }} className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] origin-left" />
            </nav>

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
                            Canlı Veri Akışı Aktif
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black leading-[1] text-[#202124] tracking-tight">Müşterini <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#EA4335]">BULUR.</span></h1>
                        <p className="text-xl text-[#5f6368] leading-relaxed max-w-xl font-light">Sektörü yaz, şehri seç. Yapay zeka senin için Google Maps'i tarasın, binlerce potansiyel müşterinin telefonunu, adresini ve verisini Excel olarak mailine göndersin.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => document.getElementById('tool-interface').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-5 rounded-xl bg-[#1a73e8] text-white font-bold text-lg hover:bg-[#1557b0] hover:scale-105 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                Hemen Müşteri Bul
                            </button>
                            <button onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-5 rounded-xl border-2 border-[#dadce0] bg-white text-[#3c4043] font-bold text-lg hover:border-[#1a73e8] hover:text-[#1a73e8] transition-all">Sistem Nasıl Çalışır?</button>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden lg:block">
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <div className="ml-4 px-3 py-1 bg-white rounded-md text-xs text-gray-400 font-mono shadow-sm flex-1 text-center">bulur-ai-crawler.exe</div>
                            </div>
                            <div className="p-8 space-y-4">
                                <div className="flex items-center justify-between"><div className="h-8 w-32 bg-gray-100 rounded animate-pulse"></div><div className="h-8 w-12 bg-blue-100 rounded animate-pulse"></div></div>
                                <div className="space-y-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                            <div className="w-10 h-10 rounded bg-gray-200 animate-pulse flex-shrink-0"></div>
                                            <div className="flex-1 space-y-2"><div className="h-3 w-3/4 bg-gray-200 rounded animate-pulse"></div><div className="h-2 w-1/2 bg-gray-100 rounded animate-pulse"></div></div>
                                            <div className="hidden md:block"><div className="h-6 w-20 bg-green-100/50 rounded-full text-green-600 text-xs flex items-center justify-center font-bold">ONAYLI</div></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Stats Bar */}
            <div className="w-full border-y border-gray-100 bg-gray-50/50 backdrop-blur-sm relative z-20">
                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "İşletme Verisi", value: "85M+" },
                        { label: "Mutlu Müşteri", value: "5,000+" },
                        { label: "Doğruluk Oranı", value: "%98" },
                        { label: "Günlük Sorgu", value: "150K+" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group cursor-default">
                            <div className="text-3xl md:text-4xl font-black text-[#202124] group-hover:text-[#1a73e8] transition-colors font-display mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Strategy Choice Section (NEW) */}
            <section className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-50 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-[#202124] mb-4">Nasıl Büyümek İstersin?</h2>
                        <p className="text-[#5f6368] text-lg">İhtiyacına en uygun çalışma modelini seç.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Option 1: Manual Data */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            onClick={() => document.getElementById('tool-interface').scrollIntoView({ behavior: 'smooth' })}
                            className="group cursor-pointer p-8 rounded-3xl border border-gray-200 bg-white hover:border-[#1a73e8] hover:shadow-xl transition-all relative overflow-hidden text-center md:text-left"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1a73e8] flex-shrink-0 border border-blue-100 group-hover:bg-[#1a73e8] group-hover:text-white transition-colors">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">Veri Bul & İndir</h3>
                                    <p className="text-[#5f6368] mb-4 text-sm leading-relaxed">Müşteri verilerini kendin bul, Excel olarak indir ve kendi ekibinle yönet.</p>
                                    <span className="text-[#1a73e8] font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all bg-blue-50 px-4 py-2 rounded-lg group-hover:bg-[#1a73e8] group-hover:text-white">Hemen Başla <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Option 2: Automation */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            onClick={() => document.getElementById('automation').scrollIntoView({ behavior: 'smooth' })}
                            className="group cursor-pointer p-8 rounded-3xl border-2 border-[#e8f0fe] bg-[#f8f9fa] hover:border-[#34A853] hover:shadow-xl transition-all relative overflow-hidden text-center md:text-left"
                        >
                            <div className="absolute top-4 right-4 bg-[#34A853] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm animate-pulse">ÖNERİLEN</div>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center text-[#34A853] flex-shrink-0 border border-green-100 group-hover:bg-[#34A853] group-hover:text-white transition-colors">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#202124] mb-2 group-hover:text-[#34A853] transition-colors">Otopilota Bağla</h3>
                                    <p className="text-[#5f6368] mb-4 text-sm leading-relaxed">Veri arama, mesaj atma ve randevu alma işini yapay zekaya devret.</p>
                                    <span className="text-[#34A853] font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all bg-green-50 px-4 py-2 rounded-lg group-hover:bg-[#34A853] group-hover:text-white">Otomasyonu Keşfet <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works - Vertical Timeline Design */}
            <section className="py-32 bg-gradient-to-b from-white to-gray-50" id="how-it-works">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1a73e8] border border-blue-100 font-bold text-sm tracking-wider uppercase mb-4"
                        >
                            3 Basit Adım
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-[#202124] mb-6"
                        >
                            Rakiplerinin Önüne Geç
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-[#5f6368] max-w-2xl mx-auto"
                        >
                            Karmaşık süreçler yok. Sadece arama yap ve sonuçları al.
                        </motion.p>
                    </div>

                    {/* Timeline Steps */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4285F4] via-[#EA4335] to-[#34A853] rounded-full -translate-x-1/2"></div>

                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-24"
                        >
                            {/* Content */}
                            <div className="md:text-right order-2 md:order-1">
                                <div className="inline-flex items-center gap-3 mb-4 md:flex-row-reverse">
                                    <span className="w-14 h-14 bg-[#4285F4] text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-500/30">1</span>
                                    <h3 className="text-3xl font-bold text-[#202124]">Arama Yap</h3>
                                </div>
                                <p className="text-lg text-[#5f6368] leading-relaxed max-w-md md:ml-auto">
                                    Sektörünü ve şehrini gir. Yapay zeka senin için tüm Google Maps veritabanını tarasın.
                                </p>
                            </div>
                            {/* Visual */}
                            <div className="order-1 md:order-2">
                                <motion.div
                                    whileHover={{ scale: 1.02, rotate: 1 }}
                                    className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 max-w-sm"
                                >
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 mb-4">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="text-gray-500">Emlak Ofisleri</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 mb-4">
                                        <svg className="w-5 h-5 text-[#EA4335]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                                        <span className="text-gray-500">İstanbul, Kadıköy</span>
                                    </div>
                                    <motion.button
                                        animate={{ scale: [1, 1.03, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="w-full py-4 bg-[#1a73e8] text-white font-bold rounded-xl shadow-lg shadow-blue-500/30"
                                    >
                                        Taramayı Başlat
                                    </motion.button>
                                </motion.div>
                            </div>
                            {/* Center Dot */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#4285F4] rounded-full border-4 border-white shadow-lg z-10"></div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-24"
                        >
                            {/* Visual */}
                            <div className="md:text-right">
                                <motion.div
                                    whileHover={{ scale: 1.02, rotate: -1 }}
                                    className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 max-w-sm md:ml-auto"
                                >
                                    <div className="p-4 border border-gray-100 rounded-xl mb-3 opacity-60">
                                        <div className="flex justify-between"><span className="text-gray-500 text-sm">Esnaf Paketi</span><span className="font-bold text-gray-700">500₺</span></div>
                                    </div>
                                    <div className="p-5 border-2 border-[#EA4335] rounded-xl bg-red-50/50 relative mb-3">
                                        <div className="absolute -top-3 right-4 bg-[#EA4335] text-white text-xs px-3 py-1 rounded-full font-bold">ÖNERİLEN</div>
                                        <div className="flex justify-between items-center"><span className="text-[#EA4335] font-bold">Kobi Paketi</span><span className="font-black text-[#EA4335] text-xl">1.500₺</span></div>
                                        <div className="text-xs text-gray-500 mt-1">1000 Adet Doğrulanmış Veri</div>
                                    </div>
                                    <div className="p-4 border border-gray-100 rounded-xl opacity-60">
                                        <div className="flex justify-between"><span className="text-gray-500 text-sm">Patron Paketi</span><span className="font-bold text-gray-700">5.000₺</span></div>
                                    </div>
                                </motion.div>
                            </div>
                            {/* Content */}
                            <div>
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <span className="w-14 h-14 bg-[#EA4335] text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-red-500/30">2</span>
                                    <h3 className="text-3xl font-bold text-[#202124]">Paket Seç</h3>
                                </div>
                                <p className="text-lg text-[#5f6368] leading-relaxed max-w-md">
                                    İhtiyacın olan veri miktarını belirle. Esnaf, Kobi veya Patron paketlerinden bütçene uygun olanı seç.
                                </p>
                            </div>
                            {/* Center Dot */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#EA4335] rounded-full border-4 border-white shadow-lg z-10"></div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                        >
                            {/* Content */}
                            <div className="md:text-right order-2 md:order-1">
                                <div className="inline-flex items-center gap-3 mb-4 md:flex-row-reverse">
                                    <span className="w-14 h-14 bg-[#34A853] text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-green-500/30">3</span>
                                    <h3 className="text-3xl font-bold text-[#202124]">Mailine Gelsin</h3>
                                </div>
                                <p className="text-lg text-[#5f6368] leading-relaxed max-w-md md:ml-auto">
                                    Tüm liste Excel formatında, doğrulanmış numaralar ile birlikte saniyeler içinde e-posta adresine gelsin.
                                </p>
                            </div>
                            {/* Visual */}
                            <div className="order-1 md:order-2">
                                <motion.div
                                    whileHover={{ scale: 1.02, rotate: 1 }}
                                    className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 max-w-sm"
                                >
                                    <div className="flex items-center justify-center mb-6">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
                                        >
                                            <svg className="w-10 h-10 text-[#34A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </motion.div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 border border-gray-100">
                                        <div className="w-12 h-12 bg-[#34A853] rounded-lg flex items-center justify-center text-white font-bold text-xs">XLS</div>
                                        <div>
                                            <div className="font-bold text-gray-800 text-sm">musteri_listesi.xlsx</div>
                                            <div className="text-xs text-green-600">✓ Tamamlandı • 1.247 Kayıt</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            {/* Center Dot */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#34A853] rounded-full border-4 border-white shadow-lg z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Old Way vs BULUR Way Comparison (REDESIGNED WITH GOOGLE COLORS) */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1a73e8] border border-blue-100 font-bold text-sm tracking-wider uppercase mb-4"
                        >
                            Karşılaştırma
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-[#202124] mb-6"
                        >
                            Neden BULUR?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-[#5f6368]"
                        >
                            Manuel aramalar ve pahalı reklamlar bütçeni tüketiyor. Artık akıllı olma zamanı.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        {/* The Old Way - Red Theme */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-red-50 to-white p-8 md:p-12 rounded-3xl border-2 border-red-100 shadow-lg relative overflow-hidden group hover:shadow-2xl hover:border-[#EA4335] transition-all duration-500"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#EA4335] to-red-400"></div>
                            <h3 className="text-2xl font-bold text-[#EA4335] mb-8 flex items-center">
                                <span className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-2xl mr-4 text-2xl">❌</span>
                                Eski Yöntem
                            </h3>
                            <ul className="space-y-6">
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="flex items-start text-gray-700 text-lg"
                                >
                                    <span className="mr-4 mt-1 text-[#EA4335] text-xl">•</span>
                                    Google Haritalarda saatlerce süren <strong className="ml-1 text-gray-900 border-b-2 border-[#EA4335]/30">manuel arama</strong>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-start text-gray-700 text-lg"
                                >
                                    <span className="mr-4 mt-1 text-[#EA4335] text-xl">•</span>
                                    Güncel olmayan, kapanmış işletme numaraları
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-start text-gray-700 text-lg"
                                >
                                    <span className="mr-4 mt-1 text-[#EA4335] text-xl">•</span>
                                    Facebook/Instagram reklamlarına <strong className="ml-1 text-gray-900 border-b-2 border-[#EA4335]/30">servet ödemek</strong>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-start text-gray-700 text-lg"
                                >
                                    <span className="mr-4 mt-1 text-[#EA4335] text-xl">•</span>
                                    Düşük dönüşüm oranları ve boşa giden zaman
                                </motion.li>
                            </ul>
                        </motion.div>

                        {/* The BULUR Way - Blue/Green Theme */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-blue-100 relative overflow-hidden group hover:scale-[1.02] hover:border-[#4285F4] transition-all duration-500"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4285F4] via-[#F4B400] to-[#34A853]"></div>
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#4285F4] mb-8 flex items-center relative z-10">
                                <span className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-2xl mr-4 text-2xl border-2 border-[#4285F4]/20">✅</span>
                                BULUR Yöntemi
                            </h3>
                            <ul className="space-y-6 relative z-10">
                                <motion.li
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="flex items-start text-gray-700 text-lg"
                                >
                                    <span className="mr-4 mt-1 text-[#4285F4] text-xl font-bold">✓</span>
                                    Tek tıkla sektör ve şehir bazlı <strong className="ml-1 text-[#4285F4]">binlerce veri</strong>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-start text-gray-700 text-lg"
                                >
                                    <span className="mr-4 mt-1 text-[#34A853] text-xl font-bold">✓</span>
                                    <strong className="bg-green-100 text-[#34A853] px-2 py-0.5 rounded">%98 Doğruluk</strong> payı ile en güncel bilgiler
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-start text-gray-700 text-lg"
                                >
                                    <span className="mr-4 mt-1 text-[#F4B400] text-xl font-bold">✓</span>
                                    Sıfır reklam maliyeti ile doğrudan müşteriye ulaşım
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-start text-gray-700 text-lg"
                                >
                                    <span className="mr-4 mt-1 text-[#4285F4] text-xl font-bold">✓</span>
                                    TCPA ve KVKK uyumlu yasal veri toplama
                                </motion.li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Main Feature / Tool Interface (WITH ANIMATIONS) */}
            <section id="tool-interface" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#34A853] border border-green-100 font-bold text-sm tracking-wider uppercase mb-4">
                            Canlı Arama
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-4">Kimi Arıyoruz?</h2>
                        <p className="text-[#5f6368] text-lg max-w-2xl mx-auto">Hedef kitlenizi tanımlayın, yapay zeka sizin için Google Maps veritabanını tarayarak en güncel iletişim bilgilerini listelesin.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-2xl border border-[#dadce0] overflow-hidden flex flex-col lg:flex-row min-h-[700px]"
                    >
                        <div className="w-full lg:w-96 bg-gray-50 border-r border-[#dadce0] p-8 flex flex-col gap-6 relative z-10">
                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm font-bold text-[#3c4043] block mb-2 uppercase tracking-wide">Sektör veya İşletme Tipi</label>
                                    <div className="relative group">
                                        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full px-5 py-4 bg-white border border-[#dadce0] rounded-xl text-[#202124] placeholder-gray-400 focus:ring-4 focus:ring-blue-500/10 focus:border-[#1a73e8] outline-none transition-all pl-12 text-lg shadow-sm group-hover:shadow-md" placeholder="Örn: Emlak Ofisleri" />
                                        <svg className="w-6 h-6 absolute left-4 top-4 text-gray-400 group-focus-within:text-[#1a73e8] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-[#3c4043] block mb-2 uppercase tracking-wide">Hedef Konum</label>
                                    <div className="relative group">
                                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-5 py-4 bg-white border border-[#dadce0] rounded-xl text-[#202124] placeholder-gray-400 focus:ring-4 focus:ring-blue-500/10 focus:border-[#1a73e8] outline-none transition-all pl-12 text-lg shadow-sm group-hover:shadow-md" placeholder="Örn: İzmir, Karşıyaka" />
                                        <svg className="w-6 h-6 absolute left-4 top-4 text-gray-400 group-focus-within:text-[#EA4335] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <h4 className="font-bold text-blue-800 text-sm mb-1 flex items-center gap-2"> <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg> İpucu </h4>
                                <p className="text-xs text-blue-600 leading-relaxed">"Toptancı", "Güzellik Merkezi" veya "Avukat" gibi spesifik aramalar daha iyi sonuç verir.</p>
                            </div>
                            <button onClick={handleSearch} disabled={status === 'loading'} className="w-full py-4 bg-[#1a73e8] text-white font-bold text-lg rounded-xl hover:bg-[#1557b0] transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 mt-auto transform active:scale-95">
                                {status === 'loading' ? (<> <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> Veriler Taranıyor... </>) : (<> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> Analizi Başlat </>)}
                            </button>
                        </div>
                        <div className="flex-1 bg-white relative flex flex-col">
                            <div className="h-20 border-b border-[#dadce0] flex items-center justify-between px-8 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
                                <h3 className="font-bold text-[#202124] text-lg flex items-center gap-2"> <div className={`w-3 h-3 rounded-full ${status === 'complete' ? 'bg-green-500' : 'bg-gray-300'}`}></div> Sonuçlar </h3>
                                {results.length > 0 && (<button onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })} className="text-[#1a73e8] font-bold text-sm hover:underline flex items-center gap-1"> <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Tümünü Excel İndir </button>)}
                            </div>
                            <div className="flex-1 overflow-y-auto bg-white p-8 relative min-h-[400px]">
                                <AnimatePresence mode="wait">
                                    {status === 'loading' ? (
                                        <motion.div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <div className="w-32 h-32 relative mb-8"> <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div> <div className="absolute inset-0 border-4 border-[#1a73e8] rounded-full border-t-transparent animate-spin"></div> <div className="absolute inset-0 flex items-center justify-center"> <img src="/favicon.ico" className="w-12 h-12 opacity-50 grayscale" alt="" /> </div> </div>
                                            <h3 className="text-xl font-bold text-[#202124] mb-2">Google Veritabanı Taranıyor</h3>
                                        </motion.div>
                                    ) : results.length > 0 ? (
                                        <motion.div className="space-y-4">
                                            {results.map((item, i) => (
                                                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl border border-[#dadce0] hover:shadow-lg hover:border-[#1a73e8] transition-all group cursor-default">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xl uppercase"> {item.name.charAt(0)} </div>
                                                            <div> <h4 className="font-bold text-lg text-[#202124] group-hover:text-[#1a73e8] transition-colors">{item.name}</h4> <div className="flex items-center gap-2 text-sm text-[#5f6368]"> <span>{item.address}</span> </div> </div>
                                                        </div>
                                                        <div className="flex flex-col items-end gap-1"> <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center gap-1">Onaylı İşletme</span> <div className="text-xs text-gray-400">{item.reviews} Yorum • {item.rating} Puan</div> </div>
                                                    </div>
                                                    <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                                                        <div className="flex items-center gap-2 text-[#202124] bg-gray-50 p-2 rounded-lg"> <span className="font-mono font-medium">{item.phone}</span> </div>
                                                        <div className="flex items-center gap-2 text-[#202124] bg-gray-50 p-2 rounded-lg"> <span className="truncate">{item.website}</span> </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                            <div className="p-8 text-center bg-blue-50 border border-blue-100 rounded-2xl">
                                                <h4 className="text-xl font-bold text-[#1a73e8] mb-2">ve {Math.floor(Math.random() * 500) + 120} sonuç daha...</h4>
                                                <button onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-[#1a73e8] text-white rounded-lg font-bold hover:bg-[#1557b0] transition-colors">Paketleri İncele</button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                            <svg className="w-32 h-32 text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            <p className="text-2xl font-bold text-[#202124] mb-2">Arama Bekleniyor</p>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Section (Lead Finder Packages) */}
            <section id="pricing" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 translate-x-32"></div>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-5xl font-bold text-[#202124]">Müşteri Bulma Paketleri</h2>
                        <p className="text-[#5f6368] text-lg max-w-2xl mx-auto">Veriler doğrudan e-posta adresinize gönderilir.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {PACKAGES.map((pkg, i) => (
                            <motion.div key={i} whileHover={{ y: -10 }} className={`relative rounded-3xl border-2 ${pkg.popular ? 'border-[#EA4335] shadow-2xl shadow-red-500/10 scale-105 z-10 bg-white' : 'border-gray-100 bg-white shadow-xl hover:border-gray-200'} p-8 flex flex-col`}>
                                {pkg.popular && (<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EA4335] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">ÇOK SATAN</div>)}
                                <h3 className="text-2xl font-bold text-[#202124] mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline gap-1 mb-8"> <span className="text-5xl font-black tracking-tighter text-[#202124]">{pkg.price}₺</span> <span className="text-[#5f6368] font-medium">/tek seferlik</span> </div>
                                <ul className="space-y-4 mb-10 flex-1"> {pkg.features.map((feat, idx) => (<li key={idx} className="flex items-center gap-3 text-[#3c4043] font-medium"> <div className={`w-6 h-6 rounded-full bg-${pkg.color}-100 flex items-center justify-center text-${pkg.color}-600 flex-shrink-0`}> <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> </div> {feat} </li>))} </ul>
                                <button onClick={() => handlePackageSelect(pkg)} className={`w-full py-5 rounded-xl font-bold text-lg transition-all ${pkg.popular ? 'bg-[#EA4335] text-white hover:bg-[#d93025] shadow-lg shadow-red-500/30' : 'bg-[#f8f9fa] text-[#3c4043] hover:bg-[#1a73e8] hover:text-white border border-gray-200'}`}>Paketi Seç</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Automation Section (REDESIGNED - LIGHT THEME) */}
            <section id="automation" className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
                {/* Background Effects (Subtle & Light) */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-green-50/50 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#1a73e8] font-bold text-sm tracking-widest uppercase mb-6 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#1a73e8] animate-pulse"></span>
                            Otopilot Modu
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-[#202124]"
                        >
                            Veriyi Alıp Uğraşma. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#34A853]">Sistemi Otomatiğe Bağla.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-[#5f6368] max-w-3xl mx-auto leading-relaxed"
                        >
                            İstersen sadece veriyi indirip kendin ararsın. İstersen <strong className="text-[#202124] font-bold">BULUR Otomasyon</strong> ile yapay zekayı devreye sokarsın; o arar, o konuşur, o randevu alır.
                        </motion.p>
                    </div>

                    {/* 3-Step Process Flow (Light) */}
                    <div className="grid md:grid-cols-3 gap-12 mb-32 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-blue-200 to-gray-200 border-t border-dashed border-gray-300 z-0"></div>

                        {[
                            { title: "Veri Entegrasyonu", desc: "Toplanan veriler otomatik olarak CRM sistemine aktarılır ve sınıflandırılır.", icon: <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />, color: "blue" },
                            { title: "Akıllı İletişim", desc: "Yapay zeka, her müşteriye özel ve doğal bir dille WhatsApp üzerinden yazışmayı başlatır.", icon: <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />, color: "red" },
                            { title: "Sonuç & Raporlama", desc: "İlgilenen müşteriler randevuya dönüştürülür ve size anlık bildirim gönderilir.", icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />, color: "green" }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className={`w-24 h-24 rounded-3xl bg-white border-2 border-${step.color === 'blue' ? 'blue' : step.color === 'red' ? 'red' : 'green'}-100 flex items-center justify-center text-${step.color === 'blue' ? '#1a73e8' : step.color === 'red' ? '#EA4335' : '#34A853'} mb-6 shadow-xl shadow-${step.color}-100 group-hover:scale-110 group-hover:border-${step.color}-200 transition-all duration-300 relative`}>
                                    <svg className={`w-10 h-10 relative z-10 text-${step.color === 'blue' ? 'blue-600' : step.color === 'red' ? 'red-500' : 'green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">{step.icon}</svg>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-gray-400 font-bold flex items-center justify-center border-2 border-gray-100 shadow-sm text-sm">{i + 1}</div>
                                </div>
                                <h3 className="text-xl font-bold text-[#202124] mb-3">{step.title}</h3>
                                <p className="text-[#5f6368] leading-relaxed px-4">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Split Section: Chat Demo & Main Benefits */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

                        {/* Chat UI Mockup (Light & Clean) */}
                        <div className="order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative mx-auto max-w-[400px]"
                            >
                                {/* Phone Frame */}
                                <div className="absolute inset-0 bg-white rounded-[3rem] transform rotate-1 shadow-2xl border border-gray-100"></div>
                                <div className="relative bg-white rounded-[2.5rem] border-[8px] border-gray-50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden h-[600px] rotate-0">
                                    {/* Chat Header */}
                                    <div className="bg-[#f8f9fa] p-4 flex items-center gap-3 border-b border-gray-100 z-10 relative">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs shadow-sm">AI</div>
                                        <div>
                                            <div className="text-[#202124] font-bold text-sm">BULUR Asistan</div>
                                            <div className="text-green-600 text-xs flex items-center gap-1 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Çevrimiçi</div>
                                        </div>
                                    </div>

                                    {/* Chat Messages */}
                                    <div className="p-4 space-y-4 overflow-y-auto h-full pb-20 scrollbar-hide bg-[#fff] relative">
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                                        {[
                                            { type: 'out', text: "Merhaba, İzmir'deki emlak ofisiniz için müşteri portföyümüzü incelemek ister misiniz?", time: "14:30" },
                                            { type: 'in', text: "Merhaba, detayları alabilir miyim?", time: "14:31" },
                                            { type: 'out', text: "Tabii, 500 kişilik yatırımcı listesini iletiyorum. Müsait misiniz?", time: "14:32" },
                                            { type: 'in', text: "Evet lütfen gönderin.", time: "14:33" }
                                        ].map((msg, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: msg.type === 'out' ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.8 }}
                                                className={`flex ${msg.type === 'out' ? 'justify-end' : 'justify-start'} relative z-10`}
                                            >
                                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm border ${msg.type === 'out' ? 'bg-[#dcf8c6] text-[#111b21] rounded-tr-none border-[#dcf8c6]' : 'bg-white text-[#111b21] rounded-tl-none border-gray-100'}`}>
                                                    {msg.text}
                                                    <div className="text-[10px] text-gray-400 text-right mt-1 flex justify-end gap-1 items-center">{msg.time} {msg.type === 'out' && <span className="text-blue-500">✓✓</span>}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 3.5 }}
                                            className="flex justify-start relative z-10"
                                        >
                                            <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center h-9 w-14 justify-center border border-gray-100">
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Features List (Google Style) */}
                        <div className="order-1 lg:order-2 space-y-8">
                            <h3 className="text-4xl font-black text-[#202124] mb-6">Tam Otomatik <br /><span className="text-[#1a73e8]">Müşteri İletişimi</span></h3>
                            <div className="space-y-6">
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default group">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a73e8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a73e8] group-hover:text-white transition-colors shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                                    <div><h4 className="text-xl font-bold text-[#202124] mb-1">Günde 250+ Kişiye Erişim</h4><p className="text-[#5f6368]">Manuel olarak imkansız olan sayılara ulaşın. Sistem 7/24 sizin için çalışır.</p></div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default group">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EA4335] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EA4335] group-hover:text-white transition-colors shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg></div>
                                    <div><h4 className="text-xl font-bold text-[#202124] mb-1">Kişiselleştirilmiş Mesajlar</h4><p className="text-[#5f6368]">Sadece isim değil, sektöre ve ihtiyaca yönelik değişken mesaj şablonları.</p></div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default group">
                                    <div className="w-12 h-12 rounded-xl bg-green-50 text-[#34A853] flex items-center justify-center flex-shrink-0 group-hover:bg-[#34A853] group-hover:text-white transition-colors shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                                    <div><h4 className="text-xl font-bold text-[#202124] mb-1">Otomatik Randevu</h4><p className="text-[#5f6368]">Yapay zeka olumlu dönüşleri yakalar ve takviminize otomatik işler.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Pricing Cards (Light Theme Clean) */}
                    <div id="pricing" className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Başlangıç Otomasyonu",
                                price: "25.000",
                                features: ["Günde 50 Kişiye Erişim", "1 Hat Bağlantısı", "Otomatik Mesaj Gönderimi", "Raporlama Paneli"],
                                icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
                                color: "blue"
                            },
                            {
                                name: "Profesyonel Sistem",
                                price: "35.000",
                                features: ["Günde 150 Kişiye Erişim", "3 Telefon Numarası", "Akıllı Yanıt Sistemi", "Excel Entegrasyonu"],
                                popular: true,
                                icon: <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />,
                                color: "red"
                            },
                            {
                                name: "Business Empire",
                                price: "40.000",
                                features: ["Max Kapasite (5 Sim Kart)", "Günde 250+ Erişim", "Özel Danışman & Kurulum", "Garanti Destek"],
                                icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
                                color: "green"
                            },
                        ].map((pkg, i) => (
                            <div key={i} className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col ${pkg.popular ? 'bg-white border-[#EA4335] shadow-2xl shadow-red-500/10 scale-105 z-10' : 'bg-white border-gray-100 hover:border-[#1a73e8] hover:shadow-xl'}`}>
                                {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EA4335] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wide uppercase">En Popüler</div>}

                                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-${pkg.color === 'red' ? 'white' : pkg.color === 'blue' ? 'blue-600' : 'green-600'} bg-${pkg.color === 'red' ? 'red-500' : pkg.color === 'blue' ? 'blue-50' : 'green-50'}`}>
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">{pkg.icon}</svg>
                                </div>

                                <h3 className="text-xl font-bold text-[#202124] mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl font-black text-[#202124] tracking-tighter">{pkg.price}₺</span>
                                    <span className="text-[#5f6368] text-sm font-medium">/tek seferlik</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {pkg.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[#3c4043] text-sm font-medium">
                                            <div className={`w-5 h-5 rounded-full bg-${pkg.color === 'red' ? 'red' : pkg.color === 'blue' ? 'blue' : 'green'}-50 text-${pkg.color === 'red' ? 'red' : pkg.color === 'blue' ? 'blue' : 'green'}-600 flex items-center justify-center flex-shrink-0`}>✓</div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button onClick={() => { setSelectedPkg(pkg); setModalOpen(true); }} className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-[#EA4335] hover:bg-[#d93025] text-white shadow-lg shadow-red-500/30' : 'bg-gray-50 hover:bg-[#1a73e8] hover:text-white text-[#3c4043] border border-gray-200'}`}>
                                    Sistemi Kur
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info Bar */}
                    <div className="mt-20 pt-10 border-t border-gray-100 text-center">
                        <p className="text-[#5f6368] mb-4 font-medium">Özel çözümler ve kurumsal entegrasyon için bizimle iletişime geçin:</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                            <a href="mailto:info@reklamatic.ai" className="flex items-center gap-3 text-lg text-[#202124] font-bold hover:text-[#1a73e8] transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1a73e8] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                info@reklamatic.ai
                            </a>
                            <a href="tel:05302312947" className="flex items-center gap-3 text-lg text-[#202124] font-bold hover:text-[#1a73e8] transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-green-50 text-[#34A853] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                0530 231 29 47
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-24 bg-[#f8f9fa] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#202124] mb-4">Gerçek Sonuçlar</h2>
                        <p className="text-[#5f6368] text-lg">Binlerce işletme BULUR ile satışlarını katladı.</p>
                    </div>

                    {/* Chat Style Reviews */}
                    <div className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-3xl rounded-tl-none border border-gray-200 shadow-sm relative transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute -top-3 left-0 bg-[#f0f2f5] border border-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full shadow-sm font-bold flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Ahmet Y. - Emlak Danışmanı
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed pt-2">"Günde 2 saatimi haritadan numara toplamaya harcıyordum. BULUR ile 5 dakikada tüm Ankara emlakçılarını listeledim. İnanılmaz!"</p>
                            <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-3">
                                <div className="flex text-yellow-500 text-sm">★★★★★</div>
                                <span className="text-xs text-gray-400">09:42 · iPhone</span>
                            </div>
                        </div>

                        <div className="bg-[#e8f0fe] p-6 rounded-3xl rounded-tr-none border border-blue-100 shadow-sm relative transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute -top-3 right-0 bg-white border border-blue-100 text-[#1a73e8] text-xs px-3 py-1 rounded-full shadow-sm font-bold flex items-center gap-1">
                                Selin K. - Dijital Ajans <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            </div>
                            <p className="text-[#1f1f1f] text-lg leading-relaxed pt-2">"Reklam bütçemizi yarıya indirdik çünkü artık doğrudan potansiyel müşteriye ulaşıyoruz. Sistemin hızı ve doğruluğu şaşırtıcı."</p>
                            <div className="mt-4 flex items-center justify-between border-t border-blue-200/50 pt-3">
                                <span className="text-xs text-blue-400">14:02 · Web</span>
                                <div className="flex text-yellow-500 text-sm">★★★★★</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-[#dadce0]">
                                <div className="flex items-center gap-4 mb-6">
                                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-100" />
                                    <div><h4 className="font-bold text-[#202124]">{t.name}</h4><div className="text-xs text-[#5f6368] font-medium uppercase tracking-wide">{t.role}</div></div>
                                </div>
                                <div className="mb-4 flex text-yellow-400">{[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}</div>
                                <p className="text-[#5f6368] leading-relaxed italic">"{t.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#202124] text-white py-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-bold font-heading mb-2">BULUR <span className="text-gray-500 text-sm font-normal">by reklamatic.ai</span></div>
                        <p className="text-gray-400 text-sm max-w-md">Türkiye'nin en gelişmiş yapay zeka tabanlı potansiyel müşteri bulma servisi.</p>
                    </div>
                    <div className="text-center md:text-right space-y-1">
                        <a href="mailto:info@reklamatic.ai" className="block text-white hover:text-blue-400 font-bold transition-colors">info@reklamatic.ai</a>
                        <a href="tel:+905302312947" className="block text-gray-400 hover:text-white transition-colors">0530 231 29 47</a>
                        <div className="text-xs text-gray-600 mt-2">© 2024 reklamatic.ai</div>
                    </div>
                </div>
            </footer>

            {/* Email Modal */}
            <AnimatePresence>
                {modalOpen && selectedPkg && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-[#202124] mb-2">{selectedPkg.name} Satın Al</h3>
                            <p className="text-[#5f6368] mb-6">Verilerin gönderileceği e-posta adresinizi giriniz.</p>
                            <div className="space-y-4"> <div> <label className="block text-sm font-bold text-[#3c4043] mb-2">E-posta Adresi</label> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ornek@sirket.com" className="w-full px-4 py-3 border border-[#dadce0] rounded-xl focus:ring-2 focus:ring-[#1a73e8] outline-none" /> </div> </div>
                            <div className="mt-8 flex gap-4">
                                <button onClick={() => setModalOpen(false)} className="flex-1 py-3 text-[#5f6368] font-bold hover:bg-gray-50 rounded-xl transition-colors">Vazgeç</button>
                                <button
                                    onClick={completeOrder}
                                    disabled={n8nStatus === 'loading'}
                                    className="flex-1 py-3 bg-[#1a73e8] text-white font-bold rounded-xl hover:bg-[#1557b0] transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {n8nStatus === 'loading' ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            İşleniyor...
                                        </>
                                    ) : (
                                        "Tamamla ve Gönder"
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
