import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modules/faqPage.module.css';

import logo from '../../assets/images/common/logo.webp';

import { termsData } from '../utils/terminosData';
import { ParseTextToJSX } from '../utils/ParseTextToJSX';

import { ScrollReveal } from '../utils/ScrollReveal';

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

                    <ScrollReveal mode="clone" from="left" distance={30} duration={1} threshold={0.1}>
                        <img src={logo} alt="Logotipo de Foodie Guru" />
                    </ScrollReveal>
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

                <BotonNav dataCta="terminos-btn">Solicitar Cita</BotonNav>

                <hr />
            </section>
        </main>
    );
};

export default TerminosPage;
