"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};

export default function SobreNosotrosClient() {
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

    const values = [
        {
            icon: "Heart",
            title: "Las personas primero",
            desc: "La tecnología no tiene sentido si no mejora la vida de las personas. Cada programa lo diseñamos pensando en quien lo va a recibir.",
        },
        {
            icon: "Diamond",
            title: "Claridad ante todo",
            desc: "Si algo no se entiende en 5 segundos, lo reescribimos. No usamos tecnicismos para parecer más listos.",
        },
        {
            icon: "Zap",
            title: "Resultados desde el primer día",
            desc: "Nadie sale de un taller nuestro con apuntes teóricos. Sale con algo hecho. El resultado es inmediato o no vale.",
        },
        {
            icon: "Handshake",
            title: "Sin dejar a nadie atrás",
            desc: "La brecha digital existe y es real. Parte de nuestra misión es reducirla colaborando con instituciones.",
        },
        {
            icon: "Target",
            title: "Honestidad sobre la IA",
            desc: "La IA no es magia ni va a solucionar todo. No vendemos humo. Enseñamos lo que funciona de verdad.",
        },
        {
            icon: "DoorOpen",
            title: "Somos el puente, no el muro",
            desc: "No somos guardianes de la tecnología. Somos la puerta de entrada. Queremos que cualquiera siga aprendiendo solo.",
        },
    ];

    const timeline = [
        {
            year: "2023",
            text: "Nace Aether Labs. Empezamos implementando IA para empresas. Vimos que había un problema más grande: la gente no sabía cómo usarla.",
        },
        {
            year: "2024",
            text: "Primeras formaciones. Empezamos a dar talleres puntuales a equipos de empresa. La respuesta nos sorprendió.",
        },
        {
            year: "2025",
            text: "Nace la idea de Aether School. Decidimos separar la formación en una marca propia para hacerlo bien.",
        },
        {
            year: "2026",
            text: "Primeros programas oficiales. Empezamos con instituciones en Badalona y abrimos el catálogo completo.",
        },
        {
            year: "Futuro",
            text: "Llegar a más ciudades, más colectivos y más instituciones. La IA para todos, no para pocos.",
        },
    ];

    return (
        <>
            {/* ═══ HERO - STORY + IMAGE ═══ */}
            <section className={styles.hero} style={{ position: "relative", overflow: "hidden" }}>
                <div className="aurora-bg" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className={styles.heroSplit}>
                        <div className={styles.heroText}>
                            <span className="tag reveal">Nuestra historia</span>
                            <h1 className="reveal reveal-delay-1">No somos una academia. Somos un <em>puente</em>.</h1>
                            <div className="reveal reveal-delay-2">
                                <div className={styles.storyText}>
                                    <p>
                                        Aether School nació de una frustración sencilla: la inteligencia
                                        artificial estaba cambiando el mundo, pero la formación seguía
                                        siendo para técnicos, para empresas grandes y para gente que ya
                                        sabía de qué iba el tema.
                                    </p>
                                    <p>
                                        Nosotros vimos que quedaba fuera mucha gente. La señora de 68 años
                                        que quería entender qué era eso que le contaba su nieto. El
                                        cocinero de 40 que quería que su restaurante no se quedara atrás.
                                        La profesora que pasaba 3 horas corrigiendo lo que podría hacer en
                                        20 minutos.
                                    </p>
                                    <p>
                                        Para esa gente existe Aether School. Para llevarles la tecnología
                                        más avanzada del mundo explicada de forma humana, sin barreras, sin
                                        tecnicismos y con resultados desde el primer día.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`reveal glass-card ${styles.heroImg}`} style={{ padding: 0, overflow: 'hidden' }}>
                            <Image
                                src="/img-about.png"
                                alt="Fundador de Aether School"
                                width={520}
                                height={600}
                                className={styles.heroPhoto}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ VALORES ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Nuestros <em>valores</em></h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((v, i) => (
                            <div key={i} className={`reveal glass-card ${styles.valueCard}`} style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                                <span className={styles.valueIcon}>
                                    <Icon name={v.icon} size={32} color="var(--accent)" strokeWidth={1.5} />
                                </span>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ TIMELINE ═══ */}
            <section className="section section-darker">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Nuestra <em>historia</em></h2>
                    </div>
                    <div className={styles.timeline}>
                        {timeline.map((t, i) => (
                            <div key={i} className={`reveal ${styles.timelineItem}`} style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className={styles.timelineDot} />
                                <div className={`glass-card ${styles.timelineContent}`} style={{ borderLeft: '4px solid var(--accent)' }}>
                                    <span className={styles.timelineYear}>{t.year}</span>
                                    <p>{t.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ EQUIPO ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>El <em>equipo</em></h2>
                        <p>Las personas detrás de Aether School.</p>
                    </div>
                    <div className={styles.teamGrid}>
                        <div className={`reveal ${styles.teamCard}`}>
                            <div className={styles.teamAvatarWrap}>
                                <Image src="/Víctor.png" alt="Víctor" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                            </div>
                            <div className={styles.teamInfo}>
                                <h3>Víctor</h3>
                                <p className={styles.teamRole}>CEO &amp; Formador</p>
                                <p>Fundador y formador. Apasionado por acercar la IA a quien más la necesita.</p>
                            </div>
                        </div>
                        <div className={`reveal reveal-delay-1 ${styles.teamCard}`}>
                            <div className={styles.teamAvatarWrap}>
                                <Image src="/David.jpg" alt="David" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                            </div>
                            <div className={styles.teamInfo}>
                                <h3>David</h3>
                                <p className={styles.teamRole}>Head of Partnerships &amp; Formador</p>
                                <p>Relaciones Internacionales. Construye los puentes entre Aether School y las instituciones.</p>
                            </div>
                        </div>
                        <div className={`reveal reveal-delay-2 ${styles.teamCard}`}>
                            <div className={styles.teamAvatarWrap}>
                                <Image src="/Xavi.png" alt="Xavi" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                            </div>
                            <div className={styles.teamInfo}>
                                <h3>Xavi</h3>
                                <p className={styles.teamRole}>Business Development Manager</p>
                                <p>Detecta oportunidades, abre puertas y coloca a Aether School donde aporta más valor.</p>
                            </div>
                        </div>
                        <div className={`reveal reveal-delay-3 ${styles.teamCard}`}>
                            <div className={styles.teamAvatarWrap}>
                                <Image src="/Maria.png" alt="María" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                            </div>
                            <div className={styles.teamInfo}>
                                <h3>María</h3>
                                <p className={styles.teamRole}>Directora Pedagógica</p>
                                <p>Profesora y musicoterapeuta. Diseña cómo enseñamos a los más pequeños.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ AETHER LABS ═══ */}
            <section className="section section-darker" style={{ position: "relative", overflow: "hidden" }}>
                <div className="aurora-bg aurora-bg-alt" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className={`reveal ${styles.labsInner}`}>
                        <h2>Aether School forma parte del universo <em>Aether Labs</em></h2>
                        <p>
                            Detrás de Aether School está Aether Labs, un estudio especializado
                            en implementación de inteligencia artificial para empresas y
                            profesionales. Esa experiencia real en proyectos de IA es lo que
                            hace que nuestra formación sea diferente: no enseñamos teoría de
                            libro, enseñamos lo que aplicamos cada día.
                        </p>
                        <a
                            href="https://aetherlabs.es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark"
                            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                        >
                            Conoce Aether Labs
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ MISIÓN ═══ */}
            <section className="section section-darker">
                <div className="container">
                    <div className={`reveal glass-card ${styles.missionInner}`}>
                        <h2>Creemos que la <em>IA</em> debe ser para todos</h2>
                        <p>
                            Vivimos en un momento histórico. La inteligencia artificial está
                            cambiando cómo trabajamos, cómo aprendemos y cómo vivimos. Pero no
                            todo el mundo tiene acceso a ese conocimiento.
                        </p>
                        <p>
                            Hay una brecha creciente entre quienes saben usar estas
                            herramientas y quienes no. Y esa brecha no es de inteligencia, es
                            de oportunidad.
                        </p>
                        <p>
                            En Aether School trabajamos activamente para cerrar esa brecha.
                        </p>
                        <blockquote className={styles.quote}>
                            «La tecnología más avanzada del mundo no vale nada si solo llega a
                            los que ya lo tienen todo. Nosotros llevamos la IA a donde más
                            falta hace.»
                        </blockquote>
                    </div>
                </div>
            </section>
        </>
    );
}
