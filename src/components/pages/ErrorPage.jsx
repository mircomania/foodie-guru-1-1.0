import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modules/errorPage.module.css';

import { BotonNav } from '../utils/BotonNav';

const ErrorPage = () => {
    return (
        <main>
            <TitleSEO title="Foodie Guru | Error" description="Lo sentimos, la página que buscas no existe." metaNoIndex={true} />

            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="formula-bold">Error 404</h1>

                    <h2 className="alliance-text">Página no encontrada</h2>

                    <p className="alliance-text">Lo sentimos, la página que estás buscando no existe.</p>
                </header>

                <div className={styles.sectionContenido}>
                    <BotonNav to="/" ariaLabel="Ir a la página de inicio" title="Haz clic para ir a la página de inicio" dataLink="error-home-btn">
                        IR AL INICIO
                    </BotonNav>
                </div>
            </section>
        </main>
    );
};

export default ErrorPage;
