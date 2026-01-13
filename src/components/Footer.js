"use client";
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#070712] pt-24 pb-12 px-4 border-t border-white/5 text-sm text-gray-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-white text-xl font-bold mb-4">reklamatic.ai</h3>
                    <p className="mb-4">Standardizing the chaotic world of content creation & automation.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-purple-400 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-purple-400 transition-colors">TikTok</a>
                        <a href="#" className="hover:text-purple-400 transition-colors">YouTube</a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold mb-4">{t.footer.explore}</h4>
                    <ul className="space-y-2">
                        <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                        <li><a href="#automations" className="hover:text-white transition-colors">{t.nav.automations}</a></li>
                        <li><a href="#ai-showcase" className="hover:text-white transition-colors">{t.nav.aiVideos}</a></li>
                        <li><a href="#process" className="hover:text-white transition-colors">{t.nav.process}</a></li>
                    </ul>
                </div>

                {/* Contact Placeholder */}
                <div>
                    <h4 className="text-white font-bold mb-4">{t.footer.contact}</h4>
                    <ul className="space-y-2">
                        <li><a href="mailto:info@reklamatic.ai" className="hover:text-purple-400 transition-colors">info@reklamatic.ai</a></li>
                        <li><a href="tel:+905302312947" className="hover:text-purple-400 transition-colors">0530 231 29 47</a></li>
                        <li>Istanbul, TR</li>
                    </ul>
                </div>

                {/* Legal Placeholder */}
                <div>
                    <h4 className="text-white font-bold mb-4">{t.footer.legal}</h4>
                    <ul className="space-y-2 text-xs font-mono">
                        <li>Reklamatic Media A.Ş.</li>
                        <li>Tax Office: [Pending Update]</li>
                        <li>Tax No: [Pending Update]</li>
                        <li>MERSIS: [Pending Update]</li>
                        <li>[Address Pending Update]</li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>&copy; {new Date().getFullYear()} reklamatic.ai. {t.footer.rights}</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>

            {/* Note for builder */}
            <div className="text-center mt-12 opacity-20 text-[10px]">
                Replace placeholders after receiving tax certificate/company details.
            </div>
        </footer>
    );
};

export default Footer;
