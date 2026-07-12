"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { animate, onScroll, useScroll } from 'animejs';
import ServiceCard from './ServiceCard';
import styles from './Section.module.css';
import ThreeDIcon from './ThreeDIcon';
import { contentDetails } from '../i18n/contentDetails';

const automations = [
    {
        type: 'robot',
        key: 'chatbot'
    },
    {
        type: 'booking',
        key: 'booking'
    },
    {
        type: 'clapper',
        key: 'videoCreation'
    },
    {
        type: 'maps',
        key: 'finder'
    }
];

const AutomationSection = ({ lang = 'en' }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        // Scroll-based animations for automation items (Vertical List)
        automations.forEach((automation, index) => {
            const iconElement = document.querySelector(`#auto-icon-${index}`);
            const textElement = document.querySelector(`#auto-text-${index}`);

            if (iconElement) {
                animate(iconElement, {
                    x: ['8rem', '0rem'],
                    opacity: [0, 1],
                    ease: 'out(3)',
                    autoplay: onScroll({
                        enter: 'bottom-=100 top',
                        leave: 'top+=100 bottom',
                        sync: 1,
                    })
                });
            }

            if (textElement) {
                animate(textElement, {
                    x: ['-4rem', '0rem'],
                    opacity: [0, 1],
                    ease: 'out(3)',
                    autoplay: onScroll({
                        enter: 'bottom-=80 top',
                        leave: 'top+=100 bottom',
                        sync: 1,
                    })
                });
            }
        });
    }, []);

    const handleExpand = (index) => {
        const isExpanding = expandedIndex !== index;

        if (isExpanding) {
            setExpandedIndex(index);

            // Animate the expansion
            setTimeout(() => {
                const detailElement = document.querySelector(`#automation-detail-${index}`);
                if (detailElement) {
                    animate(detailElement, {
                        opacity: [0, 1],
                        translateX: [-50, 0],
                        duration: 600,
                        ease: 'out(3)'
                    });
                }
            }, 50);
        } else {
            setExpandedIndex(null);
        }
    };

    return (
        <section className={styles.section} id="automation">
            <span className={styles.subtitle}>Efficiency Redefined</span>
            <h2 className={styles.title}><span className="gradient-text">Automations</span></h2>

            <div className={styles.verticalList}>
                {automations.map((item, index) => {
                    const content = contentDetails[lang][item.key];
                    // Fallback to English if content is missing for current lang
                    const displayContent = content || contentDetails['en'][item.key];
                    const isExpanded = expandedIndex === index;

                    if (!displayContent) return null;

                    return (
                        <div key={index} className={styles.serviceItem}>
                            <div className={styles.serviceRow}>
                                <div id={`auto-icon-${index}`} className={styles.serviceIcon}>
                                    <ThreeDIcon type={item.type} size={180} />
                                </div>
                                <div id={`auto-text-${index}`} className={styles.serviceInfo}>
                                    <h3 className={styles.serviceTitle}>{displayContent.title}</h3>
                                    <p className={styles.serviceDesc}>{displayContent.intro}</p>
                                    <button
                                        className={styles.exploreBtn}
                                        onClick={() => handleExpand(index)}
                                    >
                                        {isExpanded ? 'Close' : 'Explore'} →
                                    </button>
                                </div>
                            </div>

                            {isExpanded && (
                                <div id={`automation-detail-${index}`} className={styles.detailPanel}>
                                    <div className={styles.detailContent}>
                                        <h4 className={styles.detailSubtitle}>{displayContent.subtitle}</h4>
                                        <ul className={styles.detailSteps}>
                                            {displayContent.steps.map((step, stepIndex) => (
                                                <li key={stepIndex}>
                                                    <span className={styles.stepNumber}>
                                                        {String(stepIndex + 1).padStart(2, '0')}.
                                                    </span>
                                                    <span>{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AutomationSection;
