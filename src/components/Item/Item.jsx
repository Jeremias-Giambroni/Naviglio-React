import "./Item.css"

export const Item = ({ imageUrl, name, description, price, id, children}) => {
    return (
        <article className="product-item" key={id}>
            <img src={imageUrl} alt={description} />
            <h2 className="product-title">{name}</h2>
            <p>Precio: ${price}</p>
            <p>Descrpcion: {description}</p>
            {children}
        </article>
    )
}

