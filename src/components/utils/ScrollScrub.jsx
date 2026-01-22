import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const ScrollScrub = ({ children, from = { x: 0, y: 100 }, to = { x: 0, y: 0 }, start = 0.9, end = 0.2 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const wrapper = ref.current;
        if (!wrapper) return;

        const targets = wrapper.querySelectorAll('[data-scroll-scrub]');
        if (!targets.length) return;

        const onScroll = () => {
            const vh = window.innerHeight;

            targets.forEach((target) => {
                const rect = target.getBoundingClientRect();

                const startPoint = vh * start;
                const endPoint = vh * end;

                const progress = Math.min(Math.max((startPoint - rect.top) / (startPoint - endPoint), 0), 1);

                const x = from.x + (to.x - from.x) * progress;
                const y = from.y + (to.y - from.y) * progress;

                target.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                target.style.willChange = 'transform';
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, [from, to, start, end]);

    return (
        <div ref={ref} style={{ display: 'contents' }}>
            {children}
        </div>
    );
};

ScrollScrub.propTypes = {
    children: PropTypes.node.isRequired,
    from: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    to: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    start: PropTypes.number,
    end: PropTypes.number,
};
