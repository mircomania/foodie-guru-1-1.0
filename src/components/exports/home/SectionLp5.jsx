import styles from '../../../styles/modules/home/sectionLp5.module.css';

import img from '../../../assets/images/sectionLp5/img-lp-section-5-1.webp';

import { BotonNav } from '../../utils/BotonNav';
import { ScrollScrub } from '../../utils/ScrollScrub';

export const SectionLp5 = () => {
    return (
        <section className={styles.sectionContainer}>
            <h2 className="formula-bold">NUESTROS SERVICIOS</h2>

            <ScrollScrub from={{ x: -300, y: 0 }} to={{ x: 0, y: 0 }} start={0.99} end={0.2}>
                <div className={styles.sectionContenido} data-scroll-scrub>
                    <img src={img} alt="mano abierta con los servicios que ofrece Foodie Guru" />

                    <p className="marker-text" data-pos="1">
                        Consultoría para <br /> Restaurantes
                    </p>

                    <p className="marker-text" data-pos="2">
                        Coaching para dueños <br /> de Restaurantes
                    </p>

                    <p className="marker-text" data-pos="3">
                        Branding <br /> Restaurantero
                    </p>

                    <p className="marker-text" data-pos="4">
                        NUESTRA <br /> metodología
                    </p>
                </div>
            </ScrollScrub>

            <BotonNav
                to="/servicios"
                ariaLabel="Ir a la sección de servicios de Foodie Guru"
                title="Haz clic para ir a la sección de servicios"
                dataLink="inicio-servicios-btn"
            >
                Servicios
            </BotonNav>
        </section>
    );
};
