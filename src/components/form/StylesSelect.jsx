export const StylesSelect = (breakpoint) => {
    return {
        control: (provided) => ({
            ...provided,
            cursor: 'pointer',
            borderRadius: '5px',
            borderColor: 'var(--white-color)',
            borderWidth: '0px',
            borderStyle: 'none',
            boxShadow: 'none',
            border: 'none',
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '16px',
            padding: '0px 0px',
            maxHeight: breakpoint === 'wide' ? '45px' : breakpoint === 'medium' ? '32px' : '32px',
            minHeight: breakpoint === 'wide' ? '45px' : breakpoint === 'medium' ? '32px' : '32px',
            maxWidth: breakpoint === 'wide' ? '600px' : breakpoint === 'medium' ? '550px' : '325px',
            backgroundColor: 'var(--gray-color-4)',
            color: 'var(--gray-color)',
            fontFamily: 'Alliance',
            marginBottom: '0px',
        }),

        valueContainer: (provided) => ({
            ...provided,
            padding: '0px 10px',
            color: 'var(--gray-color)',
        }),

        /* PLACEHOLDER */
        placeholder: (provided) => ({
            ...provided,
            color: 'var(--gray-color)',
            marginLeft: '2px',
            marginRight: '0px',
            fontFamily: 'Alliance',
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '13px',
        }),

        multiValue: (provided) => ({
            ...provided,
            margin: '2px',
            paddingTop: '0',
            paddingBottom: '2px',
            color: 'var(--dark-color)',
            backgroundColor: 'red',
            borderRadius: '12px',
        }),

        multiValueLabel: (provided) => ({
            ...provided,
            color: 'var(--dark-color)',
            fontFamily: 'Alliance',
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '13px',
        }),

        multiValueRemove: (provided) => ({
            ...provided,
            color: 'var(--dark-color)',
        }),

        /* OPCION ELEGIDA */
        singleValue: (provided) => ({
            ...provided,
            color: 'var(--white-color)',
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '16px',
            padding: '0px 0px',
        }),

        /* CONTAINER DE | y v */
        indicatorsContainer: (provided) => ({
            ...provided,
            alignItems: 'center',
            display: 'flex',
            flexShrink: 0,
            boxSizing: 'border-box',
        }),

        /* | */
        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: 'var(--gray-color-4)',
            width: '1px',
            marginTop: 0,
            marginBottom: 0,
        }),

        /* v */
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0px 8px',
            color: 'var(--gray-color)',
            ':hover': { color: 'var(--yellow-color)' },
        }),

        /* MENU COMPLETO (EL BACKGROUND SOLO SE APLICA SI NO HAY COLOR EN "option") */
        menu: (provided) => ({
            ...provided,
            top: '0',
            botton: '100%',
            backgroundColor: 'var(--white-color)',
            boxShadow: 'none',
            borderRadius: '5px',
            marginBottom: '0px',
            marginTop: '0px',
        }),

        menuList: (provided) => ({
            ...provided,
            maxHeight: '300px',
            paddingBottom: '0px',
            paddingTop: '0px',
            borderRadius: breakpoint === 'wide' ? '5px' : breakpoint === 'medium' ? '5px' : '5px',
        }),

        /* CONTENEDOR DE CADA OPCION SINGULAR DEL SELECT */
        option: (provided) => ({
            ...provided,
            padding: breakpoint === 'wide' ? '6px 12px' : breakpoint === 'medium' ? '4px 12px' : '4px 12px',
            fontSize: breakpoint === 'wide' ? '18px' : breakpoint === 'medium' ? '16px' : '13px',
            cursor: 'pointer',
            fontFamily: 'Alliance',
            backgroundColor: 'var(--gray-color)',
            color: 'var(--dark-color)',
            ':hover': { backgroundColor: 'var(--gray-color-2)' },
        }),
    };
};
