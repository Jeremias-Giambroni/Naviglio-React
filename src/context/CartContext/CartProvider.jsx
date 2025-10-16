import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    //Funcion para determinar si el objeto agregado ya se encuentra en el carrito
    const exists = (id) => {
        const exist = cart.some((p) => p.id === id)
        return exist;
    };

    //Funcion para agregar item al carrito utilizando "exists" como la función encargada de ver si el producto ya estaba en el carrito
    const addItem = (item) => {

        if (exists(item.id)){
            alert("El producto ya existe en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert(`${item.name} ha sido agregado al carrito`);
    };

    //Funcion para vaciar el carrito
    const clearCart = () => {
        setCart([])
    };

    //Funcion para obtener cantidad de items en el cart (al aun no poder repetirlos obtendremos cuantos distintos hay)
    const getTotalItems = () => {
        if(cart.length){
            return cart.length;
        }
    };



    const values = { cart, addItem, clearCart, getTotalItems };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}