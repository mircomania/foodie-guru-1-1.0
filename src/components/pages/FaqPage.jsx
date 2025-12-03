import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modules/faqPage.module.css';

import logo from '../../assets/images/logo.png';

import { getFaqStructuredData } from '../utils/getFaqStructuredData';
import { faqData } from '../utils/faqData';

import { BotonNav } from '../utils/BotonNav';

import { HelmetProvider } from 'react-helmet-async';

const faqStructuredData = getFaqStructuredData(faqData);

const replaceWithJSX = (text, faqId) => {
    const lines = text.split('\n').filter(Boolean);
    const content = [];

    let isList = false;
    const listItems = [];

    lines.forEach((line, idx) => {
        const trimmed = line.trim();

        if (trimmed.startsWith('- ')) {
            isList = true;
            listItems.push(<li key={`${faqId}-li-${idx}`}>{trimmed.replace('- ', '')}</li>);
        } else {
            if (isList) {
                content.push(<ul key={`${faqId}-ul-${idx}`}>{listItems.slice()}</ul>);
                listItems.length = 0;
                isList = false;
            }
            content.push(<p key={`${faqId}-p-${idx}`}>{trimmed}</p>);
        }
    });

    if (isList && listItems.length) {
        content.push(<ul key={`${faqId}-ul-end`}>{listItems}</ul>);
    }

    return content;
};

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

                            <div className="alliance-text">{replaceWithJSX(answer, id)}</div>

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
