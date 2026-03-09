"use client";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { programs } from "@/data/programs";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
};

export default function Home() {
  return (
    <>
      {/* ═══ HERO V2 ═══ */}
      <section className={styles.hero} style={{ position: "relative", overflow: "hidden" }}>
        <div className="aurora-bg" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.heroSplit}>
            <div className={styles.heroText}>
              <h1 className={`reveal reveal-delay-1 ${styles.heroTitle}`}>
                La IA para las personas que el sistema olvidó.
              </h1>
              <div className="reveal reveal-delay-2">
                <p className={styles.heroSub}>
                  Formación práctica en inteligencia artificial para personas reales.
                  Sin tecnicismos. Sin complicaciones. Con resultados desde el primer taller.
                </p>
              </div>
              <div className={`reveal reveal-delay-3 ${styles.heroCtas}`}>
                <Link href="/programas" className="btn btn-primary">
                  Ver programas &rarr;
                </Link>
                <Link href="/instituciones" className="btn btn-outline-dark" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                  Para instituciones &rarr;
                </Link>
              </div>
            </div>
            <div className={`reveal reveal-delay-1 ${styles.heroImg}`}>
              <Image
                src="/img-hero-v2.png"
                alt="Personas aprendiendo IA en Aether School"
                width={700}
                height={700}
                className={styles.heroPhoto}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
              <div className={styles.heroOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BANDA DE STATS ═══ */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={`reveal ${styles.statCard}`}>
              <span className={styles.statNum}><AnimatedCounter prefix="+" end={400} /></span>
              <span className={styles.statLabel}>personas formadas</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={`reveal reveal-delay-1 ${styles.statCard}`}>
              <span className={styles.statNum}><AnimatedCounter prefix="+" end={40} /></span>
              <span className={styles.statLabel}>talleres impartidos</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={`reveal reveal-delay-2 ${styles.statCard}`}>
              <span className={styles.statNum}><AnimatedCounter end={100} suffix="%" /></span>
              <span className={styles.statLabel}>formación práctica</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={`reveal reveal-delay-3 ${styles.statCard}`}>
              <span className={styles.statNum}><AnimatedCounter end={4.9} duration={1500} suffix="/5" /></span>
              <span className={styles.statLabel}>valoración media</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={`reveal reveal-delay-3 ${styles.statCard}`}>
              <span className={styles.statNum}><AnimatedCounter end={4} duration={1000} /></span>
              <span className={styles.statLabel}>ciudades activas</span>
            </div>
          </div>
          <div className={styles.scrollDownIndicator}>
            <Icon name="ChevronDown" size={24} color="var(--accent)" />
          </div>
        </div>
      </section>

      {/* ═══ EL MANIFIESTO ═══ */}
      <section className="section section-light" style={{ background: '#FFFFFF', padding: '100px 0' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '680px' }}>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', lineHeight: '1.2', color: '#1A1A2E', marginBottom: '24px', fontWeight: 'bold' }}>
              Salimos del colegio sin saber qué se nos da bien.
            </h2>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#4A4A6A', marginBottom: '24px', lineHeight: '1.7' }}>
              Sin saber cocinar, gestionar dinero, ni manejar el estrés. Con años de historia memorizada y cero horas de vida real.
            </p>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#4A4A6A', marginBottom: '40px', lineHeight: '1.7' }}>
              El sistema no falló accidentalmente. Está diseñado para otro mundo, uno que ya no existe.
            </p>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#1A1A2E', marginBottom: '20px', fontWeight: 'bold' }}>
              Somos la primera generación que involuciona.
            </h3>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#4A4A6A', marginBottom: '40px', lineHeight: '1.7' }}>
              No porque seamos peores, sino porque nadie nos está preparando para lo que viene.
            </p>

            <div style={{ paddingLeft: '20px', borderLeft: '3px solid var(--accent)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#1A1A2E', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', margin: 0 }}>
                Aether School existe para cambiar eso.
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#1A1A2E', margin: '8px 0 0 0', fontWeight: 'bold' }}>
                No somos otra academia.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ EL PROBLEMA ═══ */}
      <section className="section section-light">
        <div className="container">
          <div className={styles.problemHeader}>
            <span className="tag reveal">EL CONTEXTO QUE NADIE EXPLICA</span>
            <h2 className="reveal reveal-delay-1" style={{ marginTop: '16px', marginBottom: '16px' }}>El mundo cambió. La formación no.</h2>
            <p className="reveal reveal-delay-2" style={{ maxWidth: '800px', margin: '0 auto 48px auto' }}>
              El 39% de las habilidades laborales actuales serán obsoletas antes de 2030. La IA está cambiando cómo trabajamos, cómo aprendemos y cómo vivimos. Pero la formación disponible sigue siendo para técnicos, para empresas grandes y para gente que ya sabe de qué va el tema. El resto — la mayoría — se queda fuera.
            </p>
          </div>
          <div className={styles.problemGrid}>
            <div className="reveal glass-card card-light" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className={styles.problemData}><AnimatedCounter end={39} suffix="%" /></span>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)' }}>de las habilidades actuales serán obsoletas antes de 2030.</p>
              <span className={styles.problemSource}>Fuente: WEF Future of Jobs 2025.</span>
            </div>
            <div className="reveal reveal-delay-1 glass-card card-light" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className={styles.problemData}><AnimatedCounter end={63} suffix="%" /></span>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)' }}>de los empleadores citan la brecha de habilidades como su barrera número uno de crecimiento.</p>
              <span className={styles.problemSource}>Fuente: WEF 2025.</span>
            </div>
            <div className="reveal reveal-delay-2 glass-card card-light" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className={styles.problemData} style={{ fontSize: '3.2rem', letterSpacing: '-0.02em', color: 'var(--accent-hover)' }}>Brain Rot</span>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)' }}>Elegida Palabra del Año Oxford 2024. El deterioro cognitivo por pantallas pasivas ya es un fenómeno cultural documentado.</p>
              <span className={styles.problemSource}>Fuente: Oxford, 37.000 votos.</span>
            </div>
          </div>
          <div className="reveal reveal-delay-3" style={{ textAlign: 'center', marginTop: '60px', maxWidth: '800px', margin: '40px auto 0' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', fontWeight: '500' }}>
              Aether School existe porque si la IA va a cambiar todo, entonces todo el mundo merece acceder a ese conocimiento. No solo los que ya lo tienen todo.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMAS (PARA QUIÉN SOMOS) ═══ */}
      <section className="section section-dark" id="programas">
        <div className="container">
          <div className="section-header reveal">
            <h2>Elige tu <em>punto de partida.</em></h2>
            <p>Cada programa está diseñado para una persona concreta. No para todos a la vez.</p>
          </div>
          <div className={styles.programGrid}>
            {programs.slice(0, 9).map((p, i) => (
              <Link
                key={p.slug}
                href={`/programa/${p.slug}`}
                className={`reveal glass-card ${styles.programCard}`}
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className={styles.programImgWrapper}>
                  <Image
                    src={p.image || "/img-placeholder.png"}
                    alt={p.title}
                    width={400}
                    height={250}
                    className={styles.programImg}
                  />
                  <div className={styles.programOverlay} />
                  <span className={`tag ${styles.programTag}`}>{p.audienceTag}</span>
                </div>
                <div className={styles.programCardBody}>
                  <div className={styles.programHeader}>
                    <div className={styles.iconCircleSmall}>
                      <Icon name={p.icon || "Star"} size={20} />
                    </div>
                    <h3 className={styles.programTitle}>{p.title}</h3>
                  </div>
                  <p className={styles.programDesc}>{p.shortDesc}</p>
                  <span className={styles.programLink}>Ver programa &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
          <div className={`reveal ${styles.sectionCta}`}>
            <Link href="/programas" className="btn btn-secondary">
              Ver todos los programas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ LOS TRES EJES (NUEVA) ═══ */}
      <section className="section section-darker" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="aurora-bg aurora-bg-alt" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header reveal" style={{ textAlign: 'left', maxWidth: '800px' }}>
            <span className="tag">NUESTRA METODOLOGÍA</span>
            <h2 style={{ marginTop: '16px', marginBottom: '16px' }}>No enseñamos IA. <em>Enseñamos personas.</em></h2>
            <p style={{ marginLeft: '0' }}>Cada programa de Aether School se construye sobre tres ejes que el sistema educativo tradicional ignora completamente.</p>
          </div>

          <div className="grid-3" style={{ marginTop: '40px' }}>
            <div className="reveal glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Icon name="Brain" size={40} color="var(--accent)" />
              <h3>Descúbrete</h3>
              <p style={{ fontSize: '0.95rem' }}>La tecnología no tiene sentido si no sabes qué quieres amplificar. Empezamos por romper el muro del "yo no puedo".</p>
            </div>
            <div className="reveal reveal-delay-1 glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Icon name="BookOpen" size={40} color="var(--accent)" />
              <h3>Aprende lo que importa</h3>
              <p style={{ fontSize: '0.95rem' }}>No teoría de libro. Habilidades reales de vida. Aprenderás resolviendo tus propios problemas, no ejercicios inventados.</p>
            </div>
            <div className="reveal reveal-delay-2 glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Icon name="Zap" size={40} color="var(--accent)" />
              <h3>Expándete con tecnología</h3>
              <p style={{ fontSize: '0.95rem' }}>La IA no te reemplaza. Multiplica lo que ya eres. Aquí aprendes a usarla como un superpoder, no como una muleta.</p>
            </div>
          </div>

          <div className="reveal reveal-delay-3" style={{ marginTop: '40px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Metodología basada en meta-análisis SAGA 2025 (350 estudios), curva del olvido de Ebbinghaus y neuroplasticidad adulta documentada.</p>
          </div>
        </div>
      </section>

      {/* ═══ LOS 3 FORMATOS (NUEVA) ═══ */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header reveal">
            <span className="tag tag-dark">¿CÓMO FUNCIONA?</span>
            <h2 style={{ marginTop: '16px' }}>Tres formas de <em>empezar.</em></h2>
            <p>Desde el primer paso hasta el acompañamiento continuo. Tú eliges tu ritmo.</p>
          </div>
          <div className="grid-3">
            <div className="reveal glass-card card-light" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="tag">PARA EMPEZAR</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                <Icon name="PlayCircle" size={28} color="var(--accent-hover)" />
                <h3 style={{ marginBottom: 0 }}>Taller de Descubrimiento</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0', fontSize: '0.9rem', color: 'var(--text-dark-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Duración:</strong> 90 minutos</li>
                <li><strong>Precio:</strong> Gratuito / Simbólico</li>
              </ul>
              <p style={{ fontSize: '0.95rem', flex: 1 }}>Una sesión presencial donde sales habiendo creado algo con IA que creías imposible para ti. Sin instalar nada. Desde el móvil que ya tienes. Ideal para dar el primer paso.</p>
              <Link href="/programas" className="btn btn-outline-dark" style={{ marginTop: '16px' }}>Reservar plaza &rarr;</Link>
            </div>

            <div className="reveal reveal-delay-1 glass-card card-light" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px', borderColor: 'var(--accent)', borderWidth: '2px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)' }}>
                <span className="tag tag-dark" style={{ background: 'var(--bg-primary)' }}>MÁS POPULAR</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                <Icon name="Layers" size={28} color="var(--bg-primary)" />
                <h3 style={{ marginBottom: 0 }}>Programa Intensivo</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0', fontSize: '0.9rem', color: 'var(--text-dark-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Duración:</strong> 1 semana · 10 horas</li>
                <li><strong>Precio:</strong> Desde 60€</li>
              </ul>
              <p style={{ fontSize: '0.95rem', flex: 1 }}>5 sesiones de 2 horas. Cada día un bloque completo con práctica real. Al final: un proyecto tuyo terminado. Para quien quiere ir en serio.</p>
              <Link href="/programas" className="btn btn-primary" style={{ marginTop: '16px' }}>Ver programas &rarr;</Link>
            </div>

            <div className="reveal reveal-delay-2 glass-card card-light" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="tag" style={{ background: 'transparent', border: '1px solid var(--accent)' }}>CONTINUIDAD</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                <Icon name="Users" size={28} color="var(--accent-hover)" />
                <h3 style={{ marginBottom: 0 }}>Comunidad Aether</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0', fontSize: '0.9rem', color: 'var(--text-dark-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Duración:</strong> Acceso mensual</li>
                <li><strong>Precio:</strong> Baja mensualidad</li>
              </ul>
              <p style={{ fontSize: '0.95rem', flex: 1 }}>El espacio donde seguir. Novedades semanales, soporte, preguntas, recursos. Para no quedarte sola en el proceso. Para alumni del Intensivo.</p>
              <Link href="/comunidad" className="btn btn-outline-dark" style={{ marginTop: '16px' }}>Saber más &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section className="section section-dark" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header reveal">
            <h2>Lo que dicen quienes <em>ya lo vivieron</em></h2>
          </div>
          <div className={`${styles.testimonialsGrid} reveal`}>
            {/* Custom improved testimonial design implementation uses TestimonialCard */}
            <TestimonialCard
              image="/testimonio-1.png"
              name="Diana Martínez"
              role="Emprendedora digital"
              quote="Llevo años intentando entender cómo funciona la IA para mi negocio. En un taller aprendí más que en meses viendo vídeos. Totalmente recomendable."
            />
            <TestimonialCard
              image="/testimonio-2.png"
              name="Carmen López"
              role="Mujer 50 años · Empodérate con IA"
              quote="Pensaba que esto era solo para jóvenes o informáticos. Ahora uso la IA cada semana y me ahorra horas del día a día."
            />
            <TestimonialCard
              image="/testimonio-3.png"
              name="Roberto Fernández"
              role="Hostelero · Más tiempo para tu cocina"
              quote="Lo mejor es que en ningún momento me sentí perdido. Todo muy práctico y adaptado a lo que necesita alguien como yo."
            />
            <TestimonialCard
              image="/testimonio-1.png"
              name="Julián y Rosa"
              role="Jubilados 70+ · Conéctate con el mundo"
              quote="Pensábamos que esto nos venía grande. Al final aprendimos a pedirle recetas y trucos en dos tardes. La paciencia de los profesores es increíble."
            />
          </div>
        </div>
      </section>

      {/* ═══ NO SOMOS OTRA ACADEMIA ═══ */}
      <section className="section section-darker" style={{ position: "relative", overflow: "hidden" }}>
        <div className="aurora-bg" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header reveal">
            <h2>La escuela que el sistema <em>nunca fue</em></h2>
            <p>No somos un curso online de YouTube con certificado. Somos formadores que salen a la calle, van a tu barrio y enseñan a personas reales a usar IA para su vida real.</p>
          </div>
          <div className={`grid-3 ${styles.whyGrid}`}>

            <div className={`reveal glass-card ${styles.whyCard}`}>
              <div className={styles.whyIconWrapper}>
                <Icon name="Target" size={32} color="var(--accent)" />
              </div>
              <h3>Para ti, no para todos</h3>
              <p>Cada programa está diseñado para una persona concreta con necesidades concretas. Tú no eres un usuario genérico. Una mujer de 50 años y un médico de guardia tienen problemas distintos. Nosotros también.</p>
            </div>

            <div className={`reveal reveal-delay-1 glass-card ${styles.whyCard}`}>
              <div className={styles.whyIconWrapper}>
                <Icon name="Zap" size={32} color="var(--accent)" />
              </div>
              <h3>Nada de teoría. Todo práctico</h3>
              <p>La ciencia lo demuestra: aprendemos haciendo, no escuchando. El 90% de retención viene de la práctica inmediata. Por eso en Aether School sales con algo hecho, no con apuntes que olvidarás mañana.</p>
            </div>

            <div className={`reveal reveal-delay-2 glass-card ${styles.whyCard}`}>
              <div className={styles.whyIconWrapper}>
                <Icon name="MapPin" size={32} color="var(--accent)" />
              </div>
              <h3>Lo llevamos a donde estás</h3>
              <p>No tienes que desplazarte a un centro de formación. Nosotros llegamos a tu fundación, tu centro, tu empresa, tu barrio. La formación llega donde está la gente que más la necesita.</p>
            </div>

            <div className={`reveal glass-card ${styles.whyCard}`}>
              <div className={styles.whyIconWrapper}>
                <Icon name="Microscope" size={32} color="var(--accent)" />
              </div>
              <h3>Respaldo científico real</h3>
              <p>No enseñamos de oídas. Nuestra metodología está basada en meta-análisis de 350 estudios, en neuroplasticidad adulta documentada y en los datos del WEF sobre el futuro del trabajo. No vendemos humo.</p>
            </div>

            <div className={`reveal reveal-delay-1 glass-card ${styles.whyCard}`}>
              <div className={styles.whyIconWrapper}>
                <Icon name="Users" size={32} color="var(--accent)" />
              </div>
              <h3>Comunidad, no solo curso</h3>
              <p>Al terminar el Intensivo, entras en la Comunidad Aether School. Un espacio de aprendizaje continuo donde recibirás novedades, soporte y conexión con personas en tu misma situación.</p>
            </div>

            <div className={`reveal reveal-delay-2 glass-card ${styles.whyCard}`}>
              <div className={styles.whyIconWrapper}>
                <Icon name="ShieldCheck" size={32} color="var(--accent)" />
              </div>
              <h3>Honestidad sobre la IA</h3>
              <p>La IA no va a solucionar todos tus problemas ni va a sustituirte. Enseñamos lo que funciona de verdad, no lo que vende más.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ PARA INSTITUCIONES ═══ */}
      <section className={`section section-light`}>
        <div className="container">
          <div className="section-header reveal">
            <h2>¿Trabajas con personas que <em>necesitan este conocimiento?</em></h2>
            <p className={styles.instDesc}>
              Colaboramos con fundaciones, asociaciones, ayuntamientos y centros educativos para llevar formación en IA a colectivos que normalmente quedan fuera. El programa se adapta a tu colectivo. Los formadores vamos nosotros. Tú pones el espacio y las personas.
            </p>
          </div>
          <div className="reveal" style={{ textAlign: "center", marginBottom: '40px' }}>
            <Link href="/instituciones" className="btn btn-primary">
              Hablar con nosotros
            </Link>
          </div>
          <div className="reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', opacity: 0.6, alignItems: 'center' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-head)' }}>UAB</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-head)' }}>Colegio Virolai</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-head)' }}>Fundació Pere Tarrés</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-head)' }}>Ajuntament de Badalona</span>
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
