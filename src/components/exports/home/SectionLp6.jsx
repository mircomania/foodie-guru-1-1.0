import { useEffect } from 'react';

import styles from '../../../styles/modules/home/sectionLp6.module.css';
import { CatSectionLp6 } from '../../utils/CatSectionLp6';
import { ScrollReveal } from '../../utils/ScrollReveal';

import { useMediaQuery } from '../../../hooks/UseMediaQuery';

export const SectionLp6 = () => {
    const isMobile = useMediaQuery('(max-width: 991px)');

    useEffect(() => {
        const line = document.querySelector('[data-animate-line]');
        if (!line) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    line.style.strokeDashoffset = '0';
                    observer.disconnect();
                }
            },
            { threshold: 0.2 },
        );

        observer.observe(line);

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.sectionContainer}>
            <h2 className="formula-bold">NUESTRO PROCESO</h2>

            <div className={styles.sectionContenido}>
                <svg className={styles.line} viewBox="0 0 100 2" preserveAspectRatio="none">
                    <line x1="0" y1="1" x2="100" y2="1" data-animate-line />
                </svg>

                <div className={styles.items}>
                    {CatSectionLp6.map(({ id, title, duration }, index) => (
                        <ScrollReveal mode="clone" key={id} from="left" distance={50} duration={duration} disabled={isMobile} threshold={0.2}>
                            <div className={`${styles.item} ${styles[`item${index + 1}`]}`}>
                                <h3 className="alliance-text">{title}</h3>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
