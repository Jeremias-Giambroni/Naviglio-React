import { useContext } from "react";
import { CartContext } from "./CartContext";

//importo

export const useCartContext = () => {
    return useContext(CartContext)
}