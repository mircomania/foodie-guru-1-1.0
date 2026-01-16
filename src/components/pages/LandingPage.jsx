import { TitleSEO } from '../utils/TitleSEO';

import { SectionLp1 } from '../exports/home/SectionLp1';
import { SectionLp2 } from '../exports/home/SectionLp2';
import { SectionLp3 } from '../exports/home/SectionLp3';
import { SectionLp4 } from '../exports/home/SectionLp4';
import { SectionLp5 } from '../exports/home/SectionLp5';
import { SectionLp6 } from '../exports/home/SectionLp6';
import { SectionLp7 } from '../exports/home/SectionLp7';

const LandingPage = () => {
    return (
        <main>
            <TitleSEO
                title="Foodie Guru | Expertos en Restaurantes"
                description="Foodie Guru es una consultora especializada en restaurantes en Monterrey, Nuevo León. Transformamos negocios gastronómicos en marcas rentables."
                canonical="https://foodieguru.mx/"
            />

            <SectionLp1 />

            <SectionLp2 />

            <SectionLp3 />

            <SectionLp4 />

            <SectionLp5 />

            <SectionLp6 />

            <SectionLp7 />
        </main>
    );
};

export default LandingPage;
