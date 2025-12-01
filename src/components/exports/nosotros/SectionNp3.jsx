import styles from '../../../styles/modules/nosotros/sectionNp3.module.css';
import { LogosNosoros } from '../../utils/LogosNosotros';

export const SectionNp3 = () => {
    const logos = [...LogosNosoros, ...LogosNosoros, ...LogosNosoros];

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.slider}>
                <div className={styles.track}>
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
