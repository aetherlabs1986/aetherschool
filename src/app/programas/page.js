import Link from "next/link";
import Image from "next/image";
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
                    <div className={styles.featuredGrid}>
                        {programs.map((p, i) => (
                            <Link
                                key={p.slug}
                                href={`/programa/${p.slug}`}
                                className={`${styles.featuredCard} ${i % 2 !== 0 ? styles.featuredReverse : ""}`}
                            >
                                <div className={styles.featuredImg}>
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        width={600}
                                        height={450}
                                        className={styles.featuredPhoto}
                                    />
                                </div>
                                <div className={styles.featuredText}>
                                    <span className="tag">{p.audienceTag}</span>
                                    <h2 className={styles.featuredTitle}>{p.title}</h2>
                                    <p className={styles.featuredDesc}>{p.shortDesc}</p>
                                    <span className="btn btn-primary">Ver programa →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
