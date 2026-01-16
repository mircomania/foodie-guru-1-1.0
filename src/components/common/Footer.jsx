import logo from '../../assets/images/common/logo.webp';

import { useLocation, useNavigate } from 'react-router-dom';

import { navLinks } from '../utils/NavBarMenu';
import { SmartLink } from '../utils/SmartLink';

export const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <footer className="footer">
            <div className="contenido-footer">
                <div className="logo-contacto alliance-text">
                    <a to="/" aria-label="Ir a la página de inicio" data-link="footer-logo-btn" onClick={handleLogoClick}>
                        <img src={logo} alt="Logotipo de Foodie Guru en el pie de página" />
                    </a>

                    <p>Envíanos un mensaje</p>

                    <p>charly@foodieguru.mx</p>
                </div>

                <div className="nav-footer">
                    <ul className="alliance-text">
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <SmartLink
                                    to={item.to}
                                    title={item.title}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    {...(item.dataLink && { 'data-link': item.dataLink })}
                                    {...(item.dataCta && { 'data-cta': item.dataCta })}
                                >
                                    {item.label2}
                                </SmartLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="utils-footer alliance-text">
                <p>All right reserved.</p>

                <div className="utils-nav">
                    <SmartLink to="/politica-privacidad" title="Ver la política de privacidad" data-link="footer-politica-link">
                        Privacy Policy
                    </SmartLink>

                    <SmartLink to="/terminos-condiciones" title="Ver los términos y condiciones" data-link="footer-terminos-link">
                        Terms of Service
                    </SmartLink>

                    <SmartLink to="/faq" title="Ver las preguntas preguntas frecuentes" data-link="footer-faq-link">
                        FAQ
                    </SmartLink>
                </div>
            </div>
        </footer>
    );
};
