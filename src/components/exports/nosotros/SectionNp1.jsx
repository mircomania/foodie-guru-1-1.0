import styles from '../../../styles/modules/nosotros/sectionNp1.module.css';

import { ScrollReveal } from '../../utils/ScrollReveal';

export const SectionNp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitle}>
                <ScrollReveal mode="clone" from="top" distance={20} duration={1}>
                    <h1 className="formula-bold">
                        TEAM <br /> <span className={styles.foodie}>FOODIE GURÚ</span>
                    </h1>
                </ScrollReveal>

                <div className={styles.fondoTitle}></div>
            </header>

            <div className={styles.sectionContenido}>
                <p className="alliance-text">
                    Foodies del mundo, gurús de la industria, restauranteros de profesión, tecnológicos obsesionados por diversión, pero sobre todo,
                    nos reconocemos como un equipo de humanos revolucionarios.
                </p>
            </div>
        </section>
    );
};
