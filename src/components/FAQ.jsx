"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
    {
        question: "¿Necesito saber algo de tecnología antes de empezar?",
        answer: "Para nada. Nuestros programas están diseñados precisamente para personas que parten de cero. Te explicamos los conceptos paso a paso, en tu idioma, sin usar palabras raras o tecnicismos.",
    },
    {
        question: "¿Me hace falta comprar un ordenador nuevo o algún programa caro?",
        answer: "No. La mayoría de las herramientas que enseñamos se pueden usar desde tu teléfono móvil, tu tablet o tu ordenador actual, de forma gratuita o con versiones muy económicas. No vendemos software, enseñamos a usar lo que ya tienes a tu disposición.",
    },
    {
        question: "¿Son clases teóricas donde tendré que tomar apuntes?",
        answer: "Huyimos de la teoría aburrida. Cada sesión es 100% práctica. Desde el primer día estarás tocando las herramientas y creando cosas por ti mismo. Nuestro objetivo es que salgas del taller con un resultado real: una imagen creada, un texto corregido, o una automatización lista para usar.",
    },
    {
        question: "¿Qué pasa si me atasco o no entiendo algo?",
        answer: "No pasa absolutamente nada, es lo más normal del mundo. Nuestros formadores están contigo en todo momento, de forma paciente y cercana, para ayudarte a superar cualquier barrera.",
    },
    {
        question: "Tengo una empresa o asociación. ¿Podéis venir a darnos la formación?",
        answer: "¡Por supuesto! Es una de nuestras especialidades. Diseñamos programas a medida para equipos de empresas, asociaciones o instituciones, y nos desplazamos para impartirlos. Escríbenos a través de la sección 'Instituciones' y hablamos.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`section section-dark ${styles.faqSection}`}>
            <div className={`container ${styles.faqContainer}`}>
                <div className="section-header">
                    <h2>Preguntas frecuentes</h2>
                </div>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleOpen(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.question}</span>
                                    <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                                </button>
                                <div
                                    className={`${styles.faqAnswerWrapper} ${isOpen ? styles.faqAnswerOpen : ""
                                        }`}
                                >
                                    <div className={styles.faqAnswerInner}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
