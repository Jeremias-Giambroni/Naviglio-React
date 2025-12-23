import { useState, useEffect } from "react";

/**
 * Hook personalizado para manejar operaciones asíncronas
 * @param {Function} asyncFunction - Función asíncrona a ejecutar
 * @param {Array} dependencies - Dependencias para re-ejecutar la función
 * @returns {Object} - { data, loading, error }
 */
export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const result = await asyncFunction();
                
                if (isMounted) {
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || "Ocurrió un error inesperado");
                    setData(null);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        // Cleanup function para evitar memory leaks
        return () => {
            isMounted = false;
        };
    }, dependencies);

    return { data, loading, error };
};