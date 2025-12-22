import PropTypes from 'prop-types';

export const PlayIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <polygon points="5,3 19,12 5,21" />
    </svg>
);

PlayIcon.propTypes = {
    size: PropTypes.number,
};
