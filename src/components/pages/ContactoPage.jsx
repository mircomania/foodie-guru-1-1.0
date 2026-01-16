import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modules/contactoPage.module.css';

import { Form } from '../form/Form';

const ContactoPage = () => {
    return (
        <main>
            <TitleSEO
                title="Foodie Guru | Contacto"
                description="Agenda una sesión con Foodie Guru y recibe asesoría especializada para restaurantes en Monterrey, Nuevo León. Estrategia, crecimiento y rentabilidad."
                canonical="https://foodieguru.mx/contacto"
            />

            <section className={styles.sectionContainer}>
                <div className={styles.sectionTitulo}>
                    <h1 className="formula-bold">¡HEY FOODIE!</h1>

                    <p className="alliance-text">
                        Llena este formulario y AGENDA UNA SESIÓN con Charly Zapata, nuestro Director General.
                        <br />
                        Al finalizar el formulario podras agendar.
                    </p>
                </div>

                <div className={styles.sectionForm}>
                    <Form />
                </div>
            </section>
        </main>
    );
};

export default ContactoPage;
