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
                    <Link to={"/category/Torta"}>Tortas</Link>
                </li>
                <li>
                    <Link to={"/category/Alfajor"}>Alfajores</Link>
                </li>
                <li>
                    <Link to={"/category/Cookie"}>Cookies</Link>
                </li>
                <li>
                    <Link to={"/contacto"}>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}