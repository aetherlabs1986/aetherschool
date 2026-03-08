"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import Testimonial from "@/components/Testimonial";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name] || LucideIcons.HelpCircle;
    return <LucideIcon {...props} />;
};

export default function ProgramaClient({ program }) {
    const [submitted, setSubmitted] = useState(false);
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
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

    // Fallbacks to avoid breaking if data is not fully updated yet
    const hasV2Data = !!program.modules; // V2 flag
    const modulesToRender = program.modules || program.learns || [];
    const ejes = program.ejes || null;
    const useCases = program.useCases || null;
    const successStory = program.successStory || null;
    const scientificBacking = program.scientificBacking || null;
    const takes = program.takes || null;
    const formats = program.formats || null;

    return (
        <div className={styles.programaPage}>
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

            {/* ═══ HERO V2 ═══ */}
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
                    <span className="tag reveal tag-dark">{program.audienceTag}</span>
                    <h1 className={`reveal reveal-delay-1 ${styles.heroTitle}`}>{program.heroTitle || program.title}</h1>
                    <p className={`reveal reveal-delay-2 ${styles.heroDesc}`}>{program.heroSub || program.shortDesc}</p>
                    <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <a href="#contactar" className="btn btn-primary">
                            Inscribirse en el programa
                        </a>
                        <a href="https://wa.me/34627281459" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                            Hablar con nosotros
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ EL PROBLEMA Y LA SOLUCIÓN V2 ═══ */}
            <section className="section section-light">
                <div className="container">
                    <div className={styles.splitLayout}>
                        <div className={`reveal glass-card ${styles.splitCard} card-light`} style={{ borderColor: 'var(--border-subtle)' }}>
                            <span className="tag" style={{ background: 'var(--bg-secondary)', color: 'var(--text-dark)' }}>EL PROBLEMA</span>
                            <h3 style={{ marginTop: '20px', fontSize: '1.8rem', color: 'var(--text-dark)' }}>{program.problemTitle || "El problema"}</h3>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)' }}>{program.problem}</p>
                        </div>
                        <div className={`reveal reveal-delay-1 glass-card ${styles.splitCard}`} style={{ background: 'var(--bg-primary)', borderColor: 'var(--accent)' }}>
                            <span className="tag tag-dark">LA SOLUCIÓN</span>
                            <h3 style={{ marginTop: '20px', fontSize: '1.8rem' }}>{program.solutionTitle || "La solución con IA"}</h3>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>{program.solution}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ LOS TRES EJES (V2) ═══ */}
            {ejes && (
                <section className="section section-darker">
                    <div className="container">
                        <div className="section-header reveal">
                            <span className="tag tag-dark">METODOLOGÍA</span>
                            <h2 style={{ marginTop: '16px' }}>El programa se apoya en <em>3 ejes</em></h2>
                        </div>
                        <div className="grid-3" style={{ marginTop: '40px' }}>
                            <div className="reveal glass-card" style={{ padding: '32px' }}>
                                <Icon name="Brain" size={32} color="var(--accent)" style={{ marginBottom: '16px' }} />
                                <h3>Descúbrete</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{ejes.descubrete}</p>
                            </div>
                            <div className="reveal reveal-delay-1 glass-card" style={{ padding: '32px' }}>
                                <Icon name="BookOpen" size={32} color="var(--accent)" style={{ marginBottom: '16px' }} />
                                <h3>Aprende lo que importa</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{ejes.aprende}</p>
                            </div>
                            <div className="reveal reveal-delay-2 glass-card" style={{ padding: '32px' }}>
                                <Icon name="Zap" size={32} color="var(--accent)" style={{ marginBottom: '16px' }} />
                                <h3>Expándete</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{ejes.expandete}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ═══ MÓDULOS (V2) ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">LO QUE VAS A APRENDER</span>
                        <h2 style={{ marginTop: '16px' }}>El temario es práctico. <em>Desde el primer minuto.</em></h2>
                    </div>

                    <div className={styles.learnInteractive}>
                        <div className={`reveal ${styles.learnNav}`}>
                            {modulesToRender.map((mod, i) => (
                                <button
                                    key={i}
                                    className={`${styles.learnNavItem} ${activeModuleIndex === i ? styles.active : ""}`}
                                    onClick={() => setActiveModuleIndex(i)}
                                // onMouseEnter={() => setActiveModuleIndex(i)}
                                >
                                    <div className={styles.learnNavIcon}>
                                        <Icon name={mod.icon || "CheckCircle2"} size={22} />
                                    </div>
                                    <span className={styles.learnNavTitle}>{hasV2Data ? `Módulo ${i + 1}: ${mod.title}` : mod.title}</span>
                                    <Icon name="ChevronRight" size={18} className={styles.learnNavArrow} />
                                </button>
                            ))}
                        </div>

                        <div className={`reveal reveal-delay-1 ${styles.learnDetail}`}>
                            {modulesToRender[activeModuleIndex] && (
                                <div className={styles.learnDetailContent}>
                                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-light)', marginBottom: '24px' }}>
                                        {modulesToRender[activeModuleIndex].title}
                                    </h3>

                                    {hasV2Data ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                            <div>
                                                <h4 style={{ color: 'var(--accent)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Objetivo específico</h4>
                                                <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>{modulesToRender[activeModuleIndex].objective}</p>
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                                <div className="glass-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
                                                    <h4 style={{ color: 'var(--text-light)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Icon name="BookType" size={20} color="var(--accent)" /> Qué aprendes</h4>
                                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{modulesToRender[activeModuleIndex].learn}</p>
                                                </div>
                                                <div className="glass-card" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)' }}>
                                                    <h4 style={{ color: 'var(--text-light)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Icon name="Trophy" size={20} color="var(--accent)" /> Qué obtienes</h4>
                                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{modulesToRender[activeModuleIndex].get}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '8px' }}>Herramientas que se usan</h4>
                                                <p style={{ color: 'var(--text-light)' }}>{modulesToRender[activeModuleIndex].tools}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{modulesToRender[activeModuleIndex].desc}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ RESPALDO CIENTÍFICO (V2) ═══ */}
            {scientificBacking && (
                <section className="section section-light" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                    <div className="container">
                        <div className="reveal glass-card card-light" style={{ padding: '40px', borderColor: 'var(--border-subtle)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0,180,216,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name="Microscope" size={24} color="var(--accent-hover)" />
                                </div>
                                <h3 style={{ margin: 0, color: 'var(--text-dark)' }}>Respaldo Científico</h3>
                            </div>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)', lineHeight: '1.6' }}>{scientificBacking}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* ═══ CASOS DE USO REALES (V2) ═══ */}
            {useCases && (
                <section className="section section-darker">
                    <div className="container">
                        <div className="section-header reveal">
                            <h2>Casos de uso <em>reales</em></h2>
                            <p>Problemas cotidianos resueltos por alumnos reales de este programa.</p>
                        </div>
                        <div className="grid-2">
                            {useCases.map((uc, i) => (
                                <div key={i} className={`reveal glass-card ${styles.useCaseCard || "useCaseCard"}`} style={{ transitionDelay: `${(i % 2) * 100}ms` }}>
                                    <h4 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '12px' }}>{uc.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{uc.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ═══ HISTORIA DE ÉXITO (V2) o TESTIMONIAL V1 ═══ */}
            {successStory ? (
                <section className="section section-light">
                    <div className="container">
                        <div className="reveal glass-card card-light" style={{ padding: '48px', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <h3 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '24px', fontStyle: 'italic', fontFamily: 'var(--font-head)' }}>"{successStory.quote}"</h3>
                                <p style={{ color: 'var(--accent-hover)', fontWeight: 600, marginBottom: '24px' }}>{successStory.profile}</p>
                                <div style={{ marginBottom: '16px' }}>
                                    <strong style={{ color: 'var(--text-dark)' }}>Situación inicial:</strong>
                                    <p style={{ color: 'var(--text-dark-secondary)', marginTop: '4px' }}>{successStory.initial}</p>
                                </div>
                                <div>
                                    <strong style={{ color: 'var(--text-dark)' }}>Resultado:</strong>
                                    <p style={{ color: 'var(--text-dark-secondary)', marginTop: '4px' }}>{successStory.result}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : program.testimonial && (
                <Testimonial
                    image={program.testimonial.image}
                    role={program.testimonial.role}
                    quote={program.testimonial.quote}
                    name={program.testimonial.name}
                    reverse={program.testimonial.reverse}
                />
            )}

            {/* ═══ SÍ ES PARA TI / NO ES PARA TI (V2) ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="grid-2" style={{ gap: '40px' }}>
                        <div className="reveal glass-card" style={{ padding: '40px', borderColor: 'rgba(0,255,100,0.2)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <Icon name="CheckCircle2" size={32} color="#10B981" />
                                <h3 style={{ margin: 0 }}>SÍ es para ti si...</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {program.forWhoYes ? program.forWhoYes.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '12px' }}>
                                        <Icon name="Check" size={20} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{item}</span>
                                    </li>
                                )) : program.forWho.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '12px' }}>
                                        <Icon name="Check" size={20} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="reveal reveal-delay-1 glass-card" style={{ padding: '40px', borderColor: 'rgba(255,71,87,0.2)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <Icon name="XCircle" size={32} color="#FF4757" />
                                <h3 style={{ margin: 0 }}>NO es para ti si...</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {program.forWhoNo ? program.forWhoNo.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '12px' }}>
                                        <Icon name="X" size={20} color="#FF4757" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item}</span>
                                    </li>
                                )) : (
                                    <li style={{ color: 'var(--text-muted)' }}>No disponible en versión anterior.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ 3 FORMATOS (V2) ═══ */}
            {formats && (
                <section className="section section-light">
                    <div className="container">
                        <div className="section-header reveal">
                            <span className="tag tag-dark">CÓMO ACCEDER</span>
                            <h2 style={{ marginTop: '16px' }}>Tres formatos disponibles</h2>
                        </div>
                        <div className="grid-3">
                            <div className="reveal glass-card card-light" style={{ padding: '32px' }}>
                                <h4 style={{ color: 'var(--accent-hover)', marginBottom: '8px' }}>Taller de Descubrimiento</h4>
                                <span style={{ display: 'inline-block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', background: 'rgba(0,0,0,0.05)', padding: '4px 8px', borderRadius: '4px', marginBottom: '16px' }}>{formats.tallerMeta}</span>
                                <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>{formats.tallerDesc}</p>
                            </div>
                            <div className="reveal reveal-delay-1 glass-card card-light" style={{ padding: '32px', borderColor: 'var(--accent)', borderWidth: '2px' }}>
                                <h4 style={{ color: 'var(--bg-primary)', marginBottom: '8px' }}>Programa Intensivo</h4>
                                <span style={{ display: 'inline-block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', background: 'rgba(0,0,0,0.05)', padding: '4px 8px', borderRadius: '4px', marginBottom: '16px' }}>{formats.intensivoMeta}</span>
                                <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>{formats.intensivoDesc}</p>
                            </div>
                            <div className="reveal reveal-delay-2 glass-card card-light" style={{ padding: '32px' }}>
                                <h4 style={{ color: 'var(--text-dark)', marginBottom: '8px' }}>Comunidad / Continuidad</h4>
                                <span style={{ display: 'inline-block', fontSize: '0.85rem', color: 'var(--text-dark-secondary)', background: 'rgba(0,0,0,0.05)', padding: '4px 8px', borderRadius: '4px', marginBottom: '16px' }}>{formats.comunidadMeta}</span>
                                <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>{formats.comunidadDesc}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ═══ LO QUE TE LLEVAS (V2) ═══ */}
            {takes && (
                <section className="section section-darker">
                    <div className="container">
                        <div className="reveal glass-card" style={{ padding: '48px', textAlign: 'center', borderColor: 'var(--accent)' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '32px' }}>Lo que te llevas</h2>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px', textAlign: 'left' }}>
                                {takes.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                        <Icon name="CheckCircle2" size={24} color="var(--accent)" style={{ flexShrink: 0 }} />
                                        <span style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

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
                                        <input type="text" className="form-input" required placeholder="Tu nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-input" required placeholder="tu@email.com" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Teléfono</label>
                                    <input type="tel" className="form-input" placeholder="600 000 000" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">¿En qué podemos ayudarte?</label>
                                    <textarea className="form-textarea" placeholder="Cuéntanos qué necesitas..." rows={4} />
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
                                <p>Gracias por contactar con Aether School. Nos pondremos en contacto contigo muy pronto.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
