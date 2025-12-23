import "./Count.css";
import { useState } from "react";
import { useToast } from "../../context/ToastContext/useToast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { MESSAGES, DEFAULT_STOCK } from "../../utils/constants";

export const Count = ({btnText, onConfirm, stock = DEFAULT_STOCK}) => {
    const [count, setCount] = useState(0);
    const [isAdding, setIsAdding] = useState(false);
    const { showWarning } = useToast();

    const increment = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        } else {
            showWarning(MESSAGES.MAX_STOCK(stock));
        }
    };

    const decrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const confirm = async () => {
        if (count > 0) {
            setIsAdding(true);
            await onConfirm(count);
            
            // Mostrar checkmark por 1 segundo
            setTimeout(() => {
                setIsAdding(false);
                setCount(0);
            }, 1000);
        } else {
            showWarning(MESSAGES.MIN_QUANTITY);
        }
    };

    return (
        <div className="count-container">
            <div className="count-info">
                <span className="stock-available">Stock disponible: {stock}</span>
            </div>
            <div className="count-buttons">
                <button 
                    className="count-btn" 
                    onClick={decrement} 
                    disabled={count === 0 || isAdding}
                    aria-label="Disminuir cantidad"
                >
                    -
                </button>
                <span className="count-display">{count}</span>
                <button 
                    className="count-btn" 
                    onClick={increment}
                    disabled={count >= stock || isAdding}
                    aria-label="Aumentar cantidad"
                >
                    +
                </button>
            </div>

            <button 
                className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
                onClick={confirm}
                disabled={count === 0 || isAdding}
            >
                {isAdding ? (
                    <>
                        <FontAwesomeIcon icon={faCheck} className="check-icon" />
                        <span>Agregado</span>
                    </>
                ) : (
                    btnText
                )}
            </button>
        </div>
    );
};