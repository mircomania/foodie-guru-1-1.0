import { TitleSEO } from '../utils/TitleSEO';

import { SectionSp1 } from '../exports/servicios/SectionSp1';
import { SectionSp2 } from '../exports/servicios/SectionSp2';
import { SectionSp3 } from '../exports/servicios/SectionSp3';

const ServiciosPage = () => {
    return (
        <main>
            <TitleSEO
                title="Foodie Guru | Servicios"
                description="Foodie Guru ofrece servicios de consultoría gastronómica en Monterrey, Nuevo León. Ventas, operaciones, marketing y rentabilidad para restaurantes."
                canonical="https://foodieguru.mx/servicios"
            />

            <SectionSp1 />

            <SectionSp2 />

            <SectionSp3 />
        </main>
    );
};

export default ServiciosPage;
