import "./Cart.css"
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item"
import { MESSAGES, ROUTES } from "../../utils/constants";

export const Cart = () => {
    const {cart, clearCart, deleteItem, total, checkout} = useCartContext()

    return (
        <section className="item-list-container">
            <h2 className="title-cart">Carrito de compras</h2>
            <div className="cart-items">
                {cart.length ? (
                    cart.map((prod) => (
                        <Item key={prod.id} {...prod} className="cart-item-layout">
                            <div className="quantity-delete-container">
                                <span>Cantidad: {prod.quantity}</span>
                                <button className="delete-btn" onClick={() => deleteItem(prod.id)}>
                                    Eliminar
                                </button>
                            </div>
                        </Item>
                    ))
                ) : (
                    <p className="empty-cart">{MESSAGES.CART_EMPTY}</p>
                )}
            </div>
            {cart.length ? (
                <div className="btn-container">
                <div className="total-pagar">
                    <p>Total a pagar: ${total()}</p>
                </div>
                <div className="btn-end-cart">
                    <button className="btn" onClick={checkout}>
                        Finalizar compra
                    </button>
                    <button className="btn" onClick={clearCart}>
                        Vaciar carrito
                    </button>
                </div>
            </div>
            ) : (
                <Link className="btn" to={ROUTES.HOME}>
                    Volver al inicio
                </Link>
            )}

        </section>
    )
}    