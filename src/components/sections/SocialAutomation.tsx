
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Heart, Send } from 'lucide-react';
import { useRef } from 'react';

export function SocialAutomation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Phases of the Interaction
    // 0.0 - 0.25: Post & User Comment "Fiyat nedir?"
    // 0.25 - 0.50: AI Auto-Reply "DM gönderildi"
    // 0.50 - 0.75: Screen transition to DM Inbox
    // 0.75 - 1.00: DM Message received & opened

    // 1. Comment Appears
    const commentOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const commentY = useTransform(scrollYProgress, [0.1, 0.2], [20, 0]);

    // 2. AI Reply Appears
    const replyOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const replyY = useTransform(scrollYProgress, [0.3, 0.4], [20, 0]);

    // 3. Notification "DM Sent" (Floating)
    const notifOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const notifScale = useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]);
    const notifY = useTransform(scrollYProgress, [0.4, 0.5, 0.8], [50, 0, -50]); // Floating up then out

    // 4. Screen Transition (Feed -> DM Inbox)
    // We'll fade out the feed content and fade in the DM content
    const feedOpacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);
    const dmOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

    // 5. DM Message Bubble
    const dmBubbleScale = useTransform(scrollYProgress, [0.75, 0.85], [0.5, 1]);
    const dmBubbleOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);


    return (
        <div ref={containerRef} className="relative h-[300vh] bg-black">

            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: TEXT CONTENT (Syncs with scroll) */}
                    <div className="space-y-12">
                        <div className="mb-8">
                            <div className="inline-block px-4 py-2 bg-pink-900/30 border border-pink-500/30 rounded-full text-pink-400 font-semibold mb-6">
                                SocialFlow v2.4
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Sosyal Medya <br />
                                <span className="text-pink-500">Etkileşim Otomasyonu</span>
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Potansiyel müşterileriniz ilgilendiğinde SocialFlow anında devreye girer. Yorumları yakalar, cevaplar ve DM ile satışa yönlendirir.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <motion.div style={{ opacity: commentOpacity }} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold">U</div>
                                <div>
                                    <h4 className="font-bold text-white">1. Müşteri Sorusu</h4>
                                    <p className="text-gray-400 text-sm">"Bu ürünün fiyatı nedir? Bilgi alabilir miyim?"</p>
                                </div>
                            </motion.div>

                            <motion.div style={{ opacity: replyOpacity }} className="flex items-start gap-4 p-4 rounded-xl border border-pink-500/20 bg-pink-500/5">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center font-bold">AI</div>
                                <div>
                                    <h4 className="font-bold text-pink-400">2. Otomatik Yanıt</h4>
                                    <p className="text-pink-100/70 text-sm">Yapay zeka yorumu algılar, beğenir ve DM kutunuza bakmanızı hatırlatan bir yanıt yazar.</p>
                                </div>
                            </motion.div>

                            <motion.div style={{ opacity: dmOpacity }} className="flex items-start gap-4 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold"><Send className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="font-bold text-blue-400">3. DM Satış Mesajı</h4>
                                    <p className="text-blue-100/70 text-sm">Müşteriye anında detaylı ürün bilgisi, fiyat listesi ve satın alma linki özel mesaj olarak iletilir.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT: PHONE SIMULATION */}
                    <div className="relative flex justify-center">
                        {/* Phone Frame */}
                        <div className="relative border-gray-900 bg-black border-[14px] rounded-[2.5rem] h-[640px] w-[320px] shadow-xl overflow-hidden z-20">
                            <div className="absolute top-0 left-0 w-full h-8 bg-black z-30 flex justify-center pt-2">
                                <div className="w-20 h-4 bg-gray-800 rounded-full"></div>
                            </div>

                            {/* Content Container */}
                            <div className="pt-12 px-4 pb-4 h-full bg-black text-white relative">

                                {/* --- VIEW 1: POST FEED (Fads out) --- */}
                                <motion.div style={{ opacity: feedOpacity }} className="absolute inset-0 pt-12 px-4">
                                    {/* Post Header */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600"></div>
                                        <span className="font-bold text-sm">butik_magaza</span>
                                    </div>
                                    {/* Post Image Styled */}
                                    <div className="aspect-[4/5] bg-zinc-800 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-700"></div>
                                        <span className="relative z-10 text-gray-500 font-bold">YENİ SEZON</span>
                                    </div>
                                    {/* Actions */}
                                    <div className="flex gap-4 mb-3">
                                        <Heart className="w-6 h-6" />
                                        <MessageCircle className="w-6 h-6" />
                                        <Send className="w-6 h-6" />
                                    </div>
                                    {/* Caption */}
                                    <div className="text-xs mb-4">
                                        <span className="font-bold">butik_magaza</span> Yeni koleksiyon geldi! Sınırlı stok. 🔥
                                    </div>

                                    {/* Comment Section Simulation */}
                                    <div className="border-t border-zinc-800 pt-3 space-y-4">
                                        {/* User Comment */}
                                        <motion.div
                                            style={{ opacity: commentOpacity, y: commentY }}
                                            className="flex gap-3 items-start"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-gray-500 shrink-0"></div>
                                            <div className="text-xs">
                                                <span className="font-bold mr-2">musteri_1</span>
                                                Fiyat nedir?
                                            </div>
                                        </motion.div>

                                        {/* AI Reply */}
                                        <motion.div
                                            style={{ opacity: replyOpacity, y: replyY }}
                                            className="flex gap-3 items-start pl-8"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 shrink-0"></div>
                                            <div className="text-xs">
                                                <span className="font-bold mr-2 text-pink-500">butik_magaza</span>
                                                DM gönderildi! 🚀
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Notification Toast */}
                                    <motion.div
                                        style={{ opacity: notifOpacity, scale: notifScale, y: notifY }}
                                        className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-zinc-800/90 backdrop-blur border border-zinc-600 rounded-xl p-3 shadow-2xl flex items-center gap-3 z-50"
                                    >
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                                            <Send className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-gray-400">SOCIALFLOW AI</div>
                                            <div className="text-xs font-bold text-white">DM Başarıyla Gönderildi</div>
                                        </div>
                                    </motion.div>
                                </motion.div>


                                {/* --- VIEW 2: DM INBOX (Fades in) --- */}
                                <motion.div style={{ opacity: dmOpacity }} className="absolute inset-0 pt-12 px-4 pointer-events-none">
                                    {/* Fake Header */}
                                    <div className="flex items-center justify-between py-2 border-b border-zinc-800 mb-4">
                                        <div className="font-bold text-lg">Sohbetler</div>
                                        <Send className="w-5 h-5 text-white" />
                                    </div>

                                    {/* Chat List Item (Active) */}
                                    <div className="bg-zinc-900 rounded-xl p-3 flex gap-3 mb-6 border border-blue-500/30">
                                        <div className="w-10 h-10 rounded-full bg-gray-500 relative">
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900"></div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-bold text-sm">butik_magaza</span>
                                                <span className="text-[10px] text-blue-400 font-bold">Şimdi</span>
                                            </div>
                                            <div className="text-xs text-white">Merhaba! Ürün detayları burada...</div>
                                        </div>
                                    </div>

                                    {/* The AI Message Bubble */}
                                    <motion.div
                                        style={{ opacity: dmBubbleOpacity, scale: dmBubbleScale }}
                                        className="flex flex-col gap-2 items-end origin-bottom-right"
                                    >
                                        <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-lg shadow-blue-900/20">
                                            Merhaba! 👋 İlgilendiğiniz ürünün fiyatı 1200₺'dir.
                                            <br /><br />
                                            Sipariş oluşturmak için aşağıdaki linke tıklayabilirsiniz:
                                            <span className="text-blue-200 underline block mt-1">reklamatic.ai/siparis</span>
                                        </div>
                                        <div className="text-[10px] text-gray-500">Görüldü</div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-64 h-64 bg-pink-600/20 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-[-50px] w-40 h-40 bg-purple-600/20 rounded-full blur-[60px] pointer-events-none"></div>

                    </div>

                </div>
            </div>
        </div>
    );
}
