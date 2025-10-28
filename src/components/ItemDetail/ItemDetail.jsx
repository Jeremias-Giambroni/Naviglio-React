import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import { ProductDetailContent } from "../ProductDetailContent/ProductDetailContent"; 
import "./ItemDetail.css" 

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext()

    const handleAdd = (quantity) => {
        addItem({...detail, quantity});
    };

    return (
        <div className="container-item-detail">
            <ProductDetailContent {...detail}>

                <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />

            </ProductDetailContent>
        </div> 
    );
};