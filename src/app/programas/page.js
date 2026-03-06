"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { programs } from "@/data/programs";
import styles from "./page.module.css";

// Helper to render Lucide icons dynamically from string names in programs.js
const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};

export default function Programas() {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <>
            <section className={styles.hero}>
                <div className="aurora-bg" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <h1 className="reveal">Todos nuestros programas</h1>
                    <p className={`reveal reveal-delay-1 ${styles.heroSub}`}>
                        Elige el que es para ti. Si no estás seguro, escríbenos.
                    </p>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container">
                    <div className={styles.featuredGrid}>
                        {programs.map((p, i) => (
                            <Link
                                key={p.slug}
                                href={`/programa/${p.slug}`}
                                className={`reveal glass-card ${styles.featuredCard} ${i % 2 !== 0 ? styles.featuredReverse : ""
                                    }`}
                                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                            >
                                <div className={styles.featuredImg}>
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        width={600}
                                        height={450}
                                        className={styles.featuredPhoto}
                                    />
                                    <div className={styles.imgOverlay} />
                                </div>
                                <div className={styles.featuredText}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.iconCircle}>
                                            <Icon name={p.icon} size={24} strokeWidth={1.5} />
                                        </div>
                                        <span className="tag">{p.audienceTag}</span>
                                    </div>
                                    <h2 className={styles.featuredTitle}>{p.title}</h2>
                                    <p className={styles.featuredDesc}>{p.shortDesc}</p>
                                    <span className={`btn btn-primary ${styles.ctaBtn}`}>
                                        Ver programa →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
