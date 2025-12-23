import { useState } from "react"
import { CartContext } from "./CartContext"
import { useToast } from "../ToastContext/useToast"
import { ConfirmModal } from "../../components/ConfirmModal/ConfirmModal"
import { MESSAGES } from "../../utils/constants"

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [showConfirm, setShowConfirm] = useState(false)
    const { showSuccess, showWarning, showInfo } = useToast()

    const exists = (id) => {
        const exist = cart.some((p) => p.id === id) 
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)){
            const updatedCart = cart.map((prod) =>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + item.quantity}
                }else{
                    return prod;
                }                
            });
            setCart(updatedCart)
            showInfo(MESSAGES.QUANTITY_UPDATED)
        }else{
            setCart([...cart, item]);
            showSuccess(MESSAGES.PRODUCT_ADDED(item.name));
        }
    };

    const deleteItem = (id) => {
        const filtered = cart.filter((p)=> p.id !== id)
        setCart(filtered)
        showWarning(MESSAGES.PRODUCT_DELETED);
    }

    const clearCart = () => {
        setCart([])
        showInfo(MESSAGES.CART_CLEARED)
    };

    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0)
        return totalItems
    };

    const total = () =>{
        const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
        return Math.round(total * 100) / 100;
    }

    const checkout = () => {
        setShowConfirm(true)
    }

    const handleConfirmCheckout = () => {
        showSuccess(MESSAGES.CHECKOUT_SUCCESS);
        clearCart();
        setShowConfirm(false)
    }

    const handleCancelCheckout = () => {
        setShowConfirm(false)
    }

    const values = { cart, addItem, clearCart, getTotalItems, deleteItem, total, checkout };

    return (
        <CartContext.Provider value={values}>
            {children}
            {showConfirm && (
                <ConfirmModal 
                    message={MESSAGES.CHECKOUT_CONFIRM}
                    onConfirm={handleConfirmCheckout}
                    onCancel={handleCancelCheckout}
                />
            )}
        </CartContext.Provider>
    )
}