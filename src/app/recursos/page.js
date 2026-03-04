import styles from "./page.module.css";

export const metadata = {
    title: "Blog y recursos gratuitos | Aether School",
    description: "Artículos, guías y recursos prácticos sobre inteligencia artificial para todo el mundo. Sin tecnicismos.",
};

const articles = [
    { cat: "Personas mayores", title: "Cómo hablar con la IA: tu primer paso para no sentirte perdido", time: "5 min" },
    { cat: "Personas mayores", title: "5 cosas que puedes pedirle a la inteligencia artificial desde el móvil", time: "4 min" },
    { cat: "Profesores", title: "Cómo preparar una clase completa en 15 minutos con IA", time: "6 min" },
    { cat: "Profesores", title: "Las 3 herramientas de IA que todo profesor debería conocer en 2026", time: "5 min" },
    { cat: "Hostelería", title: "Cómo responder reseñas de Google con IA y no morir en el intento", time: "4 min" },
    { cat: "Hostelería", title: "Crea fotos de tus platos que den hambre, sin fotógrafo", time: "5 min" },
    { cat: "Jóvenes", title: "Las 10 profesiones del futuro que el sistema educativo no te enseña", time: "7 min" },
    { cat: "Emprendedores", title: "Crea tu logo, tu web y tu contenido en un día, sin gastar dinero", time: "6 min" },
    { cat: "General", title: "¿Es seguro usar la IA? Lo que nadie te explica con claridad", time: "5 min" },
];

const leadMagnets = [
    { title: "10 prompts para empezar con la IA hoy mismo", audience: "Público general" },
    { title: "Kit del profesor: 5 herramientas de IA para el aula", audience: "Docentes" },
    { title: "Manual de IA para mayores: tu primera semana paso a paso", audience: "Personas mayores" },
    { title: "Lo que necesitas para montar tu negocio con IA", audience: "Emprendedores" },
    { title: "Menú semanal saludable con IA", audience: "Mujeres 40-60" },
];

export default function Recursos() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Aprende gratis. Sin tecnicismos.</h1>
                    <p className={styles.heroSub}>
                        Artículos, guías y recursos prácticos sobre inteligencia artificial para todo el mundo.
                    </p>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Artículos</h2>
                    </div>
                    <div className={styles.articlesGrid}>
                        {articles.map((a, i) => (
                            <div key={i} className={`card ${styles.articleCard}`}>
                                <span className="tag">{a.cat}</span>
                                <h3 className={styles.articleTitle}>{a.title}</h3>
                                <span className={styles.articleTime}>{a.time} de lectura</span>
                                <span className="btn btn-link">Próximamente →</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-darker">
                <div className="container">
                    <div className="section-header">
                        <h2>Recursos descargables</h2>
                        <p>Guías gratuitas para empezar con la IA. Deja tu email y descárgalas al instante.</p>
                    </div>
                    <div className={styles.leadsGrid}>
                        {leadMagnets.map((l, i) => (
                            <div key={i} className={`card ${styles.leadCard}`}>
                                <span className={styles.leadIcon}>📄</span>
                                <h3 className={styles.leadTitle}>{l.title}</h3>
                                <span className="tag">{l.audience}</span>
                                <span className="btn btn-link">Próximamente →</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
