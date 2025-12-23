import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import "./RutaProtegida.css";

export const RutaProtegida = ({children}) => {
    const { user, loading } = useAuthContext();

    // Mientras carga la sesión desde sessionStorage, muestra un loader
    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Cargando...</span>
            </div>
        );
    }

    // Si no hay usuario autenticado, redirige al login
    if (!user) {
        return <Navigate to="/admin" replace />
    }

    return children;
}