import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/data/products.json")  //llamada al json local por promesa
            .then((res) => { 
                if(!res.ok){ //chequeo de que la llamada al json funcionó
                    throw new Error("Hubo un problema al buscar productos") 
                }
                return res.json(); //recibo el json y lo transcribo a formato js -> array con objeto, para utilizarlo
            })
            .then((data) => {
                setProducts(data) //seteo la data para guardarla en products y poder trabajar con ella
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return(
        <section className="container-section">
            <h1>Bienvenidos a <span className="titulo-color">Naviglio</span></h1>
            <div className="container-items">
                <ItemList lista = {products}/>
            </div>
        </section>
    );
};