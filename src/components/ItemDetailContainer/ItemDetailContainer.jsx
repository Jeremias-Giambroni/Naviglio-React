import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if(!res.ok){
                    throw new Error("Hubo un problema al cargar los productos")
                }

                return res.json();
            })
            .then((data) =>{
                const found = data.find((p) => p.id === id); //Comparo el que trajimos del Json con El de la URL que trajimos con useParams
                if (found) {
                   setDetail(found);
                } else {
                    throw new Error("Hubo un problema al cargar los productos")
                }
            })
            .catch((err) =>{
                console.log(err);
            });
    }, [id]);

    return (
        <main>
            {Object.keys(detail).length ? (  //object.keys detail nos sirve para evaluar si el objeto tiene productos y carguen automaticamente antes del cargando o si no hay que cargue
                <ItemDetail detail = {detail}/> 
            ) : (
                <p>Cargando...</p>
            )}
        </main>
    )
}