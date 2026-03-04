import Link from "next/link";
import { programs } from "@/data/programs";
import styles from "./page.module.css";

export const metadata = {
    title: "Todos nuestros programas | Aether School",
    description:
        "Catálogo completo de programas de formación en inteligencia artificial. Encuentra el programa que es para ti.",
};

export default function Programas() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Todos nuestros programas</h1>
                    <p className={styles.heroSub}>
                        Elige el que es para ti. Si no estás seguro, escríbenos.
                    </p>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container">
                    <div className={styles.programGrid}>
                        {programs.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/programa/${p.slug}`}
                                className={`card ${styles.programCard}`}
                            >
                                <div className={styles.cardTop}>
                                    <span className={styles.cardEmoji}>{p.emoji}</span>
                                    <span className="tag">{p.audienceTag}</span>
                                </div>
                                <h2 className={styles.cardTitle}>{p.title}</h2>
                                <p className={styles.cardDesc}>{p.shortDesc}</p>
                                <span className="btn btn-link">Ver programa →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
