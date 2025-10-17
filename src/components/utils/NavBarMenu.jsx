export const navLinks = [
    { id: 'home', to: '/', label: 'Home', title: 'Ir al inicio', dataLink: 'navbar-inicio-link' },
    {
        id: 'nosotros',
        to: '/nosotros',
        label: 'Sobre nosotros',
        title: 'Conoce a los creadores de Foodie Guru',
        dataLink: 'navbar-nosotros-link',
    },
    {
        id: 'servicios',
        to: '/servicios',
        label: 'Servicios',
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
        title: 'Contactate con Foodie Guru',
        dataLink: 'navbar-contacto-link',
    },
];
