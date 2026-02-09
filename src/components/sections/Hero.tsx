
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Code2, Globe, Shield, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
   const [text, setText] = useState('');
   const fullText = '> AUTOMATE_GROWTH.exe';
   const [logs, setLogs] = useState<string[]>([]);

   const terminalLogs = [
      "➜  Initializing LeadForge Enterprise engine...",
      "➜  Connecting to Corporate CRM Gateway...",
      "➜  [SUCCESS] SSL/TLS handshake established.",
      "➜  Scanning: Market Intelligence Data",
      "➜  Found 2,450 verified corporate leads.",
      "➜  Automating Multi-channel Outreach...",
      "➜  [INFO] Personalizing content via GPT-4o.",
      "➜  Executing ViralEngine Sync...",
      "➜  [SUCCESS] Enterprise campaign live.",
      "➜  AgendaBot: Executive briefing fixed.",
   ];

   useEffect(() => {
      let i = 0;
      const typewriter = setInterval(() => {
         setText(fullText.slice(0, i));
         i++;
         if (i > fullText.length) clearInterval(typewriter);
      }, 100);

      let logIndex = 0;
      const logInterval = setInterval(() => {
         setLogs(prev => [...prev.slice(-4), terminalLogs[logIndex]]);
         logIndex = (logIndex + 1) % terminalLogs.length;
      }, 2000);

      return () => {
         clearInterval(typewriter);
         clearInterval(logInterval);
      };
   }, []);

   return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-white font-mono selection:bg-green-500/30">
         {/* Tech Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

         {/* Animated Glow Globes */}
         <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700"></div>

         <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: Heading & CTA */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded border border-green-500/30 bg-green-500/5 text-green-400 text-xs mb-8 backdrop-blur-sm"
               >
                  <Cpu className="w-3 h-3 animate-spin-slow" />
                  <span className="tracking-widest capitalize">Enterprise Automation v3.0.4</span>
               </motion.div>

               {/* Typewriter Heading */}
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">
                  <span className="text-white">{text}</span>
                  <span className="inline-block w-[3px] h-[0.8em] bg-green-500 ml-1 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
               </h1>

               <div className="space-y-4 mb-10">
                  <p className="text-zinc-500 text-lg flex items-start gap-4">
                     <span className="text-green-500/40">01</span>
                     <span className="border-l border-zinc-800 pl-4 italic">Kurumsal şirketler için uçtan uca otomasyon çözümleri.</span>
                  </p>
                  <p className="text-zinc-400 text-lg flex items-start gap-4">
                     <span className="text-green-500/40">02</span>
                     <span className="border-l border-zinc-800 pl-4">LeadForge, ViralEngine ve AgendaBot</span>
                  </p>
                  <p className="text-zinc-400 text-sm flex items-start gap-4">
                     <span className="text-green-500/40">03</span>
                     <span className="border-l border-zinc-800 pl-4">İşletmenizi yapay zeka ile otonom bir yapıya dönüştürün.</span>
                  </p>
               </div>

               <div className="flex flex-wrap gap-4">
                  <button
                     onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                     className="relative px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-black rounded-lg flex items-center gap-3 group transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                  >
                     <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg"></div>
                     <Play className="w-5 h-5 fill-black relative z-10" />
                     <span className="relative z-10">DEMO_BAŞLAT.sh</span>
                  </button>
                  <button className="px-8 py-4 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-400 rounded-lg font-bold transition-all backdrop-blur-md">
                     VIEW_SOURCE
                  </button>
               </div>
            </motion.div>

            {/* RIGHT: Code Editor Simulation */}
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="relative lg:scale-110"
            >
               {/* Outer Glows */}
               <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl blur-2xl opacity-40"></div>

               {/* Main Window */}
               <div className="relative bg-[#0d0d0d] rounded-2xl border border-white/10 shadow-[0_30px_60px_-12px_rgba(0,0,0,1)] overflow-hidden font-mono text-[13px] leading-relaxed">

                  {/* Decorative Header */}
                  <div className="bg-zinc-900/80 px-5 py-3 flex items-center justify-between border-b border-white/5 backdrop-blur-md">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                     </div>
                     <div className="flex items-center gap-3 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                        <Code2 className="w-3 h-3" />
                        business_growth.py
                     </div>
                     <div className="w-12"></div>
                  </div>

                  {/* Code Area */}
                  <div className="p-8 text-zinc-400 space-y-1">
                     <div className="flex">
                        <span className="w-10 text-zinc-600 select-none text-[10px]">01</span>
                        <span className="text-pink-500">import</span> <span className="text-blue-400">ReklamaticAI</span>
                     </div>
                     <div className="flex"><span className="w-10 text-zinc-600 text-[10px]">02</span></div>
                     <div className="flex">
                        <span className="w-10 text-zinc-600 text-[10px]">03</span>
                        <span className="text-cyan-400">class</span> <span className="text-yellow-400">EmpireBuilder</span>:
                     </div>
                     <div className="flex">
                        <span className="w-10 text-zinc-600 text-[10px]">04</span>
                        <span className="ml-4 text-cyan-400">def</span> <span className="text-yellow-400">__init__</span>(self):
                     </div>
                     <div className="flex">
                        <span className="w-10 text-zinc-600 text-[10px]">05</span>
                        <span className="ml-8 text-white">self.growth = </span><span className="text-green-500 text-glow">"exponential"</span>
                     </div>
                     <div className="flex"><span className="w-10 text-zinc-600 text-[10px]">06</span></div>
                     <div className="flex">
                        <span className="w-10 text-zinc-600 text-[10px]">07</span>
                        <span className="ml-4 text-cyan-400">def</span> <span className="text-yellow-400">automate</span>(self):
                     </div>
                     <div className="flex text-white/90 bg-green-500/5 -mx-8 px-18 py-1 border-l-4 border-green-500">
                        <span className="w-10 text-zinc-600 text-[10px] -ml-8">08</span>
                        <span className="ml-8 text-cyan-400">while</span> <span className="text-pink-400">True</span>:
                     </div>
                     <div className="flex bg-green-500/10 -mx-8 px-18 py-1 border-l-4 border-green-500">
                        <span className="w-10 text-zinc-600 text-[10px] -ml-8">09</span>
                        <span className="ml-12">leads = <span className="text-blue-400">LeadForge</span>.find()</span>
                     </div>
                     <div className="flex">
                        <span className="w-10 text-zinc-600 text-[10px]">10</span>
                        <span className="ml-12"><span className="text-blue-400">ViralEngine</span>.send(leads)</span>
                     </div>
                  </div>

                  {/* Terminal Simulation */}
                  <div className="bg-[#050505] p-6 border-t border-white/5">
                     <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 tracking-widest">
                           <Terminal className="w-3 h-3" />
                           ACTIVE_LOGS
                        </div>
                        <div className="flex gap-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></div>
                           <span className="text-[10px] text-green-500 font-bold uppercase">Live</span>
                        </div>
                     </div>
                     <div className="space-y-2 min-h-[100px]">
                        <AnimatePresence mode="popLayout">
                           {logs.map((log, idx) => (
                              <motion.div
                                 key={`${log}-${idx}`}
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 exit={{ opacity: 0, scale: 0.95 }}
                                 className="text-xs font-mono"
                              >
                                 <span className={log.includes('[SUCCESS]') ? 'text-green-500' : 'text-zinc-500'}>
                                    {log}
                                 </span>
                              </motion.div>
                           ))}
                        </AnimatePresence>
                     </div>
                  </div>

               </div>

               {/* Decorative floating labels */}
               <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-12 -right-8 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl flex items-center gap-2"
               >
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-bold tracking-tighter">GLOBAL_REACH_OK</span>
               </motion.div>
               <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl flex items-center gap-2"
               >
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-[10px] font-bold tracking-tighter">SECURITY_MODE: MAX</span>
               </motion.div>

            </motion.div>
         </div>

         {/* Scroll Hint */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
         >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Keşfetmek için Kaydırın</span>
            <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-5 h-8 border-2 border-zinc-800 rounded-full flex justify-center p-1"
            >
               <div className="w-1 h-2 bg-green-500 rounded-full"></div>
            </motion.div>
         </motion.div>

         <style dangerouslySetInnerHTML={{
            __html: `
            .text-glow {
               text-shadow: 0 0 10px rgba(34, 197, 94, 0.4);
            }
            .animate-spin-slow {
               animation: spin 8s linear infinite;
            }
            @keyframes spin {
               from { transform: rotate(0deg); }
               to { transform: rotate(360deg); }
            }
         `}} />
      </section>
   );
}
