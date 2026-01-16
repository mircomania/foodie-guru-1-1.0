import logo from '../../assets/images/common/logo.webp';

export const Cargando = () => {
    return (
        <div className="cargando-container">
            <img src={logo} alt="Logotipo de Foodie Guru" />

            <p className="formula-light typing">Cargando...</p>
        </div>
    );
};
