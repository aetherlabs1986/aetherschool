import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
    title: "Sobre nosotros | Aether School",
    description:
        "Conoce la historia, valores y equipo de Aether School. Somos el puente entre la IA y las personas que más la necesitan.",
};

export default function SobreNosotros() {
    const values = [
        {
            icon: "❤️",
            title: "Las personas primero",
            desc: "La tecnología no tiene sentido si no mejora la vida de las personas. Cada programa lo diseñamos pensando en quien lo va a recibir.",
        },
        {
            icon: "💎",
            title: "Claridad ante todo",
            desc: "Si algo no se entiende en 5 segundos, lo reescribimos. No usamos tecnicismos para parecer más listos.",
        },
        {
            icon: "⚡",
            title: "Resultados desde el primer día",
            desc: "Nadie sale de un taller nuestro con apuntes teóricos. Sale con algo hecho. El resultado es inmediato o no vale.",
        },
        {
            icon: "🤝",
            title: "Sin dejar a nadie atrás",
            desc: "La brecha digital existe y es real. Parte de nuestra misión es reducirla colaborando con instituciones.",
        },
        {
            icon: "🎯",
            title: "Honestidad sobre la IA",
            desc: "La IA no es magia ni va a solucionar todo. No vendemos humo. Enseñamos lo que funciona de verdad.",
        },
        {
            icon: "🚪",
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
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroSplit}>
                        <div className={styles.heroText}>
                            <span className="tag">Nuestra historia</span>
                            <h1>No somos una academia. Somos un puente.</h1>
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
                        <div className={styles.heroImg}>
                            <Image
                                src="/img-about.png"
                                alt="Fundador de Aether School"
                                width={520}
                                height={600}
                                className={styles.heroPhoto}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ VALORES ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Nuestros valores</h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((v, i) => (
                            <div key={i} className={`card ${styles.valueCard}`}>
                                <span className={styles.valueIcon}>{v.icon}</span>
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
                    <div className="section-header">
                        <h2>Nuestra historia</h2>
                    </div>
                    <div className={styles.timeline}>
                        {timeline.map((t, i) => (
                            <div key={i} className={styles.timelineItem}>
                                <div className={styles.timelineDot} />
                                <div className={styles.timelineContent}>
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
                    <div className="section-header">
                        <h2>El equipo</h2>
                    </div>
                    <div className={styles.teamGrid}>
                        <div className={`card ${styles.teamCard}`}>
                            <div className={styles.teamAvatar}>👤</div>
                            <h3>Víctor Torres</h3>
                            <p className={styles.teamRole}>Fundador</p>
                            <p>
                                Apasionado por hacer que la tecnología llegue a quien más la
                                necesita.
                            </p>
                        </div>
                        <div className={`card ${styles.teamCard}`}>
                            <div className={styles.teamAvatar}>👤</div>
                            <h3>Por confirmar</h3>
                            <p className={styles.teamRole}>Equipo</p>
                            <p>Próximamente.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ AETHER LABS ═══ */}
            <section className={`section ${styles.labsSection}`}>
                <div className="container">
                    <div className={styles.labsInner}>
                        <h2>Aether School forma parte del universo Aether Labs</h2>
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
                        >
                            Conoce Aether Labs
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ MISIÓN ═══ */}
            <section className="section section-darker">
                <div className="container">
                    <div className={styles.missionInner}>
                        <h2>Creemos que la IA debe ser para todos</h2>
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
