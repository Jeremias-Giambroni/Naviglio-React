import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {category} = useParams();

    useEffect(() => {
        getProducts(category)
        .then((data) => setProducts(data)  )
        .catch((err) => {
            console.log(err);
        });
    }, [category]);

    return(
        <section className="container-section">
            <h1>Bienvenidos a <span className="titulo-color">Naviglio</span></h1>
            <div className="container-items">
                <ItemList lista = {products}/>
            </div>
        </section>
    );
};