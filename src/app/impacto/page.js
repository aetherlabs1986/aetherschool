"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};

export default function Impacto() {
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

    const casos = [
        {
            title: "Charlas de emprendimiento en la UAB",
            institution: "UAB + Puente China",
            desc: "Impartimos una charla magistral ante cientos de alumnos de la Universidad Autónoma de Barcelona para hablar sobre el futuro del emprendimiento y cómo la IA cambiará el panorama laboral de las nuevas generaciones.",
            image: "/impacto_uab_talk.png",
            tags: ["Universidad", "Conferencia"],
            stats: "Asistentes: 250+ estudiantes",
            quote: "Una visión refrescante y totalmente realista sobre lo que viene."
        },
        {
            title: "IA Generativa en el aula",
            institution: "Colegio Virolai Barcelona",
            desc: "Diseñamos un programa de 4 semanas para alumnos de 4º de ESO centrado en el uso ético y creativo de herramientas de IA. Los alumnos crearon sus propios proyectos finales usando modelos de lenguaje y generación de imágenes.",
            image: "/impacto_school_workshop.png",
            tags: ["Educación", "Jóvenes"],
            stats: "Alumnos: 120 | Duración: 4 semanas",
            quote: "Proyectos finales impresionantes: aplicaciones, cuentos y arte generativo."
        },
        {
            title: "Digitalización de personas mayores",
            institution: "Fundació Pere Tarrés",
            desc: "Talleres prácticos de introducción a la IA para colectivos de la tercera edad. El objetivo: perder el miedo a la tecnología y aprender a usar la IA para tareas cotidianas y combate de la soledad no deseada.",
            image: "/impacto_elderly_class.png",
            tags: ["Social", "Seniors"],
            stats: "Personas mayores: 60+ | Grupos: 4",
            quote: "98% de satisfacción y deseo de continuar aprendiendo."
        },
        {
            title: "IA para emprendedoras locales",
            institution: "Ajuntament de Badalona",
            desc: "Programa de formación intensiva para mujeres emprendedoras de Badalona. Ayudamos a decenas de negocios locales a automatizar su gestión diaria y mejorar su marketing digital con herramientas gratuitas de IA.",
            image: "/impacto_women_business.png",
            tags: ["Ayuntamientos", "Negocios"],
            stats: "Negocios impulsados: 25+ | Crecimiento trimestral: +40%",
            quote: "Herramientas de marketing instaladas y funcionando en 3 semanas."
        }
    ];

    return (
        <>
            {/* ═══ NUEVA SECCIÓN HERO — DATOS ANTES QUE CASOS ═══ */}
            <section className={styles.hero}>
                <div className="aurora-bg" />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <span className="tag tag-dark reveal">Nuestro Impacto</span>
                    <h1 className="reveal reveal-delay-1" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Los números detrás de <em>nuestra misión</em>.</h1>
                    <p className={`reveal reveal-delay-2 ${styles.heroSub}`} style={{ maxWidth: '800px', margin: '24px auto', fontSize: '1.25rem', color: 'var(--text-light)' }}>
                        No solo formamos personas. Formamos con base científica. Aquí están los datos que respaldan por qué esto importa.
                    </p>
                </div>
            </section>

            {/* ═══ LA CRISIS QUE ABORDAMOS ═══ */}
            <section className="section section-darker" style={{ background: '#0A0A0A', paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">LA CRISIS OCULTA</span>
                        <h2 style={{ marginTop: '16px', color: 'var(--text-light)' }}>El sistema falló. <em>Los datos lo demuestran.</em></h2>
                    </div>
                    <div className="grid-3" style={{ gap: '40px', marginTop: '60px' }}>
                        <div className="reveal">
                            <div style={{ fontSize: '4rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold', lineHeight: '1' }}>39%</div>
                            <p style={{ marginTop: '16px', color: 'var(--text-light)', fontSize: '1.05rem' }}>de las habilidades laborales actuales serán obsoletas antes de 2030 (WEF, 2025)</p>
                        </div>
                        <div className="reveal reveal-delay-1">
                            <div style={{ fontSize: '4rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold', lineHeight: '1' }}>63%</div>
                            <p style={{ marginTop: '16px', color: 'var(--text-light)', fontSize: '1.05rem' }}>de empleadores citan la brecha de habilidades como barrera principal (WEF, 2025)</p>
                        </div>
                        <div className="reveal reveal-delay-2">
                            <div style={{ fontSize: '4rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold', lineHeight: '1' }}>170M</div>
                            <p style={{ marginTop: '16px', color: 'var(--text-light)', fontSize: '1.05rem' }}>nuevos empleos se crearán. 92M se destruirán (WEF, 2025)</p>
                        </div>
                        <div className="reveal">
                            <div style={{ fontSize: '4rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold', lineHeight: '1' }}>78%</div>
                            <p style={{ marginTop: '16px', color: 'var(--text-light)', fontSize: '1.05rem' }}>de los empleadores esperan transformación total de su negocio por IA (WEF, 2025)</p>
                        </div>
                        <div className="reveal reveal-delay-1">
                            <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold', lineHeight: '1.2' }}>Brain Rot</div>
                            <p style={{ marginTop: '16px', color: 'var(--text-light)', fontSize: '1.05rem' }}>Palabra del Año Oxford 2024. El deterioro cognitivo por pantallas es un fenómeno documentado.</p>
                        </div>
                        <div className="reveal reveal-delay-2">
                            <div style={{ fontSize: '4rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold', lineHeight: '1' }}>35,8%</div>
                            <p style={{ marginTop: '16px', color: 'var(--text-light)', fontSize: '1.05rem' }}>universitarios españoles trabajan en empleos de baja cualificación (Fundación CYD, 2024)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ NUESTRA METODOLOGÍA EN NÚMEROS ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">LA CIENCIA DETRÁS</span>
                        <h2 style={{ marginTop: '16px' }}>Nuestra metodología <em>en números</em></h2>
                    </div>
                    <div className="grid-3" style={{ marginTop: '40px' }}>
                        <div className="reveal glass-card" style={{ padding: '32px' }}>
                            <Icon name="BrainCircuit" size={32} color="var(--accent)" style={{ marginBottom: '16px' }} />
                            <h3>Neuropedagogía aplicada</h3>
                            <ul style={{ marginTop: '16px', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
                                <li><strong style={{ color: 'var(--text-light)' }}>+40% retención</strong> con repaso espaciado.</li>
                                <li><strong style={{ color: 'var(--text-light)' }}>+25% memoria de trabajo</strong> con metodologías lúdicas.</li>
                                <li><strong style={{ color: 'var(--text-light)' }}>+30% rendimiento</strong> en ambientes positivos.</li>
                            </ul>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '16px' }}>Fuente: Meta-análisis SAGA 2025 (350 estudios)</p>
                        </div>
                        <div className="reveal reveal-delay-1 glass-card" style={{ padding: '32px' }}>
                            <Icon name="Activity" size={32} color="var(--accent)" style={{ marginBottom: '16px' }} />
                            <h3>NTL Learning Pyramid</h3>
                            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'flex-end', gap: '16px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ height: '40px', width: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px 4px 0 0', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '8px' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>5-10%</span>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '8px' }}>Clase Magistral</span>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ height: '120px', width: '60px', background: 'var(--accent)', borderRadius: '4px 4px 0 0', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '8px' }}>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--bg-primary)', fontWeight: 'bold' }}>75%</span>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', display: 'block', marginTop: '8px' }}>Aprender haciendo</span>
                                </div>
                            </div>
                        </div>
                        <div className="reveal reveal-delay-2 glass-card" style={{ padding: '32px' }}>
                            <Icon name="Dna" size={32} color="var(--accent)" style={{ marginBottom: '16px' }} />
                            <h3>Neuroplasticidad adulta</h3>
                            <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                El mito de que "los adultos no pueden aprender" es falso. El cerebro mantiene la capacidad de crear nuevas conexiones neuronales durante toda la vida.
                            </p>
                            <p style={{ marginTop: '12px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                La clave es un ambiente de aprendizaje seguro, positivo y extremadamente práctico.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-darker">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">CASOS INSTITUCIONALES</span>
                        <h2 style={{ marginTop: '16px' }}>Proyectos donde hemos <em>dejado huella</em></h2>
                    </div>
                    <div className={styles.casesGrid} style={{ marginTop: '40px' }}>
                        {casos.map((caso, i) => (
                            <div key={i} className={`reveal glass-card ${styles.caseCard}`} style={{ transitionDelay: `${(i % 2) * 100}ms` }}>
                                <div className={styles.caseImg}>
                                    <Image src={caso.image} alt={caso.title} fill style={{ objectFit: 'cover' }} />
                                    <div className={styles.caseTags}>
                                        {caso.tags.map(tag => <span key={tag} className={styles.caseTag}>{tag}</span>)}
                                    </div>
                                </div>
                                <div className={styles.caseContent}>
                                    <span className={styles.institution}>{caso.institution}</span>
                                    <h3>{caso.title}</h3>
                                    <p>{caso.desc}</p>
                                    {(caso.stats || caso.quote) && (
                                        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                            {caso.stats && <p style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 'bold', marginBottom: '8px' }}>{caso.stats}</p>}
                                            {caso.quote && <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', fontStyle: 'italic' }}>"{caso.quote}"</p>}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ NUESTRO IMPACTO PROPIO ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">MÉTRICAS</span>
                        <h2 style={{ marginTop: '16px' }}>Nuestro impacto <em>en números</em></h2>
                    </div>
                    <div className="grid-3" style={{ marginTop: '40px', gap: '24px' }}>
                        <div className="reveal glass-card" style={{ padding: '32px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold' }}>+400</div>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '8px' }}>Personas formadas en IA</p>
                        </div>
                        <div className="reveal reveal-delay-1 glass-card" style={{ padding: '32px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold' }}>+40</div>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '8px' }}>Talleres impartidos</p>
                        </div>
                        <div className="reveal reveal-delay-2 glass-card" style={{ padding: '32px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold' }}>4</div>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '8px' }}>Ciudades</p>
                        </div>
                        <div className="reveal glass-card" style={{ padding: '32px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold' }}>4.9<span style={{ fontSize: '2rem', color: 'var(--text-muted)' }}>/5</span></div>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '8px' }}>Valoración media</p>
                        </div>
                        <div className="reveal reveal-delay-1 glass-card" style={{ padding: '32px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold' }}>9</div>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '8px' }}>Programas especializados</p>
                        </div>
                        <div className="reveal reveal-delay-2 glass-card" style={{ padding: '32px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-head)', color: 'var(--accent)', fontWeight: 'bold' }}>4</div>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginTop: '8px' }}>Instituciones colaboradoras</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <div className={`reveal glass-card ${styles.ctaBlock}`}>
                        <h2>¿Quieres que tu institución sea la próxima?</h2>
                        <p>Diseñamos programas a medida que impactan de verdad en las personas.</p>
                        <Link href="/instituciones#formulario" className="btn btn-primary">
                            Hablemos
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
