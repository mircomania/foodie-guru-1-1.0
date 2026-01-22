import { useEffect, useRef, useState, cloneElement, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ScrollReveal = ({
    children,
    mode = 'clone',
    from = 'bottom',
    distance = 60,
    duration = 0.6,
    delay = 0,
    easing = 'ease-out',
    threshold = 0.1,
    once = true,
    disabled = false,
}) => {
    const ref = useRef(null);
    const hasAnimated = useRef(false);
    const [visible, setVisible] = useState(disabled);

    useEffect(() => {
        if (disabled) return;

        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (once && hasAnimated.current) return;

                if (entry.isIntersecting) {
                    setVisible(true);
                    hasAnimated.current = true;
                    if (once) observer.unobserve(node);
                }
            },
            { threshold },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [disabled, once, threshold]);

    const transform = useMemo(() => {
        if (visible || disabled) return 'translate(0,0)';

        switch (from) {
            case 'top':
                return `translateY(-${distance}px)`;
            case 'bottom':
                return `translateY(${distance}px)`;
            case 'left':
                return `translateX(-${distance}px)`;
            case 'right':
                return `translateX(${distance}px)`;
            default:
                return `translateY(${distance}px)`;
        }
    }, [visible, disabled, from, distance]);

    const style = {
        opacity: visible || disabled ? 1 : 0,
        transform,
        transition: disabled
            ? 'none'
            : `opacity ${duration}s ${easing} ${delay}s,
            transform ${duration}s ${easing} ${delay}s`,
        willChange: disabled ? 'auto' : 'opacity, transform',
    };

    if (mode === 'wrap') {
        return (
            <span ref={ref} style={{ display: 'inline-block', ...style }}>
                {children}
            </span>
        );
    }

    return cloneElement(children, {
        ref,
        style: {
            ...children.props.style,
            ...style,
        },
    });
};

ScrollReveal.propTypes = {
    mode: PropTypes.string,
    children: PropTypes.node.isRequired,
    from: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    distance: PropTypes.number,
    duration: PropTypes.number,
    delay: PropTypes.number,
    easing: PropTypes.string,
    threshold: PropTypes.number,
    once: PropTypes.bool,
    disabled: PropTypes.bool,
};
