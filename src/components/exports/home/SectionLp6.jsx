import styles from '../../../styles/modules/sectionLp6.module.css';
import { CatSectionLp6 } from '../../utils/CatSectionLp6';

export const SectionLp6 = () => {
    return (
        <section className={styles.sectionContainer}>
            <h2 className="formula-bold">NUESTRO PROCESO</h2>

            <div className={styles.sectionContenido}>
                <svg className={styles.line} viewBox="0 0 100 2" preserveAspectRatio="none">
                    <line x1="0" y1="1" x2="100" y2="1" />
                </svg>

                <div className={styles.items}>
                    {CatSectionLp6.map(({ id, title }, index) => (
                        <div key={id} className={`${styles.item} ${styles[`item${index + 1}`]}`}>
                            <h3 className="alliance-text">{title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
