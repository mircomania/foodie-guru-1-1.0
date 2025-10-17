import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { BurgerIcon } from '../utils/BurgerIcon';

import LogoBurger from '../../assets/images/logo.png';

import { navLinks } from '../utils/NavBarMenu';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(isOpen && window.scrollY > 0.1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <div className="burger-menu" ref={menuRef}>
            {/* ICONO */}

            <BurgerIcon onClick={toggleMenu} className={`burger-menu-icon ${isScrolled && isOpen ? 'fixed' : 'absolute'}`} aria-label="Abrir menú" />

            {/* CONTENEDOR LISTA */}

            <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
                {/* LISTA  */}

                <ul className="burger-menu-nav alliance-text">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <NavLink to={link.to} onClick={toggleMenu} title={link.title} data-link={link.dataLink}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="container-bajo-mobile">
                    {/* LOGO  */}

                    <div className="logo-mobile-menu">
                        <img src={LogoBurger} alt="Logotipo de Foodie Guru" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
        </div>
    );
};
