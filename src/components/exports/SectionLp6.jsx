import styles from '../../styles/modules/sectionLp6.module.css';

import { useSectionLp6 } from '../../hooks/UseSectionLp6';

import { Cargando } from '../utils/Cargando';
import { ErrorCarga } from '../utils/ErrorCarga';

export const SectionLp6 = () => {
    const { comentarios, loading, error } = useSectionLp6();

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <div className={styles.sectionTitulo}>
                    <h2 className="formula-bold">
                        NUESTROS CLIENTES HABLAN,
                        <br />
                        NOSOTROS ESCUCHAMOS.
                    </h2>

                    <p className="alliance-text">Nuestro mayor orgullo es ver cómo cada restaurante logra crecer y consolidarse.</p>
                </div>

                <div className={styles.sectionComentarios}>
                    {loading && (
                        <div className={styles.cargandoContainer}>
                            <Cargando />
                        </div>
                    )}

                    {!loading && error && (
                        <div className={styles.errorContainer}>
                            <ErrorCarga />
                        </div>
                    )}

                    {!loading && !error && (
                        <div className={styles.comentarios}>
                            {comentarios.map((c) => (
                                <div key={c.id} className={styles.comentario}>
                                    <div className={styles.comentarioTexto}>
                                        <p className="alliance-text">{c.comentario}</p>
                                    </div>

                                    <div className={styles.comentarioExtras}>
                                        <div className={styles.comentarioPersona}>
                                            <h3 className="alliance-text">{c.nombre}</h3>
                                            <h4 className="alliance-text">{c.cargo}</h4>
                                        </div>

                                        <img src={c.logo} alt={c.nombre} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
