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
            desc: "La tecnología no tiene sentido si no mejora la vida de las personas. Cada programa lo diseñamos pensando en quien lo va a recibir. Siempre nos preguntamos: ¿mejora la vida de quien lo recibe? Si la respuesta es no, no lo hacemos.",
        },
        {
            icon: "Diamond",
            title: "Claridad ante todo",
            desc: "Si algo no se entiende en 5 segundos, lo reescribimos. No usamos tecnicismos para parecer más listos. Hemos reescrito materiales 10 veces hasta que alguien que nunca había oído hablar de IA los entendía a la primera.",
        },
        {
            icon: "Zap",
            title: "Resultados desde el primer día",
            desc: "Nadie sale de un taller nuestro con apuntes teóricos. Sale con algo hecho. El resultado es inmediato o no vale. La ciencia lo confirma: el aprendizaje que no genera acción inmediata se olvida en 24 horas. Nuestra obsesión es que algo cambie el primer día.",
        },
        {
            icon: "Handshake",
            title: "Sin dejar a nadie atrás",
            desc: "La brecha digital existe y es real. Parte de nuestra misión es reducirla colaborando con instituciones. Trabajamos con instituciones precisamente para llegar a quienes no pueden pagar un curso online de 300€.",
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
            text: "Nace Aether Labs. Implementando IA para empresas, vemos el problema más grande: las personas que iban a usar esas implementaciones no entendían qué tenían delante.",
        },
        {
            year: "2024",
            text: "Primeros talleres puntuales para equipos de empresa. La respuesta superó las expectativas: personas de 50 años usaban IA por primera vez y no querían parar.",
        },
        {
            year: "2025",
            text: "Nace Aether School como marca independiente. Si esto funciona, hay que hacerlo bien: con identidad propia, metodología propia y misión propia.",
        },
        {
            year: "2026",
            text: "Primeros programas oficiales. Colaboraciones con Fundació Pere Tarrés, Ajuntament de Badalona, Colegio Virolai y UAB. Catálogo de 9 programas.",
        },
        {
            year: "Futuro",
            text: "Llegar a más ciudades, más colectivos. La IA para todos. No para los que ya lo tienen todo.",
        },
    ];

    return (
        <>
            {/* ═══ EL MANIFIESTO ═══ */}
            <section className="section section-darker" style={{ background: '#0A0A0A', paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
                <div className="container">
                    <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <p style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', margin: 0 }}>
                            Salimos del colegio sin saber qué se nos da bien.
                        </p>
                        <p style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', margin: 0 }}>
                            Sin saber cocinar, gestionar dinero, ni manejar el estrés.
                        </p>
                        <p style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', margin: 0 }}>
                            Con años de historia memorizada y cero horas de vida real.
                        </p>
                        <p style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', margin: 0 }}>
                            El sistema no falló accidentalmente.
                        </p>
                        <p style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', margin: 0 }}>
                            Está diseñado para otro mundo, uno que ya no existe.
                        </p>
                        <p style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', margin: 0 }}>
                            Somos la primera generación que involuciona.
                        </p>
                        <p style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', margin: 0 }}>
                            No porque seamos peores, sino porque nadie nos está preparando para lo que viene.
                        </p>
                        <p style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', margin: 0 }}>
                            Aether School existe para cambiar eso.
                        </p>
                        <p style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', margin: 0 }}>
                            No somos otra academia.
                        </p>
                        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontWeight: 'bold', color: 'var(--accent)', margin: '40px 0 0 0' }}>
                            Somos la escuela que el sistema nunca fue.
                        </h2>
                    </div>
                </div>
            </section>

            {/* ═══ HERO - STORY + IMAGE ═══ */}
            <section className={styles.hero} style={{ position: "relative", overflow: "hidden" }}>
                <div className="aurora-bg" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className={styles.heroSplit}>
                        <div className={styles.heroText}>
                            <span className="tag tag-dark reveal">Nuestra historia</span>
                            <h1 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', marginBottom: '16px' }}>No somos una academia. Somos un <em>puente</em>.</h1>
                            <p className="reveal reveal-delay-1" style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '32px' }}>
                                Nació de una frustración. Creció de una convicción. Existe porque hay demasiada gente que se queda fuera.
                            </p>
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

            {/* ═══ METODOLOGÍA (LOS TRES EJES) ═══ */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">NUESTRA METODOLOGÍA</span>
                        <h2 style={{ marginTop: '16px' }}>La escuela que el sistema nunca fue tiene una metodología que <em>el sistema nunca tuvo</em>.</h2>
                        <p style={{ marginTop: '16px', fontSize: '1.1rem', maxWidth: '800px', margin: '16px auto 0' }}>
                            No llegamos a la formación en IA desde la tecnología. Llegamos desde las personas. Años de ver cómo se enseñaba nos dieron una certeza: el problema no era falta de información. Era falta del método correcto.
                        </p>
                    </div>

                    <div className="grid-3" style={{ marginTop: '60px' }}>
                        <div className="reveal glass-card card-light" style={{ padding: '32px', borderColor: 'var(--border-subtle)' }}>
                            <Icon name="Brain" size={32} color="var(--accent)" style={{ marginBottom: '24px' }} />
                            <h3>1. Descúbrete</h3>
                            <p style={{ marginTop: '16px', color: 'var(--text-dark)' }}>
                                Autoconocimiento, talento propio, neuroplasticidad. Empezamos por la persona, no por la herramienta. La tecnología no tiene sentido si la persona no sabe quién es ni qué quiere amplificar. La IA de nada sirve si no tienes nada que multiplicar.
                            </p>
                            <p style={{ marginTop: '12px', color: 'var(--text-dark-secondary)', fontSize: '0.9rem' }}>
                                <strong>Respaldo:</strong> Carol Dweck (Stanford). La neuroplasticidad persiste durante toda la vida adulta. Crear un ambiente positivo mejora el rendimiento cognitivo un 30%.
                            </p>
                        </div>
                        <div className="reveal reveal-delay-1 glass-card card-light" style={{ padding: '32px', borderColor: 'var(--border-subtle)' }}>
                            <Icon name="BookOpen" size={32} color="var(--accent)" style={{ marginBottom: '24px' }} />
                            <h3>2. Aprende lo que importa</h3>
                            <p style={{ marginTop: '16px', color: 'var(--text-dark)' }}>
                                Lo que el sistema nunca enseñó. Habilidades reales de vida, trabajo y comunicación. No enseñamos qué es un LLM ni cómo funciona un transformer. Enseñamos a resolver problemas concretos con IA. El aprendizaje es 100% práctico y orientado a casos reales.
                            </p>
                            <p style={{ marginTop: '12px', color: 'var(--text-dark-secondary)', fontSize: '0.9rem' }}>
                                <strong>Respaldo:</strong> Aprender haciendo genera un 90% de retención frente al 5-10% de una clase magistral (NTL).
                            </p>
                        </div>
                        <div className="reveal reveal-delay-2 glass-card card-light" style={{ padding: '32px', borderColor: 'var(--border-subtle)' }}>
                            <Icon name="Zap" size={32} color="var(--accent)" style={{ marginBottom: '24px' }} />
                            <h3>3. Expándete con tecnología</h3>
                            <p style={{ marginTop: '16px', color: 'var(--text-dark)' }}>
                                La IA como multiplicador de lo que ya eres. No como sustituto. Augmented Intelligence — la IA amplifica capacidades humanas en lugar de reemplazarlas.
                            </p>
                            <p style={{ marginTop: '12px', color: 'var(--text-dark-secondary)', fontSize: '0.9rem' }}>
                                <strong>Respaldo:</strong> Las habilidades del futuro (pensamiento analítico, creatividad y resiliencia) son todas ampliables con IA, ninguna sustituible por ella (WEF).
                            </p>
                        </div>
                    </div>

                    <div className="reveal" style={{ textAlign: 'center', marginTop: '60px' }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '24px' }}>
                            Todo esto está respaldado por más de 350 estudios científicos analizados. No enseñamos de oídas.
                        </p>
                        <a href="/impacto" className="btn btn-outline" style={{ color: 'var(--text-dark)', borderColor: 'var(--text-dark-secondary)' }}>
                            Ver la base científica completa <Icon name="ArrowRight" size={16} style={{ display: 'inline', marginLeft: '8px' }} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ TIMELINE ═══ */}
            {/* ═══ VALORES ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">EN QUÉ CREEMOS</span>
                        <h2 style={{ marginTop: '16px' }}>Nuestros <em>valores</em></h2>
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
                        <span className="tag tag-dark">NUESTRO CAMINO</span>
                        <h2 style={{ marginTop: '16px' }}>Nuestra <em>historia</em></h2>
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
                                <p className={styles.teamRole}>Fundador y CEO</p>
                                <p>Fundador de Aether Labs y Aether School. 11+ años de experiencia en marketing, producto, tecnología y formación. Apasionado por llevar la IA a quienes más la necesitan y menos acceso tienen.</p>
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

            {/* ═══ LA PROMESA (NUEVA SECCIÓN FINAL) ═══ */}
            <section className="section section-darker" style={{ background: '#0A0A0A', textAlign: 'center' }}>
                <div className="container">
                    <div className="reveal glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 40px', borderColor: 'var(--accent)' }}>
                        <h2 style={{ color: 'var(--text-light)', marginBottom: '32px' }}>Nuestra promesa es sencilla.</h2>
                        <blockquote style={{ fontSize: '2rem', fontStyle: 'italic', color: 'var(--accent)', fontFamily: 'var(--font-head)', marginBottom: '40px', lineHeight: '1.4' }}>
                            "Si vienes a un taller de Aether School, saldrás habiendo hecho algo que creías imposible para ti. Eso es todo. El resto viene solo."
                        </blockquote>
                        <a href="/programa" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                            Ver programas <Icon name="ArrowRight" size={20} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
