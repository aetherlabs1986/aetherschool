import styles from "../aviso-legal/legal.module.css";

export const metadata = {
    title: "Política de Privacidad | Aether School",
    description: "Política de privacidad y tratamiento de datos personales de Aether School.",
};

export default function PoliticaPrivacidad() {
    return (
        <section className={styles.legal}>
            <div className="container">
                <h1>Política de Privacidad</h1>
                <div className={styles.content}>
                    <h2>Responsable del tratamiento</h2>
                    <p>
                        <strong>Responsable:</strong> Aether Labs<br />
                        <strong>Email:</strong> hola@aetherlabs.es<br />
                        <strong>Finalidad:</strong> Gestionar las consultas, solicitudes de
                        información y suscripciones realizadas a través del sitio web.
                    </p>

                    <h2>¿Qué datos recogemos?</h2>
                    <p>
                        A través de los formularios de contacto y suscripción, podemos recoger: nombre
                        y apellidos, email, teléfono, nombre de la organización, y el mensaje o
                        consulta que nos envíes.
                    </p>

                    <h2>¿Para qué usamos tus datos?</h2>
                    <ul>
                        <li>Responder a tu consulta o solicitud de información</li>
                        <li>Enviarte comunicaciones sobre programas de Aether School, si te suscribes a la newsletter</li>
                        <li>Gestionar tu participación en eventos o talleres</li>
                    </ul>

                    <h2>Base legal</h2>
                    <p>
                        El tratamiento se basa en tu consentimiento, otorgado al marcar la casilla de
                        aceptación en los formularios, y en el interés legítimo de Aether Labs para
                        atender solicitudes comerciales.
                    </p>

                    <h2>¿Cuánto tiempo conservamos tus datos?</h2>
                    <p>
                        Tus datos se conservarán mientras exista una relación comercial o de servicio,
                        y durante los plazos legalmente exigidos para atender posibles responsabilidades.
                    </p>

                    <h2>Tus derechos</h2>
                    <p>
                        Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad,
                        limitación y oposición enviando un email a hola@aetherlabs.es indicando tu
                        solicitud y adjuntando una copia de tu DNI.
                    </p>

                    <h2>Seguridad</h2>
                    <p>
                        Aplicamos las medidas técnicas y organizativas adecuadas para garantizar la
                        seguridad de tus datos personales.
                    </p>
                </div>
            </div>
        </section>
    );
}
