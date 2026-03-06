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

export default function Instituciones() {
    const [submitted, setSubmitted] = useState(false);
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

    return (
        <>
            {/* ═══ HERO ═══ */}
            <section className={styles.hero}>
                <div className="aurora-bg" />
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
                    <span className="tag reveal">Para instituciones y empresas</span>
                    <h1 className="reveal reveal-delay-1">¿Quieres llevar la <em>IA</em> a tu comunidad?</h1>
                    <p className={`reveal reveal-delay-2 ${styles.heroSub}`}>
                        Diseñamos talleres y programas a medida para fundaciones,
                        asociaciones, centros educativos y empresas. Llevamos la formación
                        nosotros. Tú nos dices quiénes son.
                    </p>
                    <div className="reveal reveal-delay-3">
                        <a href="#formulario" className="btn btn-primary">
                            Hablemos
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ CÓMO FUNCIONA ═══ */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>¿Cómo trabajamos <em>contigo</em>?</h2>
                    </div>
                    <div className={styles.stepsGrid}>
                        <div className={`reveal glass-card ${styles.step}`}>
                            <div className={styles.stepNum}>1</div>
                            <h3>Nos dices quiénes son</h3>
                            <p>Tu colectivo, cuántas personas, qué necesidades específicas tienen.</p>
                        </div>
                        <div className={`reveal reveal-delay-1 glass-card ${styles.step}`}>
                            <div className={styles.stepNum}>2</div>
                            <h3>Diseñamos el programa</h3>
                            <p>Contenidos, duración, actividades, formato.</p>
                        </div>
                        <div className={`reveal reveal-delay-2 glass-card ${styles.step}`}>
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
                    <div className="section-header reveal">
                        <h2>Trabajamos <em>con</em></h2>
                    </div>
                    <div className={`grid-3 ${styles.clientGrid}`}>
                        {[
                            { icon: "Landmark", text: "Fundaciones y asociaciones sociales" },
                            { icon: "UsersRound", text: "Asociaciones de mujeres y colectivos" },
                            { icon: "GraduationCap", text: "Centros educativos: colegios e institutos" },
                            { icon: "Building2", text: "Ayuntamientos y entidades públicas" },
                            { icon: "Briefcase", text: "Empresas y pymes" },
                            { icon: "HeartPulse", text: "Centros de día y asociaciones de mayores" },
                        ].map((item, i) => (
                            <div key={i} className={`reveal glass-card ${styles.clientCard}`} style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                                <span className={styles.clientIcon}>
                                    <Icon name={item.icon} size={32} strokeWidth={1.5} />
                                </span>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ POR QUÉ ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Por qué <em>Aether School</em></h2>
                    </div>
                    <div className={styles.reasonGrid}>
                        {[
                            "No somos una academia online. Venimos a vosotros.",
                            "Adaptamos el programa a tu colectivo, no al revés.",
                            "Programas para todos: mayores, jóvenes, mujeres, profesionales.",
                            "Resultados visibles desde el primer taller.",
                            "Acompañamiento post-talleres para resolver dudas.",
                            "Materiales didácticos simplificados y accesibles.",
                        ].map((text, i) => (
                            <div key={i} className={`reveal glass-card ${styles.reason}`} style={{ transitionDelay: `${i * 100}ms` }}>
                                <span className={styles.reasonCheck}>
                                    <Icon name="CheckCircle2" size={24} />
                                </span>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FORMULARIO ═══ */}
            <section className="section section-darker" id="formulario" style={{ position: "relative", overflow: "hidden" }}>
                <div className="aurora-bg aurora-bg-alt" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className={`reveal glass-card ${styles.formBlock}`}>
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
