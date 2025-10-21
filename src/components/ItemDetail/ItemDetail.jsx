import { useCartContext } from "../../context/CartContext/useCartContext";
import { ProductDetailContent } from "../ProductDetailContent/ProductDetailContent"; 
import "./ItemDetail.css" 

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext()

    return (
        <div className="container-item-detail">
            <ProductDetailContent {...detail}>
                <button 
                    onClick={() => addItem(detail)}
                    className="add-to-cart-btn" 
                >
                    Agregar al carrito
                </button>
            </ProductDetailContent>
        </div> 
    );
};