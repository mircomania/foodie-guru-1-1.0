import styles from '../../../styles/modules/nosotros/sectionNp3.module.css';
import { LogosNosoros } from '../../utils/LogosNosotros';

import { useEffect, useRef } from 'react';

export const SectionNp3 = () => {
    const logos = [...LogosNosoros, ...LogosNosoros];
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const speed = 80;
        const width = track.scrollWidth / 2;
        const duration = width / speed;

        track.style.animationDuration = `${duration}s`;
    }, []);

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.slider}>
                <div ref={trackRef} className={styles.track}>
                    {logos.map((logo, i) => (
                        <div key={i} className={styles.logo}>
                            <img src={logo.logo} alt={logo.nombre} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
