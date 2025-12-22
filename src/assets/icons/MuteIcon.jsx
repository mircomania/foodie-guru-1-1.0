import PropTypes from 'prop-types';

export const MuteIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Speaker */}
        <polygon points="5 9 9 9 13 5 13 19 9 15 5 15" />

        {/* X */}
        <line x1="16" y1="9" x2="21" y2="15" />
        <line x1="21" y1="9" x2="16" y2="15" />
    </svg>
);

MuteIcon.propTypes = {
    size: PropTypes.number,
};
