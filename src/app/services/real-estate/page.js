"use client";
import { useRouter } from 'next/navigation';
import ThreeDIcon from '../../../components/ThreeDIcon';
import { contentDetails } from '../../../i18n/contentDetails';
import styles from '../music/servicePage.module.css';

export default function RealEstatePage() {
    const lang = 'en';
    const content = contentDetails[lang].realEstate;
    const router = useRouter();

    return (
        <div className={styles.pageWrapper}>
            <button onClick={() => router.push('/')} className={styles.backBtn}>← Back Home</button>

            <div className="container" style={{ paddingTop: '40px', minHeight: '100vh' }}>
                <div className={styles.iconContainer}>
                    <ThreeDIcon type="building" size={300} />
                </div>

                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                    {content.title}
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
                    {content.intro}
                </p>

                <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', maxWidth: '900px', margin: '0 auto 2rem' }}>
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>{content.subtitle}</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {content.steps.map((step, index) => (
                            <li key={index} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ color: '#3b82f6', fontSize: '1.2rem', fontWeight: 'bold', minWidth: '30px' }}>
                                    {String(index + 1).padStart(2, '0')}.
                                </span>
                                <span style={{ color: '#e5e5e5' }}>{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.goalBox}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{content.goal}</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{content.goalText}</p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="/#contact" className={styles.ctaButton}>
                        Start Your Project
                    </a>
                </div>
            </div>
        </div>
    );
}
