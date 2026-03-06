"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import Testimonial from "@/components/Testimonial";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};

export default function ProgramaClient({ program }) {
    const [submitted, setSubmitted] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const [activeLearnIndex, setActiveLearnIndex] = useState(0);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Advanced dynamic icon rendering for '¿Es para mí?'
    const forWhoIcons = ["User", "Target", "Lightbulb"];

    return (
        <>
            {/* ═══ STICKY CTA ═══ */}
            <div className={styles.stickyCtaBar}>
                <div className={`container ${styles.stickyCtaInner}`}>
                    <div className={styles.stickyText}>
                        <span className={styles.stickyTitle}>{program.title}</span>
                    </div>
                    <a href="#contactar" className="btn btn-primary">
                        Comenzar ahora
                    </a>
                </div>
            </div>

            {/* ═══ HERO PREMIUM ═══ */}
            <section className={styles.hero}>
                <div className={`aurora-bg ${styles.heroAurora}`} />
                <div className={styles.heroBg} aria-hidden="true">
                    <Image
                        src={program.image}
                        alt=""
                        fill
                        className={styles.heroBgImg}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={`container ${styles.heroContent}`}>
                    <span className="tag reveal">{program.audienceLabel}</span>
                    <h1 className={`reveal reveal-delay-1 ${styles.heroTitle}`}>{program.title}</h1>
                    <p className={`reveal reveal-delay-2 ${styles.heroDesc}`}>{program.shortDesc}</p>
                    <div className="reveal reveal-delay-3">
                        <a href="#contactar" className="btn btn-primary">
                            Inscribirse en el programa
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ PROBLEMA Y SOLUCIÓN (SPLIT) ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className={styles.splitLayout}>
                        <div className={`reveal glass-card ${styles.splitCard}`}>
                            <div className={styles.splitIcon}>
                                <Icon name="AlertCircle" size={28} />
                            </div>
                            <h3>El problema</h3>
                            <p>{program.problem}</p>
                        </div>
                        <div className={`reveal reveal-delay-1 glass-card ${styles.splitCard} ${styles.splitCardSuccess}`}>
                            <div className={styles.splitIcon}>
                                <Icon name="Sparkles" size={28} />
                            </div>
                            <h3>La solución con IA</h3>
                            <p>{program.solution}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ QUÉ VAS A APRENDER (INTERACTIVE GRID) ═══ */}
            <section className="section section-darker">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>¿Qué vas a aprender?</h2>
                        <p>Resultados prácticos desde el primer día.</p>
                    </div>

                    <div className={styles.learnInteractive}>
                        <div className={`reveal ${styles.learnNav}`}>
                            {program.learns.map((item, i) => (
                                <button
                                    key={i}
                                    className={`${styles.learnNavItem} ${activeLearnIndex === i ? styles.active : ""}`}
                                    onClick={() => setActiveLearnIndex(i)}
                                    onMouseEnter={() => setActiveLearnIndex(i)}
                                >
                                    <div className={styles.learnNavIcon}>
                                        <Icon name={item.icon || "CheckCircle2"} size={22} />
                                    </div>
                                    <span className={styles.learnNavTitle}>{item.title}</span>
                                    <Icon name="ChevronRight" size={18} className={styles.learnNavArrow} />
                                </button>
                            ))}
                        </div>

                        <div className={`reveal reveal-delay-2 ${styles.learnDetail}`}>
                            <div className={styles.learnDetailContent} key={activeLearnIndex}>
                                <div className={styles.learnDetailIcon}>
                                    <Icon name={program.learns[activeLearnIndex].icon || "CheckCircle2"} size={40} />
                                </div>
                                <h3 className={styles.learnDetailTitle}>
                                    {program.learns[activeLearnIndex].title}
                                </h3>
                                <p className={styles.learnDetailDesc}>
                                    {program.learns[activeLearnIndex].desc}
                                </p>
                                <div className={styles.learnDetailGraphic}>
                                    {/* Abstract decorative element for premium feel */}
                                    <div className={styles.graphicCircle} />
                                    <div className={styles.graphicDots} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Version: Simple accordion or stack */}
                    <div className={styles.learnMobile}>
                        {program.learns.map((item, i) => (
                            <div key={i} className={`reveal glass-card ${styles.learnMobileItem}`}>
                                <div className={styles.learnNavIcon}>
                                    <Icon name={item.icon || "CheckCircle2"} size={22} />
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PARA QUIÉN ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Este programa es para ti si...</h2>
                    </div>
                    <div className={styles.forWhoGrid}>
                        {program.forWho.map((item, i) => (
                            <div key={i} className={`reveal glass-card ${styles.forWhoCard}`} style={{ transitionDelay: `${i * 100}ms` }}>
                                <span className={styles.forWhoIcon}>
                                    <Icon name={forWhoIcons[i] || "Star"} size={28} strokeWidth={1.5} />
                                </span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ TESTIMONIO (Optional) ═══ */}
            {program.testimonial && (
                <Testimonial
                    image={program.testimonial.image}
                    role={program.testimonial.role}
                    quote={program.testimonial.quote}
                    name={program.testimonial.name}
                    reverse={program.testimonial.reverse}
                />
            )}

            {/* ═══ CÓMO FUNCIONA ═══ */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>El proceso es sencillo</h2>
                    </div>
                    <div className={styles.stepsGrid}>
                        <div className="reveal glass-card step">
                            <div className={styles.stepNum}>1</div>
                            <h3>Nos contactas</h3>
                            <p>Escríbenos por WhatsApp, formulario o email. Sin compromiso.</p>
                        </div>
                        <div className="reveal reveal-delay-1 glass-card step">
                            <div className={styles.stepNum}>2</div>
                            <h3>Diseñamos el plan</h3>
                            <p>Adaptamos el contenido, la duración y el formato a lo que necesitáis.</p>
                        </div>
                        <div className="reveal reveal-delay-2 glass-card step">
                            <div className={styles.stepNum}>3</div>
                            <h3>Empiezas a crear</h3>
                            <p>Presencial u online, con todo el material incluido. Te llevas resultados contigo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CTA / FORMULARIO ═══ */}
            <section className={`section section-dark ${styles.ctaSection}`} id="contactar">
                <div className="aurora-bg aurora-bg-alt" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className={`reveal glass-card ${styles.ctaBlock}`}>
                        <div className={styles.ctaHeader}>
                            <h2>¿Listo para empezar?</h2>
                            <p className={styles.ctaDesc}>
                                Haz que la IA trabaje para ti. Escríbenos y damos el primer paso juntos.
                            </p>
                        </div>

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
                                    <label className="form-label">¿En qué podemos ayudarte?</label>
                                    <textarea
                                        className="form-textarea"
                                        placeholder="Cuéntanos qué necesitas..."
                                        rows={4}
                                    />
                                </div>
                                <label className="form-checkbox">
                                    <input type="checkbox" required />
                                    <span>
                                        He leído y acepto la{" "}
                                        <Link href="/politica-de-privacidad" className="btn-link">
                                            política de privacidad
                                        </Link>
                                    </span>
                                </label>
                                <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "16px" }}>
                                    Enviar solicitud
                                </button>
                            </form>
                        ) : (
                            <div className={styles.formSuccess}>
                                <Icon name="CheckCircle" size={48} color="var(--accent)" style={{ marginBottom: 16 }} />
                                <h3>¡Mensaje enviado!</h3>
                                <p>
                                    Gracias por contactar con Aether School. Nos pondremos en
                                    contacto contigo muy pronto.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
