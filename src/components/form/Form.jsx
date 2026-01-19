import { useState, useCallback, useMemo } from 'react';

import styles from '../../styles/modules/form.module.css';

import { useForm } from '../../hooks/UseForm';

import { Spinner } from '../../assets/icons/Spinner';

import PhoneInput from 'react-phone-input-2';
import { CustomSelect } from './CustomSelect';

import { ventas } from './ventasForm';
import { interesado } from './interesadoForm';

let SwalPromise;

const loadSwal = () => {
    if (!SwalPromise) {
        SwalPromise = import('sweetalert2').then((m) => m.default);
    }
    return SwalPromise;
};

const baseSwalConfig = {
    scrollbarPadding: false,
    customClass: {
        popup: 'swal-custom-popup',
        title: 'swal-custom-title',
        htmlContainer: 'swal-custom-text',
        confirmButton: 'swal-custom-confirm',
        cancelButton: 'swal-custom-cancel',
    },
};

export const Form = () => {
    const [showPhoneUI, setShowPhoneUI] = useState(false);

    const ventasOptions = useMemo(() => ventas.map((e) => ({ value: e, label: e })), []);

    const interesadosOptions = useMemo(() => interesado.map((e) => ({ value: e, label: e })), []);

    const showSuccessAlert = useCallback(async () => {
        const Swal = await loadSwal();

        const result = await Swal.fire({
            ...baseSwalConfig,
            title: '¡Datos enviados correctamente!',
            text: '¿Quieres agendar una cita?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Agendar',
            cancelButtonText: 'No',
            customClass: {
                ...baseSwalConfig.customClass,
                popup: 'swal-custom-popup swal-success-popup',
            },
        });

        if (result.isConfirmed) {
            window.open('https://calendly.com/charly-foodieguru/microanalisis-foodie-guru-consulting', '_blank');
        }
    }, []);

    const showErrorAlert = useCallback(async () => {
        const Swal = await loadSwal();

        await Swal.fire({
            ...baseSwalConfig,
            title: 'Ups',
            text: 'Hubo un error al enviar los datos.',
            icon: 'error',
            confirmButtonText: 'Entendido',
            customClass: {
                ...baseSwalConfig.customClass,
                popup: 'swal-custom-popup swal-error-popup',
                title: 'swal-custom-title swal-error-title',
                confirmButton: 'swal-custom-confirm swal-error-confirm',
            },
        });
    }, []);

    const { formData, errors, loading, handleChange, updateField, handleSubmit } = useForm(
        {
            nombre: '',
            email: '',
            telefono: '',
            interesado: '',
            venta: '',
            ciudad: '',
            comentario: '',
        },
        {
            onSuccess: showSuccessAlert,
            onError: showErrorAlert,
        },
    );

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            {/* NOMBRE */}
            <div className={styles.inputContainer}>
                <label htmlFor="nombre" className={styles.lectores}>
                    Nombre y apellido
                </label>

                <input
                    placeholder="Nombre y Apellido"
                    type="text"
                    className={`${styles.formControl} ${errors.nombre ? styles.errorInput : ''}`}
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.nombre}
                />
            </div>

            {/* EMAIL */}
            <div className={styles.inputContainer}>
                <label htmlFor="email" className={styles.lectores}>
                    Correo electronico
                </label>
                <input
                    placeholder="Email"
                    type="email"
                    className={`${styles.formControl} ${errors.email ? styles.errorInput : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                />
            </div>

            {/* TELEFONO */}
            <div className={styles.inputContainer}>
                <label htmlFor="telefono" className={styles.lectores}>
                    Teléfono
                </label>
                <PhoneInput
                    country={showPhoneUI ? 'mx' : null}
                    value={formData.telefono}
                    onFocus={() => {
                        setShowPhoneUI(true);
                    }}
                    onChange={(phone) => {
                        const formatted = phone ? `+${phone}` : '';
                        handleChange({ target: { name: 'telefono', value: formatted } });
                    }}
                    inputClass={`${styles.formControl} ${errors.telefono ? styles.errorInput : ''}`}
                    containerClass={showPhoneUI ? 'phone-visible' : 'phone-hidden'}
                    inputProps={{
                        name: 'telefono',
                        required: true,
                        autoComplete: 'tel',
                        id: 'telefono',
                        placeholder: 'Teléfono',
                        'aria-invalid': !!errors.telefono,
                    }}
                    enableSearch
                    preferredCountries={['mx', 'us']}
                />
            </div>

            {/* INTERESADO */}
            <CustomSelect
                label="¿Cuántos son en tu equipo?"
                name="interesado"
                options={interesadosOptions}
                value={formData.interesado}
                onChange={updateField}
                error={errors.interesado}
                placeholder="Interesado en"
            />

            {/* VENTA */}
            <CustomSelect
                label="¿Cuál es la venta mensual de tu negocio?"
                name="venta"
                options={ventasOptions}
                value={formData.venta}
                onChange={updateField}
                error={errors.venta}
                placeholder="¿Cuál es la venta mensual de tu negocio?"
            />

            {/* CIUDAD */}
            <div className={styles.inputContainer}>
                <label htmlFor="ciudad" className={styles.lectores}>
                    Ciudad de la que nos contactas
                </label>
                <input
                    placeholder="Ciudad de la que nos contactas"
                    type="text"
                    className={`${styles.formControl} ${errors.ciudad ? styles.errorInput : ''}`}
                    id="ciudad"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.ciudad}
                />
            </div>

            {/* COMENTARIO */}
            <div className={styles.inputContainer}>
                <label htmlFor="comentario" className={styles.lectores}>
                    Algún comentario adicional
                </label>
                <textarea
                    placeholder="Algún comentario adicional"
                    className={styles.formControl}
                    name="comentario"
                    id="comentario"
                    value={formData.comentario}
                    onChange={handleChange}
                    rows="5"
                />
            </div>

            {/* BOTON ENVIAR */}
            <div className={styles.contentEnvio}>
                <button type="submit" className="boton-2 alliance-text" disabled={loading}>
                    {loading ? <Spinner size={22} color="var(--dark-color)" strokeWidth={3} speed={1} /> : 'Enviar'}
                </button>
            </div>

            <div className={`${styles.mensajeErrorGeneral} ${Object.keys(errors).length > 0 ? styles.visible : ''}`}>
                <p className="alliance-text">Por favor completa el formulario</p>
            </div>
        </form>
    );
};
