import { useState } from "react";
import { ToastContext } from "./ToastContext";
import { Toast } from "../../components/Toast/Toast";
import "./ToastProvider.css";

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = (message, type = "info") => {
        const id = Date.now();
        const newToast = { id, message, type };
        
        setToasts((prev) => [...prev, newToast]);

        // Auto-remover después de 3 segundos
        setTimeout(() => {
            removeToast(id);
        }, 3000);
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const showSuccess = (message) => showToast(message, "success");
    const showError = (message) => showToast(message, "error");
    const showInfo = (message) => showToast(message, "info");
    const showWarning = (message) => showToast(message, "warning");

    return (
        <ToastContext.Provider value={{ showToast, showSuccess, showError, showInfo, showWarning }}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <Toast 
                        key={toast.id} 
                        message={toast.message} 
                        type={toast.type}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};