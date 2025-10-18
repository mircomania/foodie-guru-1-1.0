export const navLinks = [
    { id: 'home', to: '/', label: 'Home', label2: 'Home', title: 'Ir al inicio', dataLink: 'navbar-inicio-link' },
    {
        id: 'nosotros',
        to: '/nosotros',
        label: 'Sobre nosotros',
        label2: 'Sobre nosotros',
        title: 'Conoce a los creadores de Foodie Guru',
        dataLink: 'navbar-nosotros-link',
    },
    {
        id: 'servicios',
        to: '/servicios',
        label: 'Servicios',
        label2: 'Servicios',
        title: 'Conoce los servicios de Foodie Guru',
        dataLink: 'navbar-servicios-link',
    },
    {
        id: 'contacto',
        to: '/contacto',
        label: (
            <>
                <div className="contacto-navbar">Contacto</div>
            </>
        ),
        label2: 'Contacto',
        title: 'Contactate con Foodie Guru',
        dataLink: 'navbar-contacto-link',
    },
];
