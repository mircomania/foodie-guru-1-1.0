import styles from '../../../styles/modules/home/sectionLp1.module.css';

import img from '../../../assets/images/sectionLp1/img-lp-section-1-1.png';

import { BotonNav } from '../../utils/BotonNav';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.contenido1}>
                <img src={img} alt="CEO de Foodie Guru" />

                <h1 className="formula-bold">
                    <span className={styles.titulo1}>
                        EXPERTOS EN
                        <br />
                        RESTAURANTES
                    </span>
                    <span className={styles.titulo2}>
                        <br />
                        Y DUEÑOS DE
                        <br />
                        RESTAURANTES
                    </span>
                </h1>

                <h2 className="amsterdam-light">Despacho consultoria de restaurantes</h2>
            </div>

            <div className={styles.contenido2}>
                <div className={styles.contenido2Texto}>
                    <p className="alliance-text">
                        Somos restauranteros de profesión, obsesionados por la comida, apasionados por el servicio y por crear alternativas creativas
                        de negocio para hacer negocio.
                    </p>
                </div>

                <BotonNav dataCta="inicio-1-btn">
                    Agenda una llamada <br />
                    con nuestro Director
                </BotonNav>
            </div>
        </section>
    );
};
