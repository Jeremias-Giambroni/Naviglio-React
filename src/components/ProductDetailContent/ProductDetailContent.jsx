import "./ProductDetailContent.css";

export const ProductDetailContent = ({ imageUrl, name, description, price, children }) => {
    return (
        <div className="product-detail-card">
            <div className="product-detail-image-section">
                <img src={imageUrl} alt={name} className="product-detail-image" />
            </div>
            <div className="product-detail-info-section">

                <h1 className="product-detail-title">{name}</h1>

                <p className="product-detail-price">Precio: ${price}</p>

                <div className="product-detail-description-box">
                    <h3 className="description-heading">Detalles del Producto</h3>
                    <p className="product-detail-description">{description}</p>
                </div>
                
                <div className="product-detail-actions">
                    {children}
                </div>

                {/*stock, rating, */}
            </div>
        </div>
    );
};