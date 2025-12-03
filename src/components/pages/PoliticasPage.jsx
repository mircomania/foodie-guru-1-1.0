import { TitleSEO } from '../utils/TitleSEO';

import { SectionPp1 } from '../exports/SectionPp1';

const PoliticasPage = () => {
    return (
        <main>
            <TitleSEO
                title="Foodie Guru | Política de Privacidad"
                description="Conoce cómo protegemos y utilizamos tu información personal en nuestra plataforma de Foodie Guru."
                canonical="https://foodieguru.mx/politica-privacidad"
            />

            <SectionPp1 />
        </main>
    );
};

export default PoliticasPage;
