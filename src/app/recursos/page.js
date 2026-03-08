import Link from "next/link";
import { articulos } from "../../data/articulos";
import DescargablesSection from "./DescargablesSection";
import styles from "./page.module.css";

export const metadata = {
    title: "Blog y recursos gratuitos | Aether School",
    description: "Artículos, guías y recursos prácticos sobre inteligencia artificial para todo el mundo. Sin tecnicismos.",
};

const leadMagnets = [
    { slug: "10-prompts-empezar", title: "10 prompts para empezar con la IA hoy mismo", audience: "Público general" },
    { slug: "kit-profesor-5-herramientas", title: "Kit del profesor: 5 herramientas de IA para el aula", audience: "Docentes" },
    { slug: "manual-ia-mayores", title: "Manual de IA para mayores: tu primera semana paso a paso", audience: "Personas mayores" },
    { slug: "montar-negocio-ia", title: "Lo que necesitas para montar tu negocio con IA", audience: "Emprendedores" },
    { slug: "menu-semanal-saludable-ia", title: "Menú semanal saludable con IA", audience: "Mujeres 40-60" },
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
                        {articulos.map((a, i) => (
                            <Link href={`/recursos/${a.slug}`} key={i} className={`card ${styles.articleCard}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                                <span className="tag">{a.categoria}</span>
                                <h3 className={styles.articleTitle} style={{ marginTop: '16px', marginBottom: '8px', flexGrow: 1 }}>{a.titulo}</h3>
                                <span className={styles.articleTime} style={{ marginBottom: '16px' }}>{a.tiempoLectura} de lectura</span>
                                <span className="btn btn-link" style={{ alignSelf: 'flex-start', padding: 0 }}>Leer artículo →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <DescargablesSection />
        </>
    );
}
