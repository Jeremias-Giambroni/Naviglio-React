import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./ConfirmModal.css";

export const ConfirmModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-icon">
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                </div>
                <h3 className="modal-title">Confirmar acción</h3>
                <p className="modal-message">{message}</p>
                <div className="modal-buttons">
                    <button className="modal-btn modal-btn-cancel" onClick={onCancel}>
                        Cancelar
                    </button>
                    <button className="modal-btn modal-btn-confirm" onClick={onConfirm}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};