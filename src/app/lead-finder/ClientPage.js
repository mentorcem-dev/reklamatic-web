"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
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
    {
        name: "Ahmet Yılmaz",
        role: "Emlak Ofisi Sahibi",
        text: "Eskiden tek tek Google Maps'ten numara toplardım. BULUR ile 10 dakikada tüm Ankara'daki satılık mülk sahiplerine ulaştım. İnanılmaz bir zaman tasarrufu.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260241"
    },
    {
        name: "Ayşe Kaya",
        role: "Diş Kliniği Müdürü",
        text: "Yeni kliniğimiz için bölgedeki potansiyel müşteri kitlesini analiz etmek istiyorduk. Nokta atışı veriler sağladı.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260242"
    },
    {
        name: "Mehmet Demir",
        role: "Toptancı",
        text: "Bakkal ve marketlere ulaşmak hiç bu kadar kolay olmamıştı. Satış ekibim artık veri aramakla değil, satış yapmakla ilgileniyor.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260243"
    },
    {
        name: "Zeynep Çelik",
        role: "Dijital Ajans Başkanı",
        text: "Müşterilerimiz için yerel SEO çalışması yaparken rakipleri analiz etmek için kullanıyoruz. Harika bir araç.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e290260244"
    }
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

const StepVisual = ({ step }) => {
    return (
        <div className="w-full h-full bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-2xl relative overflow-hidden flex items-center justify-center">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-white flex flex-col">
                <div className="h-8 bg-gray-100 border-b flex items-center px-4 space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>

                <div className="flex-1 p-6 relative">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                                className="space-y-4"
                            >
                                <div className="h-12 bg-gray-100 rounded-lg w-full flex items-center px-4 text-gray-400 text-sm">Sektör Giriniz...</div>
                                <div className="h-12 bg-gray-100 rounded-lg w-full flex items-center px-4 text-gray-400 text-sm">Şehir Seçiniz...</div>
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="h-12 bg-blue-600 rounded-lg w-1/2 mx-auto mt-8 flex items-center justify-center text-white font-bold"
                                >
                                    ARA
                                </motion.div>
                            </motion.div>
                        )}
                        {step === 1 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="space-y-2"
                            >
                                <div className="font-bold text-gray-800 mb-4">Uygun Paketler Listeleniyor</div>
                                <motion.div initial={{ x: -50 }} animate={{ x: 0 }} className="p-4 border-2 border-blue-500 bg-blue-50 rounded-xl relative">
                                    <div className="font-bold text-blue-700">Kobi Paketi</div>
                                    <div className="text-sm text-blue-600">1000 Veri</div>
                                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">Seçildi</div>
                                </motion.div>
                                <div className="p-4 border border-gray-200 rounded-xl opacity-50">
                                    <div className="font-bold text-gray-500">Esnaf Paketi</div>
                                </div>
                            </motion.div>
                        )}
                        {step === 2 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center h-full space-y-4"
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600"
                                >
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </motion.div>
                                <div className="text-center">
                                    <div className="font-bold text-gray-800 text-lg">Veriler Hazır!</div>
                                    <div className="text-sm text-gray-500">Excel dosyası e-postanıza gönderildi.</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default function ClientPage() {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [results, setResults] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPkg, setSelectedPkg] = useState(null);

    // Animation States
    const [activeStep, setActiveStep] = useState(0);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: containerRef });
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const handleSearch = () => {
        if (!query || !location) return;

        setStatus('loading');

        // Simulate finding real data based on input
        setTimeout(() => {
            const newResults = generateResults(query, location);
            setResults(newResults);
            setStatus('complete');
        }, 2000);
    };

    const handlePackageSelect = (pkg) => {
        setSelectedPkg(pkg);
        setModalOpen(true);
    };

    const completeOrder = () => {
        if (!email) {
            alert("Lütfen e-posta adresinizi giriniz.");
            return;
        }

        // Simulate N8N Webhook Trigger here
        // fetch('YOUR_N8N_WEBHOOK_URL', { method: 'POST', body: JSON.stringify({ email, query, location, package: selectedPkg.name }) })

        setModalOpen(false);
        alert(`Siparişiniz alındı! ${selectedPkg.name} kapsamındaki veriler taranıp ${email} adresine Excel formatında gönderilecektir.`);
        setEmail('');
    };

    return (
        <div ref={containerRef} className="bg-white min-h-screen font-sans text-[#202124] overflow-x-hidden selection:bg-blue-100">

            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#dadce0] px-6 h-16 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                            <circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="3" />
                            <path d="M12 7v5l3 3" stroke="#DB4437" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-[#5f6368] font-heading">BULUR</span>
                </div>

                <div className="hidden md:flex gap-8 text-sm font-medium text-[#5f6368]">
                    <Link href="/" className="hover:text-[#1a73e8] transition-colors">Ana Sayfa</Link>
                    <button onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1a73e8] transition-colors">Nasıl Çalışır?</button>
                    <button onClick={() => document.getElementById('automation').scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1a73e8] transition-colors">Otomasyon</button>
                    <button onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#1a73e8] transition-colors">Paketler</button>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={() => document.getElementById('tool-interface').scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2 rounded-full bg-[#1a73e8] text-white font-medium hover:bg-[#1557b0] transition-colors shadow-blue-200 shadow-lg">
                        Şimdi Bul
                    </button>
                </div>
                <motion.div style={{ scaleX }} className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] origin-left" />
            </nav>

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Canlı Veri Akışı Aktif
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black leading-[1] text-[#202124] tracking-tight">
                            Müşterini <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#EA4335]">BULUR.</span>
                        </h1>
                        <p className="text-xl text-[#5f6368] leading-relaxed max-w-xl font-light">
                            Sektörü yaz, şehri seç. Yapay zeka senin için Google Maps'i tarasın, binlerce potansiyel müşterinin telefonunu, adresini ve verisini Excel olarak mailine göndersin.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => document.getElementById('tool-interface').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-5 rounded-xl bg-[#1a73e8] text-white font-bold text-lg hover:bg-[#1557b0] hover:scale-105 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                Hemen Müşteri Bul
                            </button>
                            <button onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-5 rounded-xl border-2 border-[#dadce0] bg-white text-[#3c4043] font-bold text-lg hover:border-[#1a73e8] hover:text-[#1a73e8] transition-all">
                                Sistem Nasıl Çalışır?
                            </button>
                        </div>

                        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                            <div className="flex -space-x-3">
                                {TESTIMONIALS.map((t, i) => (
                                    <img key={i} src={t.avatar} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                ))}
                            </div>
                            <div className="text-sm">
                                <div className="flex text-yellow-500 mb-0.5">★★★★★</div>
                                <p className="text-gray-500 font-medium">10,000+ İşletme Güveniyor</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <div className="ml-4 px-3 py-1 bg-white rounded-md text-xs text-gray-400 font-mono shadow-sm flex-1 text-center">bulur-ai-crawler.exe</div>
                            </div>
                            <div className="p-8 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="h-8 w-32 bg-gray-100 rounded animate-pulse"></div>
                                    <div className="h-8 w-12 bg-blue-100 rounded animate-pulse"></div>
                                </div>
                                <div className="space-y-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                            <div className="w-10 h-10 rounded bg-gray-200 animate-pulse flex-shrink-0"></div>
                                            <div className="flex-1 space-y-2">
                                                <div className="h-3 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                                                <div className="h-2 w-1/2 bg-gray-100 rounded animate-pulse"></div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="h-6 w-20 bg-green-100/50 rounded-full text-green-600 text-xs flex items-center justify-center font-bold">ONAYLI</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-gray-100 text-center">
                                    <span className="text-blue-600 text-sm font-bold flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Veriler İşleniyor...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Feature / Tool Interface */}
            <section id="tool-interface" className="py-24 bg-[#f8f9fa] relative border-y border-[#dadce0]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-4">
                            Kimi Arıyoruz?
                        </h2>
                        <p className="text-[#5f6368] text-lg max-w-2xl mx-auto">
                            Hedef kitlenizi tanımlayın, yapay zeka sizin için Google Maps veritabanını tarayarak en güncel iletişim bilgilerini listelesin.
                        </p>
                    </div>

                    {/* The "App" Container */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-[#dadce0] overflow-hidden flex flex-col lg:flex-row min-h-[700px]">

                        {/* Sidebar / Filters */}
                        <div className="w-full lg:w-96 bg-gray-50 border-r border-[#dadce0] p-8 flex flex-col gap-6 relative z-10">

                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm font-bold text-[#3c4043] block mb-2 uppercase tracking-wide">Sektör veya İşletme Tipi</label>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            className="w-full px-5 py-4 bg-white border border-[#dadce0] rounded-xl text-[#202124] placeholder-gray-400 focus:ring-4 focus:ring-blue-500/10 focus:border-[#1a73e8] outline-none transition-all pl-12 text-lg shadow-sm group-hover:shadow-md"
                                            placeholder="Örn: Emlak Ofisleri"
                                        />
                                        <svg className="w-6 h-6 absolute left-4 top-4 text-gray-400 group-focus-within:text-[#1a73e8] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-bold text-[#3c4043] block mb-2 uppercase tracking-wide">Hedef Konum</label>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="w-full px-5 py-4 bg-white border border-[#dadce0] rounded-xl text-[#202124] placeholder-gray-400 focus:ring-4 focus:ring-blue-500/10 focus:border-[#1a73e8] outline-none transition-all pl-12 text-lg shadow-sm group-hover:shadow-md"
                                            placeholder="Örn: İzmir, Karşıyaka"
                                        />
                                        <svg className="w-6 h-6 absolute left-4 top-4 text-gray-400 group-focus-within:text-[#EA4335] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <h4 className="font-bold text-blue-800 text-sm mb-1 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                                    İpucu
                                </h4>
                                <p className="text-xs text-blue-600 leading-relaxed">
                                    "Toptancı", "Güzellik Merkezi" veya "Avukat" gibi spesifik aramalar daha iyi sonuç verir. Konum olarak ilçe belirtmek doğruluğu artırır.
                                </p>
                            </div>

                            <button
                                onClick={handleSearch}
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-[#1a73e8] text-white font-bold text-lg rounded-xl hover:bg-[#1557b0] transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 mt-auto transform active:scale-95"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Veriler Taranıyor...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        Analizi Başlat
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 bg-white relative flex flex-col">
                            <div className="h-20 border-b border-[#dadce0] flex items-center justify-between px-8 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
                                <h3 className="font-bold text-[#202124] text-lg flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${status === 'complete' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                    Sonuçlar
                                </h3>
                                {results.length > 0 && (
                                    <button onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })} className="text-[#1a73e8] font-bold text-sm hover:underline flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                        Tümünü Excel İndir
                                    </button>
                                )}
                            </div>

                            <div className="flex-1 overflow-y-auto bg-white p-8 relative min-h-[400px]">
                                <AnimatePresence mode="wait">
                                    {status === 'loading' ? (
                                        <motion.div
                                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        >
                                            <div className="w-32 h-32 relative mb-8">
                                                <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                                                <div className="absolute inset-0 border-4 border-[#1a73e8] rounded-full border-t-transparent animate-spin"></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <img src="/favicon.ico" className="w-12 h-12 opacity-50 grayscale" alt="" />
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#202124] mb-2">Google Veritabanı Taranıyor</h3>
                                            <p className="text-[#5f6368] max-w-sm">İşletmeler doğrulanıyor, telefon numaraları kontrol ediliyor ve adresler eşleştiriliyor...</p>
                                        </motion.div>
                                    ) : results.length > 0 ? (
                                        <motion.div className="space-y-4">
                                            {results.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="bg-white p-6 rounded-2xl border border-[#dadce0] hover:shadow-lg hover:border-[#1a73e8] transition-all group cursor-default"
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xl uppercase">
                                                                {item.name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-lg text-[#202124] group-hover:text-[#1a73e8] transition-colors">{item.name}</h4>
                                                                <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                                                                    <span>{item.address}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-end gap-1">
                                                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center gap-1">
                                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                                Onaylı İşletme
                                                            </span>
                                                            <div className="text-xs text-gray-400">{item.reviews} Yorum • {item.rating} Puan</div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                                                        <div className="flex items-center gap-2 text-[#202124] bg-gray-50 p-2 rounded-lg">
                                                            <svg className="w-4 h-4 text-[#34A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                                            <span className="font-mono font-medium">{item.phone}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-[#202124] bg-gray-50 p-2 rounded-lg">
                                                            <svg className="w-4 h-4 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                                            <span className="truncate">{item.website}</span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}

                                            <div className="p-8 text-center bg-blue-50 border border-blue-100 rounded-2xl">
                                                <h4 className="text-xl font-bold text-[#1a73e8] mb-2">ve {Math.floor(Math.random() * 500) + 120} sonuç daha...</h4>
                                                <p className="text-[#5f6368] mb-6">Listenin tamamına erişmek ve Excel olarak indirmek için size uygun paketi seçin.</p>
                                                <button onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-[#1a73e8] text-white rounded-lg font-bold hover:bg-[#1557b0] transition-colors">Paketleri İncele</button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                            <svg className="w-32 h-32 text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            <p className="text-2xl font-bold text-[#202124] mb-2">Arama Bekleniyor</p>
                                            <p>Sol taraftaki panelden sektör ve konum seçiniz.</p>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive How It Works Section */}
            <section id="how-it-works" className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#202124] mb-24 text-center">3 Adımda Rakiplerinin Önüne Geç</h2>

                    <div className="flex flex-col md:flex-row gap-8 lg:gap-24 relative">
                        {/* Visual Tracker (Sticky) */}
                        <div className="hidden md:block w-1/2 h-[600px] sticky top-32">
                            <StepVisual step={activeStep} />
                        </div>

                        {/* Scrollable Steps */}
                        <div className="w-full md:w-1/2 space-y-[40vh] py-[10vh]">
                            {[
                                { title: "1. Arama Yap", desc: "Sektörünü ve şehrini gir. Yapay zeka senin için tüm haritayı tarasın." },
                                { title: "2. Paket Seç", desc: "İhtiyacın olan veri miktarını belirle. Esnaf, Kobi veya Patron paketlerinden bütçene uygun olanı seç." },
                                { title: "3. Mailine Gelsin", desc: "Tüm liste Excel formatında, doğrulanmış numaralar ile birlikte saniyeler içinde e-posta adresine gelsin." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    onViewportEnter={() => setActiveStep(i)}
                                    className="min-h-[30vh] flex flex-col justify-center p-8 rounded-3xl border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-shadow"
                                >
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-500/30">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#202124] mb-4">{step.title}</h3>
                                    <p className="text-xl text-[#5f6368] leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Automation Section */}
            <section id="automation" className="py-32 bg-[#1e293b] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm tracking-wider uppercase">
                                Yeni Özellik
                            </div>
                            <h2 className="text-5xl font-black leading-tight">
                                Excel Listesi ile Uğraşma. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Yapay Zeka Arasın.</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                Verileri topladın, peki şimdi tek tek mesaj mı atacaksın? Hayır.
                                BULUR Otomasyon sistemi senin yerine müşterilere WhatsApp üzerinden ulaşır, kendini tanıtır ve randevu alır.
                            </p>

                            <div className="flex gap-4 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                </div>
                                <div>
                                    <div className="font-bold text-white">Tam Otomatik İletişim</div>
                                    <div className="text-gray-400 text-sm">Günde 50-250 arası müşteriye kişiselleştirilmiş mesaj gönderir.</div>
                                </div>
                            </div>
                        </div>

                        {/* Automation UI Graphic */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-2xl space-y-4"
                            >
                                {/* Chat UI Mockup */}
                                <div className="bg-slate-900 rounded-xl p-4 space-y-4 h-[400px] overflow-hidden relative">
                                    {[
                                        { type: 'out', text: "Merhaba, İzmir'deki emlak ofisiniz için müşteri portföyümüzü incelemek ister misiniz?" },
                                        { type: 'in', text: "Merhaba, detayları alabilir miyim?" },
                                        { type: 'out', text: "Tabii, size özel hazırladığımız 500 kişilik yatırımcı listesini iletiyorum. Müsait misiniz?" },
                                        { type: 'in', text: "Evet lütfen gönderin." }
                                    ].map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.8 }}
                                            className={`flex ${msg.type === 'out' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === 'out' ? 'bg-green-600 text-white rounded-tr-none' : 'bg-slate-700 text-white rounded-tl-none'}`}>
                                                {msg.text}
                                            </div>
                                        </motion.div>
                                    ))}

                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Automation Packages */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {AUTO_PACKAGES.map((pkg, i) => (
                            <div key={i} className={`bg-slate-800 rounded-3xl p-8 border ${pkg.popular ? 'border-blue-500 shadow-blue-500/20 shadow-xl' : 'border-slate-700'} hover:border-blue-400 transition-all flex flex-col`}>
                                <div className="text-4xl mb-4">{pkg.icon}</div>
                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-bold">{pkg.price}₺</span>
                                    <span className="text-slate-500 text-sm">/dahil KDV</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {pkg.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                                            <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">✓</div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button onClick={() => { setSelectedPkg(pkg); setModalOpen(true); }} className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}>
                                    Sistemi Kur
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-24 bg-[#f8f9fa] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-[#202124] mb-16">Kullanıcı Deneyimleri</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-[#dadce0]">
                                <div className="flex items-center gap-4 mb-6">
                                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-100" />
                                    <div>
                                        <h4 className="font-bold text-[#202124]">{t.name}</h4>
                                        <div className="text-xs text-[#5f6368] font-medium uppercase tracking-wide">{t.role}</div>
                                    </div>
                                </div>
                                <div className="mb-4 flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                                </div>
                                <p className="text-[#5f6368] leading-relaxed italic">"{t.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 translate-x-32"></div>

                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-5xl font-bold text-[#202124]">Müşteri Bulma Paketleri</h2>
                        <p className="text-[#5f6368] text-lg max-w-2xl mx-auto">Veriler doğrudan e-posta adresinize gönderilir. Aylık üyelik yok, kullandığın kadar öde.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {PACKAGES.map((pkg, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`relative rounded-3xl border-2 ${pkg.popular ? 'border-[#EA4335] shadow-2xl shadow-red-500/10 scale-105 z-10 bg-white' : 'border-gray-100 bg-white shadow-xl hover:border-gray-200'} p-8 flex flex-col`}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EA4335] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                                        ÇOK SATAN
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-[#202124] mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-5xl font-black tracking-tighter text-[#202124]">{pkg.price}₺</span>
                                    <span className="text-[#5f6368] font-medium">/tek seferlik</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-1">
                                    {pkg.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[#3c4043] font-medium">
                                            <div className={`w-6 h-6 rounded-full bg-${pkg.color}-100 flex items-center justify-center text-${pkg.color}-600 flex-shrink-0`}>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handlePackageSelect(pkg)}
                                    className={`w-full py-5 rounded-xl font-bold text-lg transition-all ${pkg.popular ? 'bg-[#EA4335] text-white hover:bg-[#d93025] shadow-lg shadow-red-500/30' : 'bg-[#f8f9fa] text-[#3c4043] hover:bg-[#1a73e8] hover:text-white border border-gray-200'}`}
                                >
                                    Paketi Seç
                                </button>
                            </motion.div>
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
                    <div className="flex gap-8 text-gray-400 text-sm">
                        <span className="cursor-pointer hover:text-white transition-colors">Gizlilik Politikası</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Mesafeli Satış Sözleşmesi</span>
                        <span className="cursor-pointer hover:text-white transition-colors">KVKK Aydınlatma Metni</span>
                    </div>
                </div>
            </footer>

            {/* Email Modal */}
            <AnimatePresence>
                {modalOpen && selectedPkg && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold text-[#202124] mb-2">{selectedPkg.name} Satın Al</h3>
                            <p className="text-[#5f6368] mb-6">Verilerin gönderileceği e-posta adresinizi giriniz.</p>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-[#3c4043] mb-2">E-posta Adresi</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="ornek@sirket.com"
                                        className="w-full px-4 py-3 border border-[#dadce0] rounded-xl focus:ring-2 focus:ring-[#1a73e8] outline-none"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <button onClick={() => setModalOpen(false)} className="flex-1 py-3 text-[#5f6368] font-bold hover:bg-gray-50 rounded-xl transition-colors">Vazgeç</button>
                                <button onClick={completeOrder} className="flex-1 py-3 bg-[#1a73e8] text-white font-bold rounded-xl hover:bg-[#1557b0] transition-colors shadow-lg">Tamamla ve Gönder</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
