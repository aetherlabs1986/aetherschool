"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};

export default function Instituciones() {
    const [submitted, setSubmitted] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            {/* ═══ HERO ═══ */}
            <section className={styles.hero}>
                <div className="aurora-bg" />
                <div className={styles.heroBg} aria-hidden="true">
                    <Image
                        src="/img-instituciones.png"
                        alt=""
                        fill
                        className={styles.heroBgImg}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={`container ${styles.heroContent}`} style={{ position: 'relative', zIndex: 1 }}>
                    <span className="tag tag-dark reveal">Para instituciones y empresas</span>
                    <h1 className="reveal reveal-delay-1" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Tú pones las personas.<br /><em>Nosotros ponemos la formación.</em></h1>
                    <p className={`reveal reveal-delay-2 ${styles.heroSub}`} style={{ maxWidth: '800px', margin: '24px auto', fontSize: '1.25rem', color: 'var(--text-light)' }}>
                        Diseñamos y llevamos programas de formación en IA para colectivos específicos.
                        Sin que la institución tenga que gestionar nada. Nosotros lo hacemos todo.
                    </p>
                    <div className="reveal reveal-delay-3" style={{ marginTop: '32px' }}>
                        <a href="#formulario" className="btn btn-primary">
                            Hablemos de tu colectivo
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══ POR QUÉ COLABORAR CON AETHER SCHOOL ═══ */}
            <section className="section section-darker">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">POR QUÉ NOSOTROS</span>
                        <h2 style={{ marginTop: '16px' }}>¿Por qué elegir <em>Aether School</em> y no otro proveedor?</h2>
                    </div>
                    <div className="grid-2" style={{ marginTop: '40px', gap: '24px' }}>
                        <div className={`reveal glass-card ${styles.reason}`} style={{ padding: '32px' }}>
                            <span className={styles.reasonCheck}>
                                <Icon name="MapPin" size={24} color="var(--accent)" />
                            </span>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Formadores que salen a la calle</h3>
                                <p style={{ color: 'var(--text-muted)' }}>No somos una plataforma online — vamos a vuestro espacio, físico o virtual, y miramos a las personas a los ojos.</p>
                            </div>
                        </div>
                        <div className={`reveal reveal-delay-1 glass-card ${styles.reason}`} style={{ padding: '32px' }}>
                            <span className={styles.reasonCheck}>
                                <Icon name="Users" size={24} color="var(--accent)" />
                            </span>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Especialización por colectivo</h3>
                                <p style={{ color: 'var(--text-muted)' }}>No damos el mismo taller a mujeres de 50 que a jóvenes de 16. Cada programa está específicamente adaptado.</p>
                            </div>
                        </div>
                        <div className={`reveal glass-card ${styles.reason}`} style={{ padding: '32px' }}>
                            <span className={styles.reasonCheck}>
                                <Icon name="Award" size={24} color="var(--accent)" />
                            </span>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Experiencia documentada</h3>
                                <p style={{ color: 'var(--text-muted)' }}>UAB, Colegio Virolai, Fundació Pere Tarrés, Ajuntament de Badalona. Ya lo hemos hecho con éxito antes.</p>
                            </div>
                        </div>
                        <div className={`reveal reveal-delay-1 glass-card ${styles.reason}`} style={{ padding: '32px' }}>
                            <span className={styles.reasonCheck}>
                                <Icon name="Microscope" size={24} color="var(--accent)" />
                            </span>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Metodología con base científica</h3>
                                <p style={{ color: 'var(--text-muted)' }}>No improvisamos — cada programa tiene el respaldo de la investigación educativa y la neurociencia.</p>
                            </div>
                        </div>
                        <div className={`reveal glass-card ${styles.reason}`} style={{ padding: '32px', gridColumn: '1 / -1' }}>
                            <span className={styles.reasonCheck}>
                                <Icon name="Target" size={24} color="var(--accent)" />
                            </span>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Resultados medibles</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Antes de terminar, definimos juntos qué métricas y resultados determinarán el éxito del programa para tu institución.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CÓMO FUNCIONA ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">PROCESO SENCILLO</span>
                        <h2 style={{ marginTop: '16px' }}>¿Cómo trabajamos <em>contigo</em>?</h2>
                    </div>
                    <div className={styles.stepsGrid} style={{ marginTop: '40px' }}>
                        <div className={`reveal glass-card ${styles.step}`}>
                            <div className={styles.stepNum}>1</div>
                            <h3>Una llamada. Nos dices quiénes son.</h3>
                            <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>Una llamada o reunión de 30 minutos donde nos cuentas quién es tu colectivo, qué necesitan, qué esperas del programa y qué recursos tienes disponibles (espacio, horario, presupuesto).</p>
                        </div>
                        <div className={`reveal reveal-delay-1 glass-card ${styles.step}`}>
                            <div className={styles.stepNum}>2</div>
                            <h3>Diseñamos el programa a medida</h3>
                            <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>En 48-72 horas te enviamos una propuesta concreta: programa, objetivos, metodología, calendario y presupuesto. Todo claro y sin compromisos previos.</p>
                        </div>
                        <div className={`reveal reveal-delay-2 glass-card ${styles.step}`}>
                            <div className={styles.stepNum}>3</div>
                            <h3>Lo impartimos nosotros. Tú te relajas.</h3>
                            <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>Nos hacemos cargo de todo: materiales, formadores, dinámica y seguimiento. Tú te encargas de que llegue la gente. Nosotros de que salgan transformados.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ LOS 3 FORMATOS ═══ */}
            <section className="section section-darker">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">CÓMO COLABORAMOS</span>
                        <h2 style={{ marginTop: '16px' }}>Los <em>3 formatos</em> para instituciones</h2>
                    </div>
                    <div className="grid-3" style={{ marginTop: '40px' }}>
                        <div className="reveal glass-card" style={{ padding: '32px' }}>
                            <div style={{ height: '48px', width: '48px', borderRadius: '8px', background: 'rgba(0, 229, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                <Icon name="Zap" size={24} color="var(--accent)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Taller Único de Descubrimiento</h3>
                            <div style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.85rem', display: 'inline-block', marginBottom: '16px', color: 'var(--text-light)' }}>
                                ⏱️ 90-120 minutos
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
                                Ideal para probar el formato con el colectivo. Para primeras colaboraciones y colectivos muy específicos que necesitan un primer acercamiento.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 'bold' }}>Precio: desde contactar</p>
                        </div>

                        <div className="reveal reveal-delay-1 glass-card glass-card-featured" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, right: 0, padding: '6px 16px', background: 'var(--accent)', color: '#000', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', borderBottomLeftRadius: '8px' }}>
                                MÁS ELEGIDO
                            </div>
                            <div style={{ height: '48px', width: '48px', borderRadius: '8px', background: 'rgba(0, 229, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                <Icon name="BookOpen" size={24} color="var(--accent)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--accent)' }}>Programa Intensivo</h3>
                            <div style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.85rem', display: 'inline-block', marginBottom: '16px', color: 'var(--text-light)' }}>
                                ⏱️ 1 semana (5 sesiones de 2h)
                            </div>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '16px' }}>
                                El programa completo. Contenidos profundos diseñados a medida del colectivo con un fuerte componente práctico y de transformación.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>Precio: según tamaño y complejidad</p>
                        </div>

                        <div className="reveal reveal-delay-2 glass-card" style={{ padding: '32px' }}>
                            <div style={{ height: '48px', width: '48px', borderRadius: '8px', background: 'rgba(0, 229, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                <Icon name="Infinity" size={24} color="var(--accent)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Formación Continuada</h3>
                            <div style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.85rem', display: 'inline-block', marginBottom: '16px', color: 'var(--text-light)' }}>
                                ⏱️ Mensual o trimestral
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
                                Para instituciones que quieren integrar la formación en Inteligencia Artificial como un servicio regular y continuo a sus miembros o beneficiarios.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 'bold' }}>Precio: modelo de suscripción / iguala</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ PARA QUIÉN ═══ */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="tag tag-dark">COLECTIVOS QUE ATENDEMOS</span>
                        <h2 style={{ marginTop: '16px' }}>Trabajamos <em>con</em></h2>
                    </div>
                    <div className={`grid-3 ${styles.clientGrid}`} style={{ marginTop: '40px' }}>
                        {[
                            { icon: "UsersRound", text: "Fundaciones y asociaciones de mujeres — programas Empodérate con IA" },
                            { icon: "HeartPulse", text: "Centros de día y asociaciones de mayores — programa Conéctate con el mundo" },
                            { icon: "GraduationCap", text: "Colegios e institutos — programas Aprende a crear y Descubre quién quieres ser" },
                            { icon: "Building2", text: "Asociaciones de emprendedores y cámaras de comercio — Monta tu negocio" },
                            { icon: "Briefcase", text: "Asociaciones profesionales: hosteleros, sanitarios, docentes" },
                            { icon: "Landmark", text: "Ayuntamientos y servicios sociales — programas adaptados según colectivo" },
                            { icon: "Building", text: "Empresas y pymes — Prepara tu equipo para trabajar diferente" },
                        ].map((item, i) => (
                            <div key={i} className={`reveal glass-card ${styles.clientCard}`} style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                                <span className={styles.clientIcon}>
                                    <Icon name={item.icon} size={32} strokeWidth={1.5} color="var(--accent)" />
                                </span>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FORMULARIO ═══ */}
            <section className="section section-darker" id="formulario" style={{ position: "relative", overflow: "hidden" }}>
                <div className="aurora-bg aurora-bg-alt" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className={`reveal glass-card ${styles.formBlock}`}>
                        <h2>¿Hablamos?</h2>

                        {!submitted ? (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label">Nombre y apellidos</label>
                                        <input type="text" className="form-input" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">
                                            Nombre de la organización
                                        </label>
                                        <input type="text" className="form-input" required />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-input" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Teléfono</label>
                                        <input type="tel" className="form-input" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        ¿A qué colectivo va dirigido?
                                    </label>
                                    <input type="text" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        ¿Cuántas personas aproximadamente?
                                    </label>
                                    <input type="text" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        ¿Tenéis presupuesto disponible para esta formación?
                                    </label>
                                    <select className="form-input" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-light)', borderRadius: '8px' }} defaultValue="">
                                        <option value="" disabled>Selecciona una opción</option>
                                        <option value="si">Sí, tenemos presupuesto</option>
                                        <option value="subvencion">Buscamos subvenciones o colaboración</option>
                                        <option value="no">No tenemos presupuesto (valoramos modelos gratuitos)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Mensaje (opcional)</label>
                                    <textarea className="form-textarea" rows={4} />
                                </div>
                                <label className="form-checkbox">
                                    <input type="checkbox" required />
                                    <span>
                                        He leído y acepto la{" "}
                                        <Link href="/politica-de-privacidad">
                                            política de privacidad
                                        </Link>{" "}
                                        de Aether School.
                                    </span>
                                </label>
                                <button type="submit" className="btn btn-primary">
                                    Enviar solicitud
                                </button>
                            </form>
                        ) : (
                            <div className="form-success">
                                ✅ Recibido. Te contactamos en menos de 24h.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
