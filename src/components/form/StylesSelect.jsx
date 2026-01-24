export const StylesSelect = {
    control: (provided) => ({
        ...provided,
        cursor: 'pointer',
        borderRadius: '5px',
        borderColor: 'var(--white-color)',
        borderWidth: '0px',
        borderStyle: 'none',
        boxShadow: 'none',
        border: 'none',
        fontSize: 'var(--select-font)',
        padding: '0px 0px',
        maxHeight: 'var(--select-height)',
        minHeight: 'var(--select-height)',
        width: 'var(--select-width)',
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
        fontSize: 'var(--placeholder-font)',
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
        fontSize: 'var(--placeholder-font)',
    }),

    multiValueRemove: (provided) => ({
        ...provided,
        color: 'var(--dark-color)',
    }),

    /* OPCION ELEGIDA */
    singleValue: (provided) => ({
        ...provided,
        color: 'var(--white-color)',
        fontSize: 'var(--select-font)',
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
        bottom: '100%',
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
        borderRadius: 'var(--menu-border)',
    }),

    /* CONTENEDOR DE CADA OPCION SINGULAR DEL SELECT */
    option: (provided) => ({
        ...provided,
        padding: 'var(--option-padding)',
        fontSize: 'var(--placeholder-font)',
        cursor: 'pointer',
        fontFamily: 'Alliance',
        backgroundColor: 'var(--gray-color)',
        color: 'var(--dark-color)',
        ':hover': { backgroundColor: 'var(--gray-color-2)' },
    }),
};
