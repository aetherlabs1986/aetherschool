"use client";
import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }) {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const startValue = 0;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const increment = Math.min(progress / duration, 1);

            // easeOutExpo
            const easeProgress = increment === 1 ? 1 : 1 - Math.pow(2, -10 * increment);
            const currentValue = Math.floor(startValue + easeProgress * (end - startValue));

            setCount(currentValue);

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <span ref={countRef} style={{ display: 'inline-block', fontVariantNumeric: 'tabular-nums' }}>
            {prefix}{count}{suffix}
        </span>
    );
}
