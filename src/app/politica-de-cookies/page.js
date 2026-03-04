import styles from "../aviso-legal/legal.module.css";

export const metadata = {
    title: "Política de Cookies | Aether School",
    description: "Información sobre las cookies utilizadas en el sitio web de Aether School.",
};

export default function PoliticaCookies() {
    return (
        <section className={styles.legal}>
            <div className="container">
                <h1>Política de Cookies</h1>
                <div className={styles.content}>
                    <h2>¿Qué son las cookies?</h2>
                    <p>
                        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                        cuando visitas un sitio web. Nos ayudan a mejorar tu experiencia de navegación.
                    </p>

                    <h2>¿Qué cookies utilizamos?</h2>
                    <h3>Cookies esenciales</h3>
                    <p>
                        Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.
                        Incluyen la cookie de preferencia de cookies.
                    </p>

                    <h3>Cookies analíticas</h3>
                    <p>
                        Nos ayudan a entender cómo se usa la web para mejorarla. Recogen información
                        anónima sobre las páginas visitadas y el comportamiento de navegación.
                    </p>

                    <h2>¿Cómo gestionar las cookies?</h2>
                    <p>
                        Puedes configurar tu navegador para rechazar o eliminar cookies. Ten en cuenta
                        que algunas funcionalidades del sitio pueden verse afectadas.
                    </p>
                    <p>
                        Al entrar en nuestra web, te mostramos un banner donde puedes aceptar todas
                        las cookies o seleccionar solo las esenciales.
                    </p>

                    <h2>Más información</h2>
                    <p>
                        Para cualquier duda sobre nuestra política de cookies, escríbenos a
                        hola@aetherlabs.es.
                    </p>
                </div>
            </div>
        </section>
    );
}
