import { useMediaQuery } from '../../hooks/UseMediaQuery';
import { useMemo, useState, useEffect } from 'react';

import styles from '../../styles/modules/form.module.css';
import { StylesSelect } from './StylesSelect';

import Select from 'react-select';
import PropTypes from 'prop-types';

export const CustomSelect = ({ label, name, options, value, onChange, error, placeholder }) => {
    const isWide = useMediaQuery('(min-width: 1400px)');
    const isMedium = useMediaQuery('(min-width: 992px) and (max-width: 1399px)');

    const breakpoint = useMemo(() => {
        if (isWide) return 'wide';
        if (isMedium) return 'medium';
        return 'small';
    }, [isWide, isMedium]);

    const customStyles = useMemo(() => StylesSelect(breakpoint), [breakpoint]);

    // --- Control VISUAL del error ---
    const [showErrorStyle, setShowErrorStyle] = useState(true);

    useEffect(() => {
        if (error) setShowErrorStyle(true);
    }, [error]);

    return (
        <div className={`${styles.inputContainer} ${error && showErrorStyle ? styles.errorInput : ''}`}>
            <label htmlFor={name} className={styles.lectores}>
                {label}
            </label>

            <Select
                options={options}
                value={options.find((opt) => opt.value === value) || null}
                onMenuOpen={() => setShowErrorStyle(false)}
                onChange={(selected) => {
                    onChange(name, selected?.value || '');
                    if (selected?.value) {
                        setShowErrorStyle(false);
                    }
                }}
                onBlur={() => {
                    if (!value) {
                        setShowErrorStyle(true);
                    }
                }}
                placeholder={placeholder}
                aria-invalid={!!error}
                isSearchable={false}
                inputId={name}
                required
                styles={customStyles}
            />
        </div>
    );
};

CustomSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
};
