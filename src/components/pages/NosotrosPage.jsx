import { TitleSEO } from '../utils/TitleSEO';

import { SectionNp1 } from '../exports/nosotros/SectionNp1';
import { SectionNp2 } from '../exports/nosotros/SectionNp2';
import { SectionNp3 } from '../exports/nosotros/SectionNp3';
import { SectionNp4 } from '../exports/nosotros/SectionNp4';

const NosotrosPage = () => {
    return (
        <main>
            <TitleSEO
                title="Foodie Guru | Nosotros"
                description="Conoce al equipo de Foodie Guru, expertos en consultoría para restaurantes en Monterrey, Nuevo León. Experiencia real en crecimiento gastronómico."
                canonical="https://foodieguru.mx/nosotros"
            />

            <SectionNp1 />

            <SectionNp2 />

            <SectionNp3 />

            <SectionNp4 />
        </main>
    );
};

export default NosotrosPage;
