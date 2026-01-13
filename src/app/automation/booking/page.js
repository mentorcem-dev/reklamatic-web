"use client";
import { useRouter } from 'next/navigation';
import ThreeDIcon from '../../../components/ThreeDIcon';
import { contentDetails } from '../../../i18n/contentDetails';
import styles from '../../services/music/servicePage.module.css';

export default function BookingPage() {
    const lang = 'en';
    const content = contentDetails[lang].booking;
    const router = useRouter();

    return (
        <div className={styles.pageWrapper}>
            <button onClick={() => router.push('/')} className={styles.backBtn}>← Back Home</button>

            <div className="container" style={{ paddingTop: '40px', minHeight: '100vh' }}>
                <div className={styles.iconContainer}>
                    <ThreeDIcon type="booking" size={300} />
                </div>

                <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                    {content.title}
                </h1>
                <div style={{ textAlign: 'center', color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                    {content.subtitle}
                </div>
                <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
                    {content.intro}
                </p>

                <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', maxWidth: '900px', margin: '0 auto 2rem' }}>
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>{content.howItWorks}</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {content.steps.map((step, index) => (
                            <li key={index} style={{ marginBottom: '0.75rem', paddingLeft: '2rem', position: 'relative', color: '#e5e5e5' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#ec4899', fontSize: '1.1rem', fontWeight: 'bold' }}>
                                    {String(index + 1).padStart(2, '0')}.
                                </span>
                                {step}
                            </li>
                        ))}
                        {content.syncSteps && content.syncSteps.map((step, index) => (
                            <li key={`sync-${index}`} style={{ marginBottom: '0.75rem', paddingLeft: '3rem', position: 'relative', color: '#d4d4d4' }}>
                                <span style={{ position: 'absolute', left: '2rem', color: 'var(--accent)' }}>•</span>
                                {step}
                            </li>
                        ))}
                        {content.afterSteps && content.afterSteps.map((step, index) => (
                            <li key={`after-${index}`} style={{ marginBottom: '0.75rem', paddingLeft: '2rem', position: 'relative', color: '#e5e5e5' }}>
                                <span style={{ position: 'absolute', left: 0, color: '#ec4899', fontSize: '1.1rem', fontWeight: 'bold' }}>
                                    {String(content.steps.length + index + 1).padStart(2, '0')}.
                                </span>
                                {step}
                            </li>
                        ))}
                    </ul>
                </div>

                {content.benefits && (
                    <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', maxWidth: '900px', margin: '0 auto 2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>{content.benefits}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {content.benefitsList.map((benefit, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>✓</span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className={styles.goalBox}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{content.goal}</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{content.goalText}</p>
                </div>

                {content.integration && (
                    <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem', maxWidth: '900px', margin: '2rem auto', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', textAlign: 'center' }}>{content.integration}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {content.integrationSteps.map((step, index) => (
                                <li key={index} style={{ marginBottom: '1rem', fontSize: '1.1rem', textAlign: 'center' }}>
                                    {step}
                                </li>
                            ))}
                        </ul>
                        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                            {content.integrationSummary}
                        </p>
                        {content.languages && (
                            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.95rem', color: '#999' }}>
                                {content.languages}
                            </p>
                        )}
                    </div>
                )}

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a href="/#contact" className={styles.ctaButton}>
                        Automate Appointments
                    </a>
                </div>
            </div>
        </div>
    );
}
