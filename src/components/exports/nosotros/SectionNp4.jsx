import styles from '../../../styles/modules/nosotros/sectionNp4.module.css';

import { ScrollReveal } from '../../utils/ScrollReveal';

export const SectionNp4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <h2 className="formula-bold">
                &quot;LOS QUE CREEN QUE LA SUERTE EXISTE,
                <br />
                SE QUIEBRAN. LOS QUE BUSCAN
                <br />
                ESTRATEGIA, TRASCIENDEN.&quot;
            </h2>

            <ScrollReveal mode="clone" from="left" distance={20} duration={1}>
                <h3 className="formula-bold">- FOODIE GURÚ</h3>
            </ScrollReveal>
        </section>
    );
};
