import styles from '../../../styles/modules/servicios/sectionSp3.module.css';

import img from '../../../assets/images/sectionSp3/img-sp-section-3-1.png';

import { BotonNav } from '../../utils/BotonNav';

export const SectionSp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <p className="alliance-text">
                Descubre qué tipo de restaurantero eres y entiende cómo llevas tu negocio. Este quiz te mostrará tu estilo de gestión, tus fortalezas
                y en qué puedes mejorar para hacer crecer tu restaurante.
            </p>

            <img src={img} alt="Carta misteriosa de Foodie Guru" />

            <div className={styles.sectionContenido}>
                <h2 className="formula-bold">
                    ¿QUIERES SABER QUÉ
                    <br />
                    TIPO DE RESTAURANTERO ERES?
                </h2>

                <BotonNav dataCta="servicios-1-btn">Constesta este Quiz</BotonNav>
            </div>
        </section>
    );
};
