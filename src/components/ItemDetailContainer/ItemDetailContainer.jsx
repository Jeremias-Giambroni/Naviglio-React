import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/products";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const { id } = useParams();

    useEffect(() => {
        setDetail(null);
        setIsLoading(true);
        setError(null);

        const fetchProduct = async () => {
            try {
                const product = await getProductsById(id);
                setDetail(product);
            } catch (err) {
                console.error("Error al obtener el producto:", err);
                setError("No se pudo cargar el detalle del producto. Inténtalo más tarde.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();

    }, [id]);
    return (
        <main className="item-detail-container">
            {isLoading && <p>Cargando producto...</p>}

            {error && <p className="error">{error}</p>}

            {!isLoading && !error && detail && (
                <ItemDetail detail={detail} />
            )}
        </main>
    );
}