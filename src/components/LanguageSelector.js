"use client";
import { useState } from 'react';
import styles from './LanguageSelector.module.css';

const LanguageSelector = ({ currentLang, onLanguageChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'it', label: 'Italiano', flag: '🇮🇹' }
    ];

    const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

    return (
        <div className={styles.languageSelector}>
            <button
                className={styles.currentLang}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={styles.flag}>{currentLanguage.flag}</span>
                <span className={styles.code}>{currentLanguage.code.toUpperCase()}</span>
                <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`${styles.langOption} ${lang.code === currentLang ? styles.active : ''}`}
                            onClick={() => {
                                onLanguageChange(lang.code);
                                setIsOpen(false);
                            }}
                        >
                            <span className={styles.flag}>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
