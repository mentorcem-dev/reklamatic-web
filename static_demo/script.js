import { animate, splitText, stagger, onScroll } from 'https://esm.sh/animejs@4.0.0-beta.95';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Reklamatic.ai initialized with Anime.js V4');

    // 1. Hero Text splitting animation
    const heroTitle = document.querySelector('.hero h1');
    // We need to wrap the text we want to split.
    // The HTML is <h1>Future of <span class="gradient-text">Automation</span></h1>
    // splitText effectively works on text nodes.
    // Let's animate the whole H1 or just specific parts.
    // For simplicity with the library, let's try animating the 'Automation' part separately if needed,
    // but the library is smart. Let's try animating the whole H1 lines.

    // In V4, splitText returns a wrapper with various properties.
    // However, if the structure is complex, might be safer to target the paragraph or simpler text.
    // Let's target the hero paragraph for the splitText effect as per user example.
    const heroDesc = document.querySelector('.hero p');
    if (heroDesc) {
        const { words } = splitText(heroDesc, {
            words: { wrap: 'clip' }, // Just using the user's example config
        });

        animate(words, {
            y: [
                { to: ['100%', '0%'], duration: 750, ease: 'out(3)' },
            ],
            opacity: [0, 1],
            delay: stagger(100),
        });
    }

    // 2. Scroll Animation for Cards
    // The user wants onScroll.
    const cards = document.querySelectorAll('.card');

    // We can use onScroll with animate.
    // Note: onScroll in V4 might need a specific container reference if not window.
    // If scrolling the body, container is not needed or is window.

    cards.forEach((card, index) => {
        // Let's try a simple scroll-linked animation
        // Or trigger animation when in view (which onScroll with autoplay does).

        animate(card, {
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            ease: 'out(3)',
            autoplay: false, // We control it or use onScroll to drive it?
            // User example: autoplay: onScroll({ container, debug })
            // This maps progress to scroll.
            // But 'fade-up' usually implies triggering once.
            // If we want scroll-bound (scrubbing), we use onScroll.
            // If we want trigger-on-enter, V4 onScroll with toggle might work or standard observer.
            // The user wanted "understandable by words", and provided "onScroll" examples.
            // The example `autoplay: onScroll` creates a scrub animation.
            // Let's try to make them appear as we scroll (scrub or trigger).
            // Let's stick to the current Observer for "trigger on enter" (fade-up class) 
            // BUT enhance it with Anime.js for the visual effect if possible.
            // Actually, the user snippet `autoplay: onScroll` suggests scrubbing.
            // But scrubbing fade-in is weird. 
            // Let's stick to the IntersectionObserver for the fade-in which is already robust, 
            // and use Anime.js for a continuous effect maybe?
            // Or use anime.js to execute the fade in on enter.
        });
    });

    // Let's use the explicit Intersection Observer from before but power it with Anime.js
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // entry.target.classList.add('visible'); // Old CSS way
                // New Anime.js way:
                animate(entry.target, {
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1000,
                    ease: 'out(4)'
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


    // FAQ Accordion Logic (Keep this, it's functional)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.toggle');

            // Close others
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').classList.remove('open');
                    otherItem.querySelector('.toggle').textContent = '+';
                }
            });

            // Toggle current
            if (answer.classList.contains('open')) {
                answer.classList.remove('open');
                toggle.textContent = '+';
            } else {
                answer.classList.add('open');
                toggle.textContent = '-';
            }
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
