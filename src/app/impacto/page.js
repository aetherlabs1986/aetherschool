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
            tags: ["Universidad", "Conferencia"]
        },
        {
            title: "IA Generativa en el aula",
            institution: "Colegio Virolai Barcelona",
            desc: "Diseñamos un programa de 4 semanas para alumnos de 4º de ESO centrado en el uso ético y creativo de herramientas de IA. Los alumnos crearon sus propios proyectos finales usando modelos de lenguaje y generación de imágenes.",
            image: "/impacto_school_workshop.png",
            tags: ["Educación", "Jóvenes"]
        },
        {
            title: "Digitalización de personas mayores",
            institution: "Fundació Pere Tarrés",
            desc: "Talleres prácticos de introducción a la IA para colectivos de la tercera edad. El objetivo: perder el miedo a la tecnología y aprender a usar la IA para tareas cotidianas y combate de la soledad no deseada.",
            image: "/impacto_elderly_class.png",
            tags: ["Social", "Seniors"]
        },
        {
            title: "IA para emprendedoras locales",
            institution: "Ajuntament de Badalona",
            desc: "Programa de formación intensiva para mujeres emprendedoras de Badalona. Ayudamos a 25 negocios locales a automatizar su gestión diaria y mejorar su marketing digital con herramientas gratuitas de IA.",
            image: "/impacto_women_business.png",
            tags: ["Ayuntamientos", "Negocios"]
        }
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className="aurora-bg" />
                <div className="container">
                    <span className="tag reveal">Nuestro Impacto</span>
                    <h1 className="reveal reveal-delay-1">Historias de <em>transformación</em> real</h1>
                    <p className={`reveal reveal-delay-2 ${styles.heroSub}`}>
                        No solo enseñamos tecnología. Construimos puentes entre las personas
                        y el futuro. Estos son algunos de los proyectos donde hemos dejado huella.
                    </p>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container">
                    <div className={styles.casesGrid}>
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
                                </div>
                            </div>
                        ))}
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
