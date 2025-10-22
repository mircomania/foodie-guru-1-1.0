import { useEffect, useState } from 'react';

export const useSectionLp6 = () => {
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [comentariosRes] = await Promise.all([fetch('http://localhost:5000/comentarios')]);

                const comentariosData = await comentariosRes.json();

                setComentarios(comentariosData);
            } catch (err) {
                setError(err.message);
                console.error('Error en useSectionLp6:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { comentarios, loading, error };
};
