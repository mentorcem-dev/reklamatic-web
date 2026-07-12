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
                    <p className="mb-4">AI product videos, owned-media distribution and practical content automation.</p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/reklamatic.ai/" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">Instagram</a>
                        <a href="mailto:info@reklamatic.ai" className="hover:text-purple-400 transition-colors">Media kit</a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-bold mb-4">{t.footer.explore}</h4>
                    <ul className="space-y-2">
                        <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                        <li><a href="#proof" className="hover:text-white transition-colors">Network proof</a></li>
                        <li><a href="#commercial" className="hover:text-white transition-colors">Packages</a></li>
                        <li><a href="#systems" className="hover:text-white transition-colors">Business systems</a></li>
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

                {/* Company */}
                <div>
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-xs font-mono">
                        <li>Cem Gülçağ — Reklamatic</li>
                        <li>Sole proprietorship</li>
                        <li>Istanbul, Türkiye</li>
                        <li>Global projects welcome</li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>&copy; {new Date().getFullYear()} reklamatic.ai. {t.footer.rights}</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="mailto:info@reklamatic.ai?subject=Privacy%20request" className="hover:text-white">Privacy requests</a>
                    <a href="mailto:info@reklamatic.ai?subject=Commercial%20terms" className="hover:text-white">Commercial terms</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
