import { useRef, useState, useEffect } from 'react';
import styles from '../../../styles/modules/servicios/sectionSp2.module.css';
import { CardsServicios } from '../../utils/CardsServicios';

export const SectionSp2 = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        const container = containerRef.current;
        if (!container) return;

        const width = container.clientWidth;
        container.scrollTo({
            left: width * index,
            behavior: 'smooth',
        });

        setActiveIndex(index);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const width = container.clientWidth;
            const index = Math.round(container.scrollLeft / width);
            setActiveIndex(index);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.sectionContainer}>
            <button
                className={`${styles.arrowLeft} ${activeIndex === 0 ? styles.disabled : ''}`}
                onClick={() => activeIndex > 0 && goToSlide(activeIndex - 1)}
            >
                ‹
            </button>

            <div ref={containerRef} className={styles.cardsContainer}>
                {CardsServicios.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <picture>
                            <source media="(min-width: 1200px)" srcSet={card.fotoWeb} />
                            <img src={card.fotoMob} alt={`${card.titulo} - servicio disponible`} />
                        </picture>

                        <div className={`${styles.cardText} ${styles[`cardText${card.id}`]}`}>
                            <h2 className="formula-bold">{card.titulo}</h2>
                            <p className="alliance-text">{card.texto}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className={`${styles.arrowRight} ${activeIndex === CardsServicios.length - 1 ? styles.disabled : ''}`}
                onClick={() => activeIndex < CardsServicios.length - 1 && goToSlide(activeIndex + 1)}
            >
                ›
            </button>

            <div className={styles.dots}>
                {CardsServicios.map((_, i) => (
                    <span key={i} className={`${styles.dot} ${activeIndex === i ? styles.active : ''}`} onClick={() => goToSlide(i)}></span>
                ))}
            </div>
        </section>
    );
};
