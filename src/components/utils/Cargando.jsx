import logo from '../../assets/images/logo.png';

export const Cargando = () => {
    return (
        <div className="cargando-container">
            <img src={logo} alt="Logotipo de Foodie Guru" />

            <p className="poppins-text typing">Cargando...</p>
        </div>
    );
};
