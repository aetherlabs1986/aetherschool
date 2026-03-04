import styles from "./legal.module.css";

export const metadata = {
    title: "Aviso Legal | Aether School",
    description: "Aviso legal e identificación de la empresa Aether Labs.",
};

export default function AvisoLegal() {
    return (
        <section className={styles.legal}>
            <div className="container">
                <h1>Aviso Legal</h1>
                <div className={styles.content}>
                    <h2>Identificación de la empresa</h2>
                    <p>
                        <strong>Nombre comercial:</strong> Aether School (marca de Aether Labs)<br />
                        <strong>Domicilio:</strong> Barcelona, España<br />
                        <strong>Email de contacto:</strong> hola@aetherlabs.es
                    </p>

                    <h2>Objeto</h2>
                    <p>
                        A través de este sitio web, Aether Labs pone a disposición de los usuarios
                        información sobre los programas de formación en inteligencia artificial de
                        Aether School, así como formularios de contacto y recursos gratuitos.
                    </p>

                    <h2>Condiciones de uso</h2>
                    <p>
                        El acceso a esta web es gratuito y no requiere registro previo. El usuario se
                        compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos,
                        respetando la legalidad vigente.
                    </p>

                    <h2>Propiedad intelectual</h2>
                    <p>
                        Todos los contenidos de este sitio web (textos, imágenes, diseño, logotipos,
                        etc.) son propiedad de Aether Labs o de sus autores, y están protegidos por
                        las leyes de propiedad intelectual. Queda prohibida su reproducción total o
                        parcial sin autorización expresa.
                    </p>

                    <h2>Limitación de responsabilidad</h2>
                    <p>
                        Aether Labs no se hace responsable de posibles errores u omisiones en los
                        contenidos de la web, ni de la disponibilidad continua del sitio.
                    </p>

                    <h2>Legislación aplicable</h2>
                    <p>
                        Las presentes condiciones se rigen por la legislación española. Para cualquier
                        controversia, las partes se someten a los juzgados y tribunales de Barcelona.
                    </p>
                </div>
            </div>
        </section>
    );
}
