"use client";
import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className={`section section-darker ${styles.newsletter}`}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2>Cada semana, algo útil sobre IA en tu correo</h2>
                        <p>
                            Sin spam. Sin tecnicismos. Solo lo que funciona, explicado para
                            personas reales. Gratis.
                        </p>
                    </div>

                    {!submitted ? (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.fields}>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="form-input"
                                    required
                                    aria-label="Tu nombre"
                                />
                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    className="form-input"
                                    required
                                    aria-label="Tu email"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Quiero aprender
                            </button>
                            <p className={styles.disclaimer}>
                                Te puedes dar de baja cuando quieras.
                            </p>
                        </form>
                    ) : (
                        <div className="form-success">
                            ✅ ¡Bienvenido! Revisa tu correo para el primer email.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
