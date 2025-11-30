import styles from '../../../styles/modules/home/sectionLp7.module.css';

export const SectionLp7 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="formula-bold">
                    ¿POR QUÉ
                    <br />
                    FOODIE GURÚ?
                </h2>

                <p className="marker-text">
                    &quot;PARA ROMPER
                    <br />
                    LAS REGLAS
                    <br />
                    PRIMERO HAY QUE
                    <br />
                    CONOCERLAS&quot;
                </p>
            </header>

            <div className={styles.sectionContenido}>
                <p className="alliance-text">
                    En primer lugar, por la basta experiencia que desarrollamos durante todo el proyecto y nuestra forma humana de hacer las cosas -
                    somos muy obsesivos con el resultado, duros con la puntualidad y la disciplina. Por eso nosotros piloteamos el proyecto con el
                    estandarte de ser siempre la antítesis de aquel viejo protocolo de gritos, mentadas de madre y malos modales. Únicos en el mercado
                    que reconocemos que el activo #1 de un restaurante es su GENTE y es por eso que nuestra metodología está enfocada en VENDER,
                    CONECTAR y CRECER juntos y así todos ganemos.
                </p>
            </div>
        </section>
    );
};
