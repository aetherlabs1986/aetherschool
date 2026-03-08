"use client";
import { useState } from "react";
import * as LucideIcons from "lucide-react";
import styles from "./page.module.css";

const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name];
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};

const leadMagnets = [
    { title: "10 prompts para empezar con la IA hoy mismo", audience: "Público general" },
    { title: "Kit del profesor: 5 herramientas de IA para el aula", audience: "Docentes" },
    { title: "Manual de IA para mayores: tu primera semana paso a paso", audience: "Personas mayores" },
    { title: "Lo que necesitas para montar tu negocio con IA", audience: "Emprendedores" },
    { title: "Menú semanal saludable con IA", audience: "Mujeres 40-60" },
];

export default function DescargablesSection() {
    const [selectedResource, setSelectedResource] = useState(null);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleDownload = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSelectedResource(null);
            setSubmitted(false);
            setEmail("");
        }, 3000);
    };

    return (
        <section className="section section-darker">
            <div className="container">
                <div className="section-header">
                    <h2>Recursos descargables</h2>
                    <p>Guías gratuitas para empezar con la IA. Deja tu email y descárgalas al instante.</p>
                </div>
                <div className={styles.leadsGrid}>
                    {leadMagnets.map((l, i) => (
                        <div key={i} className={`card ${styles.leadCard}`}>
                            <span className={styles.leadIcon}><Icon name="FileText" size={24} color="var(--accent)" /></span>
                            <h3 className={styles.leadTitle}>{l.title}</h3>
                            <span className="tag">{l.audience}</span>
                            <button
                                className="btn btn-primary"
                                style={{ marginTop: '16px', width: '100%' }}
                                onClick={() => setSelectedResource(l.title)}
                            >
                                Descargar PDF
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {selectedResource && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
                    <div className="glass-card" style={{ maxWidth: '500px', width: '100%', padding: '32px', position: 'relative' }}>
                        <button
                            onClick={() => setSelectedResource(null)}
                            style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                        >
                            <Icon name="X" size={24} />
                        </button>

                        {!submitted ? (
                            <>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-light)' }}>Descargar recurso</h3>
                                <p style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '24px' }}>{selectedResource}</p>
                                <form onSubmit={handleDownload}>
                                    <div className="form-group">
                                        <label className="form-label">Tu mejor email</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="ejemplo@correo.com"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                                        Enviar PDF a mi correo
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '32px 0' }}>
                                <Icon name="CheckCircle2" size={48} color="var(--accent)" style={{ margin: '0 auto 16px' }} />
                                <h3>¡Enviado!</h3>
                                <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Revisa tu bandeja de entrada en los próximos minutos.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
