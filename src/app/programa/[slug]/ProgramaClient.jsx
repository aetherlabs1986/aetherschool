"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function ProgramaClient({ program }) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            {/* ═══ HERO ═══ */}
            <section className={styles.hero}>
                <div className="container">
                    <span className="tag">{program.audienceLabel}</span>
                    <h1 className={styles.heroTitle}>{program.title}</h1>
                    <p className={styles.heroDesc}>{program.shortDesc}</p>
                    <a href="#contactar" className="btn btn-primary">
                        Quiero apuntarme
                    </a>
                </div>
            </section>

            {/* ═══ QUÉ VAS A APRENDER ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <h2 className={styles.sectionTitle}>¿Qué vas a aprender?</h2>
                    <ul className={styles.learnList}>
                        {program.learns.map((item, i) => (
                            <li key={i} className={styles.learnItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ═══ PARA QUIÉN ═══ */}
            <section className="section section-darker">
                <div className="container">
                    <h2 className={styles.sectionTitle}>¿Es para mí?</h2>
                    <div className={styles.forWhoGrid}>
                        {program.forWho.map((item, i) => (
                            <div key={i} className={`card ${styles.forWhoCard}`}>
                                <span className={styles.forWhoIcon}>
                                    {["👤", "🎯", "💡"][i] || "✨"}
                                </span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CÓMO FUNCIONA ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <h2 className={styles.sectionTitle}>¿Cómo funciona?</h2>
                    <div className={styles.stepsGrid}>
                        <div className={styles.step}>
                            <div className={styles.stepNum}>1</div>
                            <h3>Nos contactas</h3>
                            <p>
                                Escríbenos por WhatsApp, formulario o email. Sin compromiso.
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNum}>2</div>
                            <h3>Diseñamos el taller</h3>
                            <p>
                                Adaptamos el contenido, la duración y el formato a lo que
                                necesitáis.
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNum}>3</div>
                            <h3>Empezamos</h3>
                            <p>
                                Presencial u online, con todo el material incluido. Resultados
                                desde el primer día.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CTA / FORMULARIO ═══ */}
            <section className="section section-darker" id="contactar">
                <div className="container">
                    <div className={styles.ctaBlock}>
                        <h2>¿Te interesa?</h2>
                        <p className={styles.ctaDesc}>
                            Escríbenos y te contamos todo. Sin compromiso.
                        </p>

                        {!submitted ? (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            required
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            required
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Teléfono</label>
                                    <input
                                        type="tel"
                                        className="form-input"
                                        placeholder="600 000 000"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Mensaje (opcional)</label>
                                    <textarea
                                        className="form-textarea"
                                        placeholder="Cuéntanos lo que necesites..."
                                        rows={4}
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
                    </div>
                </div>
            </section>
        </>
    );
}
