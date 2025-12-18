import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BotonNav = ({ to = '/contacto', ariaLabel, className = 'boton-1 poppins-text', title, children, dataCta, dataLink }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const esExterno = to.startsWith('http://') || to.startsWith('https://');
    const esAncla = to.startsWith('#');
    const idDestino = to.replace('#', '');

    const handleClick = (e) => {
        if (!esAncla) return;

        e.preventDefault();

        // ANCLA EN HOME
        if (location.pathname === '/') {
            const target = document.getElementById(idDestino);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth',
                });
            }
            return;
        }

        // ANCLA DESDE OTRA RUTA
        navigate(`/#${idDestino}`);
    };

    // LINK EXTERNO
    if (esExterno) {
        return (
            <a
                href={to}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                title={title}
                {...(dataCta ? { 'data-cta': dataCta } : {})}
                {...(dataLink ? { 'data-link': dataLink } : {})}
            >
                {children}
            </a>
        );
    }

    // NAVEGACIÓN SPA (rutas + anclas)
    return (
        <NavLink
            to={esAncla ? '/' : to}
            onClick={handleClick}
            className={className}
            aria-label={ariaLabel}
            title={title}
            {...(dataCta ? { 'data-cta': dataCta } : {})}
            {...(dataLink ? { 'data-link': dataLink } : {})}
        >
            {children}
        </NavLink>
    );
};

BotonNav.propTypes = {
    to: PropTypes.string,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    dataCta: PropTypes.any,
    dataLink: PropTypes.any,
};
