import Image from "next/image";
import styles from "./Testimonial.module.css";

export default function Testimonial({ image, name, role, quote, reverse = false }) {
    return (
        <section className={`section section-light ${styles.wrapper}`}>
            <div className={`container ${styles.container} ${reverse ? styles.reverse : ""}`}>
                <div className={`reveal ${styles.imageCol}`}>
                    <div className={styles.greenSquare} />
                    <Image src={image} alt={name} width={400} height={400} className={styles.photo} />
                </div>
                <div className={`reveal reveal-delay-1 ${styles.textCol}`}>
                    <span className={styles.role}>{role}</span>
                    <blockquote className={styles.quote}>
                        "{quote}"
                    </blockquote>
                    <cite className={styles.name}>{name}</cite>
                </div>
            </div>
        </section>
    );
}
