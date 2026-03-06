"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { programs } from "@/data/programs";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import TestimonialCard from "@/components/TestimonialCard";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
};

const featured = [
  { ...programs[0], image: "/img-mujeres.png", highlight: "Para mujeres que quieren sacarle partido a la tecnología" },
  { ...programs[1], image: "/img-mayores.png", highlight: "Para personas mayores que quieren estar al día" },
  { ...programs[3], image: "/img-jovenes.png", highlight: "Para jóvenes de 13 a 18 años" },
];

export default function Home() {
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

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className={styles.hero} style={{ position: "relative", overflow: "hidden" }}>
        <div className="aurora-bg" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.heroSplit}>
            <div className={styles.heroText}>
              <h1 className={`reveal ${styles.heroTitle}`}>
                Conectamos a las personas con la <em className={styles.whiteSerif}>tecnología.</em>
              </h1>
              <div className="reveal reveal-delay-1">
                <p className={styles.heroSub}>
                  Formación práctica en inteligencia artificial para personas reales.
                  Sin tecnicismos. Sin complicaciones. Con resultados desde el primer
                  día.
                </p>
              </div>
              <div className={`reveal reveal-delay-2 ${styles.heroCtas}`}>
                <Link href="/programas" className="btn btn-primary">
                  Ver programas
                </Link>
                <Link href="/instituciones" className="btn btn-secondary">
                  Para instituciones
                </Link>
              </div>
            </div>
            <div className={styles.heroImg}>
              <Image
                src="/img-hero-v2.png"
                alt="Personas aprendiendo IA"
                width={700}
                height={700}
                className={styles.heroPhoto}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMPACTO / STATS ═══ */}
      <section className={`section section-light`}>
        <div className="container">
          <div className={`grid-4 ${styles.statsGrid}`}>
            <div className={`reveal ${styles.statCard}`}>
              <span className={styles.statNum}>+200</span>
              <span className={styles.statLabel}>personas formadas</span>
            </div>
            <div className={`reveal reveal-delay-1 ${styles.statCard}`}>
              <span className={styles.statNum}>+30</span>
              <span className={styles.statLabel}>talleres impartidos</span>
            </div>
            <div className={`reveal reveal-delay-2 ${styles.statCard}`}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>formación práctica</span>
            </div>
            <div className={`reveal reveal-delay-3 ${styles.statCard}`}>
              <span className={styles.statNum}>4.9/5</span>
              <span className={styles.statLabel}>valoración media</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PARA QUIÉN ═══ */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2>¿Para quién es <em>Aether School</em>?</h2>
          </div>
          <div className={styles.featuredGrid}>
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={`/programa/${p.slug}`}
                className={`reveal glass-card ${styles.featuredCard} ${i % 2 !== 0 ? styles.featuredReverse : ""}`}
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className={styles.featuredImg}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={520}
                    height={380}
                    className={styles.featuredPhoto}
                  />
                  <div className={styles.imgOverlay} />
                </div>
                <div className={styles.featuredText}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconCircle}>
                      <Icon name={p.icon} size={24} strokeWidth={1.5} />
                    </div>
                    <span className="tag">{p.audienceTag}</span>
                  </div>
                  <h3 className={styles.featuredTitle}>{p.title}</h3>
                  <p className={styles.featuredHighlight}>{p.highlight}</p>
                  <p className={styles.featuredDesc}>{p.shortDesc}</p>
                  <span className="btn btn-primary">Saber más →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className={`reveal ${styles.sectionCta}`}>
            <Link href="/programas" className="btn btn-secondary">
              Ver todos los programas
            </Link>
          </div>
        </div>
      </section>



      {/* ═══ TESTIMONIOS ═══ */}
      <section className="section section-darker" style={{ position: "relative", overflow: "hidden" }}>
        <div className="aurora-bg aurora-bg-alt" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header reveal">
            <h2>Lo que dicen quienes <em>ya lo vivieron</em></h2>
          </div>
          <div className={`${styles.testimonialsGrid} reveal`}>
            <TestimonialCard
              image="/testimonio-1.png"
              name="Diana Martínez"
              role="Emprendedora digital"
              quote="Llevo años intentando entender cómo funciona la IA para mi negocio. En un taller aprendí más que en meses viendo vídeos. Totalmente recomendable."
            />
            <TestimonialCard
              image="/testimonio-2.png"
              name="Carmen López"
              role="Profesora de Primaria"
              quote="Pensaba que esto era solo para jóvenes o informáticos. Ahora uso la IA cada semana en clase y me ahorra horas de trabajo."
            />
            <TestimonialCard
              image="/testimonio-3.png"
              name="Roberto Fernández"
              role="Hostelero, Barcelona"
              quote="Lo mejor es que en ningún momento me sentí perdido. Todo muy práctico y adaptado a lo que necesita alguien como yo."
            />
            <TestimonialCard
              image="/testimonio-1.png"
              name="Marta Soler"
              role="Abogada"
              quote="La formación de Aether School es transformadora. He automatizado procesos que antes me llevaban todo el día."
            />
          </div>
        </div>
      </section>

      {/* ═══ POR QUÉ AETHER SCHOOL ═══ */}
      <section className="section section-dark" style={{ position: "relative", overflow: "hidden" }}>
        <div className="aurora-bg" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header reveal">
            <h2>No somos otra academia de <em>IA</em></h2>
          </div>
          <div className={`grid-3 ${styles.whyGrid}`}>
            <div className={`reveal glass-card ${styles.whyCard}`}>
              <div className={styles.whyIconWrapper}>
                <Icon name="Target" size={32} color="var(--accent)" />
              </div>
              <h3>Para ti, no para todos</h3>
              <p>
                Cada programa está diseñado para una persona concreta. Tú no
                eres un «usuario genérico».
              </p>
            </div>
            <div className={`reveal reveal-delay-1 glass-card ${styles.whyCard}`}>
              <div className={styles.whyIconWrapper}>
                <Icon name="Zap" size={32} color="var(--accent)" />
              </div>
              <h3>Nada de teoría. Todo práctico</h3>
              <p>
                Sales con algo hecho, no con apuntes. Desde el primer taller.
              </p>
            </div>
            <div className={`reveal reveal-delay-2 glass-card ${styles.whyCard}`}>
              <div className={styles.whyIconWrapper}>
                <Icon name="MapPin" size={32} color="var(--accent)" />
              </div>
              <h3>Lo llevamos a donde estás</h3>
              <p>
                Colaboramos con instituciones, fundaciones y centros para que la
                formación llegue a ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PARA INSTITUCIONES ═══ */}
      <section className={`section section-light`}>
        <div className="container">
          <div className="section-header reveal">
            <h2>¿Tienes una <em>fundación</em>, asociación o centro educativo?</h2>
            <p className={styles.instDesc}>
              Diseñamos talleres y programas a medida para tu colectivo. Llevamos
              la formación nosotros. Tú solo nos dices quiénes son y qué necesitan.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/instituciones" className="btn btn-primary">
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PREGUNTAS FRECUENTES ═══ */}
      <FAQ />

      {/* ═══ NEWSLETTER ═══ */}
      <Newsletter />
    </>
  );
}
