import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCircleCheck, 
    faCircleXmark, 
    faCircleInfo, 
    faTriangleExclamation,
    faXmark 
} from "@fortawesome/free-solid-svg-icons";
import "./Toast.css";

export const Toast = ({ message, type, onClose }) => {
    const icons = {
        success: faCircleCheck,
        error: faCircleXmark,
        info: faCircleInfo,
        warning: faTriangleExclamation
    };

    return (
        <div className={`toast toast-${type}`}>
            <FontAwesomeIcon icon={icons[type]} className="toast-icon" />
            <span className="toast-message">{message}</span>
            <button className="toast-close" onClick={onClose} aria-label="Cerrar notificación">
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    );
};