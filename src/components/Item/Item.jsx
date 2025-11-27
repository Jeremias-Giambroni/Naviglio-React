import "./Item.css"

export const Item = ({ imageUrl, name, description, price, id, children, className}) => {
    return (
        <article className={`product-item ${className}`}key={id}>
            <div className="image-container">
                <img src={imageUrl} alt={description} />
            </div>
            <h2 className="product-title">{name}</h2>
            <p className="product-price">${price}</p>
            {children}
        </article>
    )
}

