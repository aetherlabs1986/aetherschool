"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Instituciones() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            {/* ═══ HERO ═══ */}
            <section className={styles.hero}>
                <div className={styles.heroBg} aria-hidden="true">
                    <Image
                        src="/img-instituciones.png"
                        alt=""
                        fill
                        className={styles.heroBgImg}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={`container ${styles.heroContent}`}>
                    <span className="tag">Para instituciones y empresas</span>
                    <h1>¿Quieres llevar la IA a tu comunidad?</h1>
                    <p className={styles.heroSub}>
                        Diseñamos talleres y programas a medida para fundaciones,
                        asociaciones, centros educativos y empresas. Llevamos la formación
                        nosotros. Tú nos dices quiénes son.
                    </p>
                    <a href="#formulario" className="btn btn-primary">
                        Hablemos
                    </a>
                </div>
            </section>

            {/* ═══ CÓMO FUNCIONA ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>¿Cómo trabajamos contigo?</h2>
                    </div>
                    <div className={styles.stepsGrid}>
                        <div className={`card ${styles.step}`}>
                            <div className={styles.stepNum}>1</div>
                            <h3>Nos cuentas quiénes son</h3>
                            <p>Tu colectivo, cuántas personas, qué necesitan.</p>
                        </div>
                        <div className={`card ${styles.step}`}>
                            <div className={styles.stepNum}>2</div>
                            <h3>Diseñamos el programa</h3>
                            <p>Contenidos, duración, actividades, formato.</p>
                        </div>
                        <div className={`card ${styles.step}`}>
                            <div className={styles.stepNum}>3</div>
                            <h3>Lo impartimos nosotros</h3>
                            <p>Presencial o en remoto, con materiales incluidos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ PARA QUIÉN ═══ */}
            <section className="section section-darker">
                <div className="container">
                    <div className="section-header">
                        <h2>Trabajamos con</h2>
                    </div>
                    <div className={`grid-3 ${styles.clientGrid}`}>
                        {[
                            { icon: "🏛️", text: "Fundaciones y asociaciones sociales" },
                            { icon: "👩‍👩‍👧", text: "Asociaciones de mujeres y colectivos" },
                            { icon: "🏫", text: "Centros educativos: colegios e institutos" },
                            { icon: "🏢", text: "Ayuntamientos y entidades públicas" },
                            { icon: "💼", text: "Empresas y pymes" },
                            { icon: "🏥", text: "Centros de día y asociaciones de mayores" },
                        ].map((item, i) => (
                            <div key={i} className={`card ${styles.clientCard}`}>
                                <span className={styles.clientIcon}>{item.icon}</span>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ POR QUÉ ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Por qué Aether School</h2>
                    </div>
                    <div className={styles.reasonGrid}>
                        {[
                            "No somos una academia online. Venimos a vosotros.",
                            "Adaptamos el programa a tu colectivo, no al revés.",
                            "Tenemos programas para todos: mayores, jóvenes, mujeres, profesionales.",
                            "Resultados visibles desde el primer taller.",
                        ].map((text, i) => (
                            <div key={i} className={styles.reason}>
                                <span className={styles.reasonCheck}>✓</span>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FORMULARIO ═══ */}
            <section className="section section-darker" id="formulario">
                <div className="container">
                    <div className={styles.formBlock}>
                        <h2>¿Hablamos?</h2>

                        {!submitted ? (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label">Nombre y apellidos</label>
                                        <input type="text" className="form-input" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">
                                            Nombre de la organización
                                        </label>
                                        <input type="text" className="form-input" required />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-input" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Teléfono</label>
                                        <input type="tel" className="form-input" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        ¿A qué colectivo va dirigido?
                                    </label>
                                    <input type="text" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        ¿Cuántas personas aproximadamente?
                                    </label>
                                    <input type="text" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Mensaje (opcional)</label>
                                    <textarea className="form-textarea" rows={4} />
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
                                    Enviar solicitud
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
