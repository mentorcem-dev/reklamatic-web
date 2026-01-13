"use client";
import { useState, useEffect } from 'react';
import { animate, onScroll } from 'animejs';
import ServiceCard from './ServiceCard';
import styles from './Section.module.css';
import ThreeDIcon from './ThreeDIcon';
import { contentDetails } from '../i18n/contentDetails';

const services = [
    {
        title: "Music Video Production",
        description: "High-energy, beat-synced visuals that bring your music to life. We create immersive experiences for artists.",
        type: 'music',
        key: 'music'
    },
    {
        title: "Real Estate Vision",
        description: "Hyper-realistic video tours and architectural visualizations. Sell properties faster with cinematic showcases.",
        type: 'building',
        key: 'realEstate'
    },
    {
        title: "Professional Ad Videos",
        description: "Compelling commercials and brand stories tailored for high conversion. Elevate your business presence.",
        type: 'camera',
        key: 'ads'
    }
];

const ContentCreationSection = ({ lang = 'en' }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        // Scroll-based animations for service items
        services.forEach((service, index) => {
            const iconElement = document.querySelector(`#icon-${index}`);
            const textElement = document.querySelector(`#text-${index}`);

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
                const detailElement = document.querySelector(`#detail-${index}`);
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
        <section className={styles.section} id="content-creation">
            <span className={styles.subtitle}>Visual Excellence</span>
            <h2 className={styles.title}><span className="gradient-text">Content Creation</span></h2>

            <div className={styles.verticalList}>
                {services.map((service, index) => {
                    const content = contentDetails[lang][service.key];
                    const isExpanded = expandedIndex === index;

                    return (
                        <div key={index} className={styles.serviceItem}>
                            <div className={styles.serviceRow}>
                                <div id={`icon-${index}`} className={styles.serviceIcon}>
                                    <ThreeDIcon type={service.type} size={180} />
                                </div>
                                <div id={`text-${index}`} className={styles.serviceInfo}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDesc}>{service.description}</p>
                                    <button
                                        className={styles.exploreBtn}
                                        onClick={() => handleExpand(index)}
                                    >
                                        {isExpanded ? 'Close' : 'Explore'} →
                                    </button>
                                </div>
                            </div>

                            {isExpanded && (
                                <div id={`detail-${index}`} className={styles.detailPanel}>
                                    <div className={styles.detailContent}>
                                        <h4 className={styles.detailSubtitle}>{content.subtitle}</h4>
                                        <ul className={styles.detailSteps}>
                                            {content.steps.map((step, stepIndex) => (
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

export default ContentCreationSection;
