import Link from "next/link";
import { programs } from "@/data/programs";
import Newsletter from "@/components/Newsletter";
import styles from "./page.module.css";

const featured = programs.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            La IA que siempre creíste<br />
            <em>que no era para ti.</em>
          </h1>
          <p className={styles.heroSub}>
            Formación práctica en inteligencia artificial para personas reales.
            Sin tecnicismos. Sin complicaciones. Con resultados desde el primer
            día.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/programas" className="btn btn-primary">
              Ver programas
            </Link>
            <Link href="/instituciones" className="btn btn-secondary">
              Soy una institución o empresa
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PARA QUIÉN ═══ */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2>¿Para quién es Aether School?</h2>
          </div>
          <div className={`grid-3 ${styles.featuredGrid}`}>
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/programa/${p.slug}`}
                className={`card ${styles.programCard}`}
              >
                <span className={styles.programEmoji}>{p.emoji}</span>
                <span className="tag">{p.audienceTag}</span>
                <h3 className={styles.programTitle}>{p.title}</h3>
                <p className={styles.programDesc}>{p.shortDesc}</p>
                <span className={`btn btn-link ${styles.cardLink}`}>
                  Saber más →
                </span>
              </Link>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/programas" className="btn btn-secondary">
              Ver todos los programas
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ POR QUÉ AETHER SCHOOL ═══ */}
      <section className="section section-darker">
        <div className="container">
          <div className="section-header">
            <h2>No somos otra academia de IA</h2>
          </div>
          <div className={`grid-3 ${styles.whyGrid}`}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🎯</div>
              <h3>Para ti, no para todos</h3>
              <p>
                Cada programa está diseñado para una persona concreta. Tú no
                eres un «usuario genérico».
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⚡</div>
              <h3>Nada de teoría. Todo práctico</h3>
              <p>
                Sales con algo hecho, no con apuntes. Desde el primer taller.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📍</div>
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
      <section className={`section ${styles.institutions}`}>
        <div className="container">
          <div className={styles.instInner}>
            <h2>¿Tienes una fundación, asociación o centro educativo?</h2>
            <p className={styles.instDesc}>
              Diseñamos talleres y programas a medida para tu colectivo. Llevamos
              la formación nosotros. Tú solo nos dices quiénes son y qué
              necesitan.
            </p>
            <Link href="/instituciones" className="btn btn-outline-dark">
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ IMPACTO ═══ */}
      <section className="section section-dark">
        <div className="container">
          <div className={`grid-4 ${styles.statsGrid}`}>
            <div className={styles.stat}>
              <span className={styles.statNum}>+200</span>
              <span className={styles.statLabel}>personas formadas</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>+30</span>
              <span className={styles.statLabel}>talleres impartidos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>+10</span>
              <span className={styles.statLabel}>instituciones colaboradoras</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>97%</span>
              <span className={styles.statLabel}>de satisfacción media</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="section section-darker">
        <div className="container">
          <div className="section-header">
            <h2>Lo que dicen quienes ya han pasado por aquí</h2>
          </div>
          <div className={`grid-2 ${styles.testimonialGrid}`}>
            <div className={`card ${styles.testimonial}`}>
              <p className={styles.testimonialText}>
                «Nunca pensé que podría usar la inteligencia artificial. Vine
                sin saber nada y salí habiendo creado cosas que nunca imaginé. Lo
                recomiendo a todas mis amigas.»
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Carmen, 61 años</strong>
                <span className="tag">Empodérate con IA</span>
              </div>
            </div>
            <div className={`card ${styles.testimonial}`}>
              <p className={styles.testimonialText}>
                «Mis alumnos notan la diferencia desde que uso IA para preparar
                mis clases. Antes me llevaba horas lo que ahora hago en minutos.»
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Marcos, profesor de secundaria</strong>
                <span className="tag">Mejora tu material educativo</span>
              </div>
            </div>
            <div className={`card ${styles.testimonial}`}>
              <p className={styles.testimonialText}>
                «Tengo un bar pequeño y no tenía ni idea de redes sociales. Ahora
                gestiono mis reseñas y publico fotos de mis platos yo solo.»
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Paco, hostelero</strong>
                <span className="tag">Más tiempo para tu cocina</span>
              </div>
            </div>
            <div className={`card ${styles.testimonial}`}>
              <p className={styles.testimonialText}>
                «Mi abuelo tiene 74 años y ahora me llama para contarme lo que
                ha descubierto con la IA. Lo que parecía imposible, Aether School
                lo hizo posible.»
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Laura, nieta de participante</strong>
                <span className="tag">Conéctate con el mundo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <Newsletter />
    </>
  );
}
