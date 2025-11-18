import styles from '../../styles/modules/sectionLp7.module.css';

import { ArrowIcon } from '../utils/ArrowIcon';

import { NavLink } from 'react-router-dom';

export const SectionLp7 = () => {
    return (
        <NavLink to="/nosotros" className={styles.linkContainer} data-link="home-team-section" aria-label="Conoce al team Foodie Gurú">
            <section className={styles.sectionContainer}>
                <div className={styles.sectionContenido}>
                    <h2 className="formula-bold">CONOCE AL TEAM FOODIE GURÚ</h2>
                </div>

                <ArrowIcon className={styles.flecha} direction="downRight" />

                <div className={styles.sectionFondo}></div>
            </section>
        </NavLink>
    );
};
