import { notFound } from "next/navigation";
import Link from "next/link";
import { articulos } from "../../../data/articulos";
import * as LucideIcons from "lucide-react";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};

export async function generateMetadata({ params }) {
    const articulo = articulos.find(a => a.slug === params.slug);
    if (!articulo) {
        return { title: 'Artículo no encontrado | Aether School' };
    }
    return {
        title: `${articulo.titulo} | Aether School`,
        description: articulo.meta_description,
        keywords: articulo.keyword,
    };
}

export default function Articulo({ params }) {
    const articulo = articulos.find(a => a.slug === params.slug);

    if (!articulo) {
        notFound();
    }

    return (
        <article>
            <section className={styles.articleHero}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <Link href="/recursos" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', textDecoration: 'none' }}>
                        <Icon name="ArrowLeft" size={16} /> Volver a recursos
                    </Link>
                    <br />
                    <span className={styles.category}>{articulo.categoria}</span>
                    <h1 className={styles.title}>{articulo.titulo}</h1>
                    <div className={styles.meta}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Icon name="Clock" size={16} /> {articulo.tiempoLectura}
                        </span>
                        <span>•</span>
                        <span>Aether School</span>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div
                        className={styles.contentWrapper}
                        dangerouslySetInnerHTML={{ __html: articulo.contenido }}
                    />
                </div>
            </section>
        </article>
    );
}
