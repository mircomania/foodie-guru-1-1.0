import PropTypes from 'prop-types';

export const UnmuteIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Speaker */}
        <polygon points="5 9 9 9 13 5 13 19 9 15 5 15" />

        {/* Sound wave */}
        <path d="M16 12c0-1.5-.8-2.8-2-3.5" />
        <path d="M16 12c0 1.5-.8 2.8-2 3.5" />
    </svg>
);

UnmuteIcon.propTypes = {
    size: PropTypes.number,
};
