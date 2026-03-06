import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerInner}`}>
                <div className={styles.footerTop}>
                    <div className={styles.footerBrand}>
                        <Link href="/" className={styles.footerLogo}>
                            <Image
                                src="/logo-aether-school.png"
                                alt="Aether School"
                                width={120}
                                height={42}
                            />
                        </Link>
                        <p className={styles.footerTagline}>
                            by{" "}
                            <a href="https://aetherlabs.es" target="_blank" rel="noopener noreferrer">
                                Aether Labs
                            </a>
                        </p>
                        <p className={styles.footerDesc}>
                            La tecnología más avanzada del mundo, explicada para ti.
                        </p>
                    </div>

                    <div className={styles.footerLinks}>
                        <div className={styles.footerCol}>
                            <h4 className={styles.footerColTitle}>Navegación</h4>
                            <Link href="/programas">Programas</Link>
                            <Link href="/instituciones">Instituciones</Link>
                            <Link href="/sobre-nosotros">Sobre nosotros</Link>
                            <Link href="/impacto">Impacto</Link>
                            <Link href="/contacto">Contacto</Link>
                        </div>
                        <div className={styles.footerCol}>
                            <h4 className={styles.footerColTitle}>Recursos</h4>
                            <Link href="/recursos">Blog y recursos</Link>
                            <a href="https://aetherlabs.es" target="_blank" rel="noopener noreferrer">
                                Aether Labs
                            </a>
                        </div>
                        <div className={styles.footerCol}>
                            <h4 className={styles.footerColTitle}>Contacto</h4>
                            <a href="mailto:hola@aetherlabs.es">hola@aetherlabs.es</a>
                            <a
                                href="https://wa.me/34627281459?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Aether%20School."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Aether School · Aether Labs
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/aviso-legal">Aviso legal</Link>
                        <Link href="/politica-de-privacidad">Privacidad</Link>
                        <Link href="/politica-de-cookies">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
