import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect para cargar la sesión al montar el componente
    useEffect(() => {
        const saved = sessionStorage.getItem("session");
        if (saved) {
            try {
                setUser(JSON.parse(saved));
            } catch (error) {
                console.error("Error al parsear sesión:", error);
                sessionStorage.removeItem("session");
            }
        }
        setLoading(false);
    }, []);

    const login = (name, password) => {
        if (name === "admin" && password === "1234") {
            const session = { name };
            setUser(session);
            sessionStorage.setItem("session", JSON.stringify(session));
            return true;
        }
        return false;
    };

    const logout = () => {
        sessionStorage.removeItem("session");
        setUser(null);
        // TODO: Reemplazar con toast notification
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};