import "./Item.css"

export const Item = ({ imageUrl, name, description, price, id, children}) => {
    return (
        <article className="product-item" key={id}>
            <div className="image-container">
                <img src={imageUrl} alt={description} />
            </div>
            <h2 className="product-title">{name}</h2>
            <p>Precio: ${price}</p>
            {children}
        </article>
    )
}

