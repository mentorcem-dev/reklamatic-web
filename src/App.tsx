import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Hero } from './components/sections/Hero';
import { CustomerFinder } from './components/sections/CustomerFinder';
import { AutoVideoSender } from './components/sections/AutoVideoSender';
import { AppointmentSystem } from './components/sections/AppointmentSystem';
import { SocialAutomation } from './components/sections/SocialAutomation';
import { HowItWorks } from './components/sections/HowItWorks';
import { CallToAction } from './components/sections/CallToAction';
import { WebSolutions } from './components/sections/WebSolutions';
import { Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">

      {/* Global Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 group">
              <img
                src="/logo.jpg"
                alt="Reklamatic Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col h-10">
              <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-none pt-1">
                reklamatic.ai
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-tighter uppercase font-bold">
                Enterprise AI Automation
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Özellikler</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Nasıl Çalışır?</a>
            <a href="#contact" className="px-6 py-2.5 bg-white text-black rounded-full font-black text-sm hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95">
              İletişime Geç
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#features" className="block text-lg font-medium text-gray-300">Özellikler</a>
                <a href="#how-it-works" className="block text-lg font-medium text-gray-300">Nasıl Çalışır?</a>
                <hr className="border-white/10" />
                <a href="#contact" className="block w-full py-3 bg-blue-600 rounded-xl font-bold text-white text-center">
                  Hemen Başla
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


      // ... (previous imports)

      <main>
        <Hero />

        <WebSolutions />
        <ScrollHint label="Hedef Kitlenizi Bulun" />

        <div id="features" className="relative space-y-0 bg-[#050505]">
          <SectionWrapper>
            <CustomerFinder />
          </SectionWrapper>

          <ScrollHint label="Viral Dönüşüme Hazırlanın" />

          <SectionWrapper>
            <AutoVideoSender />
          </SectionWrapper>

          <ScrollHint label="Sosyal Etkileşimi Başlatın" />

          <SectionWrapper>
            <SocialAutomation />
          </SectionWrapper>

          <ScrollHint label="Randevuları Otomatize Edin" />

          <SectionWrapper>
            <AppointmentSystem />
          </SectionWrapper>
        </div>

        <HowItWorks />
        <CallToAction />
      </main>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8 text-sm">
          <div>
            <h4 className="font-bold text-white mb-4">Reklamatic AI</h4>
            <p className="text-gray-500">Yapay zeka asistanınız ile işletmenizi büyütün.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Ürün</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-white">Müşteri Bulucu</a></li>
              <li><a href="#" className="hover:text-white">Chatbot</a></li>
              <li><a href="#" className="hover:text-white">Entegrasyonlar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Şirket</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-white">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Kariyer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-500">
              <li>info@reklamatic.ai</li>
              <li>+90 850 123 45 67</li>
              <li>İstanbul, TR</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs border-t border-white/5 pt-8">
          &copy; 2026 Reklamatic AI. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
}

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ScrollHint({ label }: { label: string }) {
  return (
    <div className="h-40 flex flex-col items-center justify-center gap-4 text-zinc-600 bg-[#050505]">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-800 to-zinc-800" />
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 whitespace-nowrap">{label}</span>
      <div className="w-px h-16 bg-gradient-to-t from-transparent via-zinc-800 to-zinc-800" />
    </div>
  );
}

export default App;
