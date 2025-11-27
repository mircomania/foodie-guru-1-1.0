import styles from '../../../styles/modules/sectionLp5.module.css';

import img from '../../../assets/images/img-lp-section-5-1.png';

import { BotonNav } from '../../utils/BotonNav';

export const SectionLp5 = () => {
    return (
        <section className={styles.sectionContainer}>
            <h2 className="formula-bold">NUESTROS SERVICIOS</h2>

            <div className={styles.sectionContenido}>
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
