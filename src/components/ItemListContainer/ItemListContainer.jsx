import "./ItemListContainer.css"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import { useAsync } from "../../hooks/useAsync";

export const ItemListContainer = () => {
    const { category } = useParams();

    const { data: products, loading, error } = useAsync(
        () => getProducts(category),
        [category]
    );

    return (
        <section className="container-section">
            <div className="title-container">
                <h1>Bienvenidos a <span className="titulo-color">Naviglio</span></h1>
            </div>
            {loading && <p className="loading-message">Cargando productos...</p>}
            
            {error && <p className="error-message">❌ {error}</p>}
            
            {!loading && !error && products && (
                <div className="container-items">
                    <ItemList lista={products} />
                </div>
            )}
        </section>
    );
};