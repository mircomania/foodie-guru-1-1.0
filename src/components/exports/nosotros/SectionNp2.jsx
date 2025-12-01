import { useRef, useState, useEffect } from 'react';

import styles from '../../../styles/modules/nosotros/sectionNp2.module.css';

import { CardsNosoros } from '../../utils/CardsNosotros';
import { useMediaQuery } from '../../../hooks/UseMediaQuery';

export const SectionNp2 = () => {
    const isMobile = useMediaQuery('(max-width: 1199px)');
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!isMobile) return;

        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = 320 + 20;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(index);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return (
        <section className={styles.sectionContainer}>
            <div ref={containerRef} className={styles.cardsContainer}>
                {CardsNosoros.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <div className={styles.persona}>
                            <h3 className="formula-bold">{card.nombre}</h3>

                            <h4 className="alliance-text">{card.cargo}</h4>
                        </div>

                        <div className={styles.imageContainer}>
                            <img src={card.foto} alt={card.nombre} />

                            <span className="alliance-text">{card.texto}</span>
                        </div>
                    </div>
                ))}
            </div>

            {isMobile && (
                <div className={styles.dots}>
                    {CardsNosoros.map((_, i) => (
                        <span key={i} className={`${styles.dot} ${activeIndex === i ? styles.active : ''}`}></span>
                    ))}
                </div>
            )}
        </section>
    );
};
