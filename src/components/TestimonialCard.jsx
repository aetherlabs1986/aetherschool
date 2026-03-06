import Image from "next/image";
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ image, name, role, quote }) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <Image src={image} alt={name} width={60} height={60} className={styles.photo} />
                </div>
                <div className={styles.meta}>
                    <strong className={styles.name}>{name}</strong>
                    <span className={styles.role}>{role}</span>
                </div>
            </div>
            <blockquote className={styles.quote}>
                "{quote}"
            </blockquote>
        </div>
    );
}
