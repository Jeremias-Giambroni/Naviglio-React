import "./Nav.css"
import { Link } from "react-router-dom"


export const Nav = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/category/salado"}>Salado</Link>
                </li>
                <li>
                    <Link to={"/category/dulce"}>Dulce</Link>
                </li>
                <li>
                    <Link to={"/contacto"}>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}