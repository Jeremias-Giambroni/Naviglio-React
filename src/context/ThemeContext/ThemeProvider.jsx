import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Leer tema guardado en localStorage
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "dark"; // Por defecto oscuro
    });

    useEffect(() => {
        // Aplicar el tema al documento
        document.documentElement.setAttribute("data-theme", theme);
        // Guardar en localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};