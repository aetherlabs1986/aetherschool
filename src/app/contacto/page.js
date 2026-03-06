"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};

export default function Contacto() {
    const [submitted, setSubmitted] = useState(false);
    const [motivo, setMotivo] = useState("");
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
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const whatsappMsg = encodeURIComponent(
        "Hola, me interesa saber más sobre Aether School."
    );

    return (
        <>
            {/* ═══ HERO ═══ */}
            <section className={styles.hero}>
                <div className="aurora-bg" />
                <div className={styles.heroBg} aria-hidden="true">
                    <Image
                        src="/img-contacto.png"
                        alt=""
                        fill
                        className={styles.heroBgImg}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className="reveal">¿Cómo prefieres que hablemos?</h1>
                    <p className={`reveal reveal-delay-1 ${styles.heroSub}`}>
                        Elige la forma que más te convenga. Estamos aquí para ayudarte.
                    </p>
                </div>
            </section>

            {/* ═══ OPCIONES DE CONTACTO ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className={`grid-3 ${styles.optionsGrid}`}>
                        <a
                            href={`https://wa.me/34627281459?text=${whatsappMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`reveal glass-card ${styles.optionCard} ${styles.whatsapp}`}
                        >
                            <span className={styles.optionIcon}>
                                <Icon name="MessageCircle" size={32} />
                            </span>
                            <h3>WhatsApp</h3>
                            <p>La forma más rápida. Te respondemos en minutos.</p>
                            <span className="btn btn-whatsapp" style={{ width: 'auto' }}>WhatsApp →</span>
                        </a>

                        <a href="mailto:hola@aetherlabs.es" className={`reveal reveal-delay-1 glass-card ${styles.optionCard}`}>
                            <span className={styles.optionIcon}>
                                <Icon name="Mail" size={32} />
                            </span>
                            <h3>Email</h3>
                            <p>hola@aetherlabs.es</p>
                            <span className="btn btn-secondary">Enviar email</span>
                        </a>

                        <a href="#formulario" className={`reveal reveal-delay-2 glass-card ${styles.optionCard}`}>
                            <span className={styles.optionIcon}>
                                <Icon name="FileText" size={32} />
                            </span>
                            <h3>Formulario</h3>
                            <p>Cuéntanos qué necesitas con detalle.</p>
                            <span className="btn btn-secondary">Ir al formulario</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ FORMULARIO ═══ */}
            <section className="section section-darker" id="formulario" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="aurora-bg aurora-bg-alt" />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className={`reveal glass-card ${styles.formBlock}`}>
                        <h2>Escríbenos</h2>

                        {/* Selector de motivo */}
                        <div className={styles.motivoSelector}>
                            {[
                                "Quiero apuntarme a un programa",
                                "Represento una institución o empresa",
                                "Quiero más información sobre un programa concreto",
                                "Otra consulta",
                            ].map((m) => (
                                <button
                                    key={m}
                                    type="button"
                                    className={`${styles.motivoBtn} ${motivo === m ? styles.motivoActive : ""
                                        }`}
                                    onClick={() => setMotivo(m)}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>

                        {!submitted ? (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label">Nombre</label>
                                        <input type="text" className="form-input" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-input" placeholder="tu@email.com" required />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label">Teléfono</label>
                                        <input type="tel" className="form-input" placeholder="600 000 000" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Programa de interés</label>
                                        <select className="form-input">
                                            <option value="">Selecciona (opcional)</option>
                                            <option>Empodérate con IA</option>
                                            <option>Conéctate con el mundo</option>
                                            <option>Aprende a crear lo que imaginas</option>
                                            <option>Descubre quién quieres ser</option>
                                            <option>Monta tu negocio</option>
                                            <option>Mejora tu material educativo</option>
                                            <option>Más tiempo para tu cocina</option>
                                            <option>Dedícate a la medicina</option>
                                            <option>Prepara tu equipo</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Mensaje</label>
                                    <textarea
                                        className="form-textarea"
                                        rows={5}
                                        placeholder="Cuéntanos lo que necesites..."
                                    />
                                </div>
                                <label className="form-checkbox">
                                    <input type="checkbox" required />
                                    <span>
                                        He leído y acepto la{" "}
                                        <Link href="/politica-de-privacidad">
                                            política de privacidad
                                        </Link>{" "}
                                        de Aether School.
                                    </span>
                                </label>
                                <button type="submit" className="btn btn-primary">
                                    Enviar
                                </button>
                            </form>
                        ) : (
                            <div className="form-success">
                                ✅ Recibido. Te contactamos en menos de 24h.
                            </div>
                        )}

                        <p className={styles.trustText}>
                            Te respondemos en menos de 24 horas. Si es urgente, escríbenos por
                            WhatsApp.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
