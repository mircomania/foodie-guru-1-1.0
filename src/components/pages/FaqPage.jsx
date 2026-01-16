import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modules/faqPage.module.css';

import logo from '../../assets/images/common/logo.webp';

import { getFaqStructuredData } from '../utils/getFaqStructuredData';
import { faqData } from '../utils/faqData';
import { ParseTextToJSX } from '../utils/ParseTextToJSX';

import { BotonNav } from '../utils/BotonNav';

import { HelmetProvider } from 'react-helmet-async';

const faqStructuredData = getFaqStructuredData(faqData);

const FaqPage = () => {
    return (
        <main>
            <TitleSEO
                title="Foodie Guru | FAQ"
                description="Encuentra respuestas claras y rápidas a las dudas más comunes sobre el servicio de Foodie Guru."
                canonical="https://foodieguru.mx/faq"
            />

            <HelmetProvider>
                <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
            </HelmetProvider>

            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="formula-bold">PREGUNTAS FRECUENTES</h1>

                    <img src={logo} alt="Logotipo de Foodie Guru" />
                </header>

                {/* PREGUNTAS */}

                <div className={styles.sectionContenido}>
                    {faqData.map(({ id, question, answer }) => (
                        <div key={id} className={styles.faqItem}>
                            <h3 className="formula-bold">{`${id}. ${question}`}</h3>

                            <div className="alliance-text">{ParseTextToJSX(answer, id)}</div>

                            <hr />
                        </div>
                    ))}
                </div>

                <BotonNav dataCta="faq-btn">Solicitar Cita</BotonNav>

                <hr />
            </section>
        </main>
    );
};

export default FaqPage;
