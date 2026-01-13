"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        // Disable on mobile/touch
        if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        const cursor = cursorRef.current;
        const ring = ringRef.current;

        // Initial hide
        gsap.set([cursor, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

        const xTo = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power3" });
        const yTo = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power3" });

        const xToCursor = gsap.quickTo(cursor, "x", { duration: 0, ease: "power3" });
        const yToCursor = gsap.quickTo(cursor, "y", { duration: 0, ease: "power3" });

        const onMouseMove = (e) => {
            gsap.to([cursor, ring], { opacity: 1, duration: 0.2 });
            xTo(e.clientX);
            yTo(e.clientY);
            xToCursor(e.clientX);
            yToCursor(e.clientY);
        };

        const onHoverStart = () => {
            gsap.to(ring, { scale: 1.5, borderColor: '#A855F7', backgroundColor: 'rgba(168, 85, 247, 0.1)', duration: 0.3 });
            gsap.to(cursor, { scale: 0.5, backgroundColor: '#A855F7', duration: 0.3 });
        };

        const onHoverEnd = () => {
            gsap.to(ring, { scale: 1, borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'transparent', duration: 0.3 });
            gsap.to(cursor, { scale: 1, backgroundColor: '#ffffff', duration: 0.3 });
        };

        window.addEventListener('mousemove', onMouseMove);

        // Add hover listeners to interactive elements
        const addListeners = () => {
            const interactivity = document.querySelectorAll('a, button, input, textarea, .interactive');
            interactivity.forEach(el => {
                el.addEventListener('mouseenter', onHoverStart);
                el.addEventListener('mouseleave', onHoverEnd);
            });
        };

        addListeners();

        // Re-add listeners on DOM changes (simple observer)
        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            observer.disconnect();
            const interactivity = document.querySelectorAll('a, button, input, textarea, .interactive');
            interactivity.forEach(el => {
                el.removeEventListener('mouseenter', onHoverStart);
                el.removeEventListener('mouseleave', onHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={ringRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '30px',
                    height: '30px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />
        </>
    );
};

export default CustomCursor;
