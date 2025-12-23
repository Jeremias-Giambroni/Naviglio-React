import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/products";
import { useAsync } from "../../hooks/useAsync";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const { data: detail, loading, error } = useAsync(
        () => getProductsById(id),
        [id]
    );

    return (
        <main className="item-detail-container">
            {loading && <p className="loading-message">Cargando producto...</p>}

            {error && <p className="error-message">❌ {error}</p>}

            {!loading && !error && detail && (
                <ItemDetail detail={detail} />
            )}
        </main>
    );
}