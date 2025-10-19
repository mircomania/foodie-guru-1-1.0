import Logo from '../../assets/images/logo.png';

import { NavLink } from 'react-router-dom';

import { navLinks } from '../utils/NavBarMenu';
import { useMediaQuery } from '../../hooks/UseMediaQuery';
import { BurgerMenu } from './BurgerMenu';

export const Navbar = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <header>
            <nav className="navbar" aria-label="Menú de navegación principal">
                {/* LOGO  */}

                <div className="logo-container">
                    <NavLink to="/" aria-label="Ir a la página principal" data-link="navbar-logo-btn">
                        <img src={Logo} alt="Logotipo de Foodie Guru" className="logo-navbar" />
                    </NavLink>
                </div>

                {/* LISTA  */}

                {!isMobile && (
                    <ul className="menu-nav alliance-text">
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.to}
                                    title={item.title}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    {...(item.dataLink && { 'data-link': item.dataLink })}
                                    {...(item.dataCta && { 'data-cta': item.dataCta })}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>

            {/* BURGERMENU */}

            {isMobile && <BurgerMenu />}
        </header>
    );
};
