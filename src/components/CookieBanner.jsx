"use client";
import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("aether-cookies");
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("aether-cookies", "all");
        setVisible(false);
    };

    const configure = () => {
        localStorage.setItem("aether-cookies", "essential");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.banner} role="dialog" aria-label="Configuración de cookies">
            <div className={styles.bannerContent}>
                <p className={styles.bannerText}>
                    Usamos cookies para mejorar tu experiencia. Puedes aceptarlas todas o configurar cuáles quieres.
                </p>
                <div className={styles.bannerActions}>
                    <button className={`btn btn-primary ${styles.btnAccept}`} onClick={accept}>
                        Aceptar todas
                    </button>
                    <button className={`btn btn-secondary ${styles.btnConfig}`} onClick={configure}>
                        Solo esenciales
                    </button>
                </div>
            </div>
        </div>
    );
}
