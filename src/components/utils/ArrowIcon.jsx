// <ArrowIcon className={styles.flecha} color="var(--yellow-color)" size={40} direction="down" />

import PropTypes from 'prop-types';

export const ArrowIcon = ({ size, color, direction = 'right', strokeWidth = 2, className = '' }) => {
    const rotations = {
        right: 'rotate(0 12 12)',
        down: 'rotate(90 12 12)',
        left: 'rotate(180 12 12)',
        up: 'rotate(-90 12 12)',
        upRight: 'rotate(-45 12 12)',
        downRight: 'rotate(45 12 12)',
        downLeft: 'rotate(135 12 12)',
        upLeft: 'rotate(-135 12 12)',
    };

    const strokeColor = color || 'currentColor';

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            width={size || undefined}
            height={size || undefined}
        >
            <g transform={rotations[direction]}>
                {/*
                    línea principal de la flecha
                    - x1 controla el "inicio" de la línea (más chico = línea más larga hacia atrás).
                    - x2 controla el "final" de la línea (más chico = línea más corta hacia la punta).
                */}
                <line x1="1" y1="12" x2="19" y2="12" />

                {/*
                    punta de la flecha.

                    12 5 = punto superior de la punta
                    19 12 = punto medio (donde se une con la línea principal)
                    12 19 = punto inferior de la punta
                */}
                <polyline points="12 5 19 12 12 19" />
            </g>
        </svg>
    );
};

ArrowIcon.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right', 'upRight', 'downRight', 'downLeft', 'upLeft']),
    strokeWidth: PropTypes.number,
    className: PropTypes.string,
};
