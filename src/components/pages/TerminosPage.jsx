import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modules/faqPage.module.css';

import logo from '../../assets/images/logo.png';

import { termsData } from '../utils/terminosData';
import { ParseTextToJSX } from '../utils/ParseTextToJSX';

import { BotonNav } from '../utils/BotonNav';

const TerminosPage = () => {
    return (
        <main className="fade-in fondo1">
            <TitleSEO
                title="Foodie Guru | Términos y Condiciones"
                description="Consulta los términos y condiciones de nuestros servicios en Foodie Guru."
                canonical="https://foodieguru.mx/terminos-condiciones"
            />

            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="formula-bold">TÉRMINOS Y CONDICIONES</h1>

                    <img src={logo} alt="Logotipo de Foodie Guru" />
                </header>

                <div className={styles.sectionContenido}>
                    {termsData.map(({ id, title, text }) => (
                        <div key={id} className={styles.faqItem}>
                            <h3 className="formula-bold">{`${id}. ${title}`}</h3>

                            <div className="alliance-text">{ParseTextToJSX(text, id)}</div>

                            <hr />
                        </div>
                    ))}
                </div>
            </section>

            <BotonNav dataCta="terminos-btn" />

            <hr />
        </main>
    );
};

export default TerminosPage;
