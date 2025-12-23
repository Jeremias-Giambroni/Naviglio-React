import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import { ProductDetailContent } from "../ProductDetailContent/ProductDetailContent"; 
import { DEFAULT_STOCK } from "../../utils/constants";
import "./ItemDetail.css" 

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext()

    const handleAdd = (quantity) => {
        addItem({...detail, quantity});
    };

    // Usar el stock que viene de la API, o DEFAULT_STOCK si no existe
    const stock = detail.stock ?? DEFAULT_STOCK;

    return (
        <div className="container-item-detail">
            <ProductDetailContent {...detail}>
                <Count 
                    btnText={"Agregar al carrito"} 
                    onConfirm={handleAdd}
                    stock={stock}
                />
            </ProductDetailContent>
        </div> 
    );
};