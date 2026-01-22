import styles from '../../../styles/modules/home/sectionLp2.module.css';

import img from '../../../assets/images/sectionLp2/img-lp-section-2-1.webp';

import { BotonNav } from '../../utils/BotonNav';
import { ScrollScrub } from '../../utils/ScrollScrub';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contenidoInfo}>
                <h2 className="formula-bold">¿QUIÉNES SOMOS?</h2>

                <p className="alliance-text">
                    Somos un equipo de humanos revolucionarios bajo el techo de una empresa creada por y para los clientes gastronómicos quienes
                    desean una marca restaurantera con visión comercial.
                </p>

                <BotonNav dataCta="inicio-2-btn">Contactános</BotonNav>
            </div>

            <ScrollScrub from={{ x: 0, y: 150 }} to={{ x: 0, y: 0 }} start={0.99} end={0.1}>
                <img src={img} alt="Tenedor elegante enrollando espagueti" data-scroll-scrub />
            </ScrollScrub>
        </section>
    );
};
