import styles from '../../../styles/modules/home/sectionLp2.module.css';

import img from '../../../assets/images/img-lp-section-2-1.png';

import { BotonNav } from '../../utils/BotonNav';

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

            <img src={img} alt="Tenedor elegante enrollando espagueti" />
        </section>
    );
};
