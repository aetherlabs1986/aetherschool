import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            background: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="aurora-bg" style={{ opacity: 0.3 }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
                <h1 style={{
                    fontSize: '8rem',
                    margin: 0,
                    lineHeight: 1,
                    background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'var(--font-serif)'
                }}>
                    404
                </h1>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    Ups, parece que te has <em>perdido</em> en el futuro
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                    La página que buscas no existe o ha sido movida. No te preocupes,
                    la inteligencia artificial todavía no nos ha borrado del mapa.
                </p>
                <Link href="/" className="btn btn-primary">
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
