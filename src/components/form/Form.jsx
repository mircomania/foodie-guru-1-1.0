import { useState, useEffect } from 'react';

import styles from '../../styles/modules/form.module.css';

import { useForm } from '../../hooks/UseForm';

import { Spinner } from '../../assets/icons/Spinner';

import PhoneInput from 'react-phone-input-2';
import { CustomSelect } from './CustomSelect';

import { ventas } from './ventasForm';
import { interesado } from './interesadoForm';

export const Form = () => {
    const [hideErrorOnFocus, setHideErrorOnFocus] = useState({});

    const handleFocusRemoveError = (field) => {
        setHideErrorOnFocus((prev) => ({
            ...prev,
            [field]: true,
        }));
    };

    const [showPhoneUI, setShowPhoneUI] = useState(false);

    const ventasOptions = ventas.map((e) => ({ value: e, label: e }));
    const interesadosOptions = interesado.map((e) => ({ value: e, label: e }));

    const { formData, errors, loading, handleChange, updateField, handleSubmit, showAlert } = useForm(
        {
            nombre: '',
            email: '',
            telefono: '',
            interesado: '',
            venta: '',
            ciudad: '',
            comentario: '',
        },
        (success, data) => {
            if (success) {
                showAlert('Excelente', 'Datos enviados correctamente.<br>Pronto nos pondremos en contacto contigo.', 'success', '#7f8ac7');
            } else {
                showAlert('Ups', 'Hubo un error al enviar los datos.', 'error', '#ac3150');
            }
        }
    );

    useEffect(() => {
        const newState = {};
        Object.keys(errors).forEach((field) => {
            newState[field] = false;
        });
        setHideErrorOnFocus(newState);
    }, [errors]);

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
                    className={`${styles.formControl} ${errors.nombre && !hideErrorOnFocus.nombre ? styles.errorInput : ''}`}
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onFocus={() => handleFocusRemoveError('nombre')}
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
                    className={`${styles.formControl} ${errors.email && !hideErrorOnFocus.email ? styles.errorInput : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocusRemoveError('email')}
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
                        handleFocusRemoveError('telefono');
                    }}
                    onChange={(phone) => {
                        const formatted = phone ? `+${phone}` : '';
                        handleChange({ target: { name: 'telefono', value: formatted } });
                    }}
                    inputClass={`${styles.formControl} ${errors.telefono && !hideErrorOnFocus.telefono ? styles.errorInput : ''}`}
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
                label="Usas alguna herramienta de gestión"
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
                    className={`${styles.formControl} ${errors.ciudad && !hideErrorOnFocus.ciudad ? styles.errorInput : ''}`}
                    id="ciudad"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    onFocus={() => handleFocusRemoveError('ciudad')}
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
                    <span style={{ paddingBottom: '5px', visibility: loading ? 'hidden' : 'visible' }}>Enviar</span>
                    {loading && (
                        <div>
                            <Spinner size={24} color="var(--dark-color)" strokeWidth={3} speed={1} />
                        </div>
                    )}
                </button>
            </div>

            <div className={`${styles.mensajeErrorGeneral} ${Object.keys(errors).length > 0 ? styles.visible : ''}`}>
                <p className="alliance-text">Por favor completa el formulario</p>
            </div>
        </form>
    );
};
