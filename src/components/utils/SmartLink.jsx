import PropTypes from 'prop-types';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const SmartLink = ({ to, children, ...props }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (location.pathname === to) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate(to);
        }
    };

    return (
        <NavLink to={to} onClick={handleClick} {...props}>
            {children}
        </NavLink>
    );
};

SmartLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
