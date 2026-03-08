"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [bannerVisible, setBannerVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {bannerVisible && (
                <div className={styles.topBanner}>
                    <span className={styles.desktopBanner}>🎓 Próximo taller Empodérate con IA — Badalona · Plazas limitadas · <a href="https://wa.me/34627281459" target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp &rarr;</a></span>
                    <span className={styles.mobileBanner}>Próximo taller Badalona · <a href="https://wa.me/34627281459" target="_blank" rel="noopener noreferrer">WhatsApp &rarr;</a></span>
                    <button className={styles.closeBanner} onClick={() => setBannerVisible(false)} aria-label="Cerrar banner">&times;</button>
                </div>
            )}
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${!bannerVisible ? styles.headerNoBanner : ""}`}>
                <div className={`container ${styles.headerInner}`}>
                    <Link href="/" className={styles.logo} aria-label="Aether School - Inicio">
                        <Image
                            src="/logo-aether-school.png"
                            alt="Aether School"
                            width={140}
                            height={48}
                            className={styles.logoImg}
                            priority
                        />
                    </Link>

                    <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Navegación principal">
                        <Link href="/programas" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                            Programas
                        </Link>
                        <Link href="/instituciones" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                            Instituciones
                        </Link>
                        <Link href="/sobre-nosotros" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                            Sobre nosotros
                        </Link>
                        <Link href="/impacto" className={styles.navLink} onClick={() => setMenuOpen(false)}>
                            Impacto
                        </Link>
                        <Link href="/contacto" className={`btn btn-primary ${styles.navCta}`} onClick={() => setMenuOpen(false)}>
                            Contacto
                        </Link>
                    </nav>

                    <button
                        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>
        </>
    );
}
