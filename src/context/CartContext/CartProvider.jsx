import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    //Verifica si al menos un elemento en el array cart tiene el id pasado como argumento. Devuelve true o false.
    const exists = (id) => {
        const exist = cart.some((p) => p.id === id) 
        return exist;
    };


    //Agregar productos al carrito con Map Y SpreadOperator.


    const addItem = (item) => {
        if (exists(item.id)){
            //map, cuido mutación a nivel del array
            const updatedCart = cart.map((prod) =>{
                if(prod.id === item.id){
                    //Cuido mutación a nivel de objeto
                    return {...prod, quantity: prod.quantity + item.quantity}
                }else{
                    return prod;
                }                
            });
            setCart(updatedCart)
            alert("Agregado al carrito")
        }else{
            setCart([...cart, item]);
            alert(`${item.name} ha sido agregado al carrito`);
        }
    };


    //Eliminar producto con Filter


    const deleteItem = (id) => {
        const filtered = cart.filter((p)=> p.id !== id)
        setCart(filtered)
        alert("producto eliminado");
    }


    const clearCart = () => {
        setCart([])
    };


    //Calcular total de items en el carrito

    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0)
        return totalItems
    };

    //Calcular precio total de la suma de todos los productos del carrito

    const total = () =>{
        const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

        return Math.round(total * 100) / 100;
    }



    const values = { cart, addItem, clearCart, getTotalItems, deleteItem, total };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}