import "./Nav.css"
import { Link } from "react-router-dom"
import { CATEGORIES_LIST, ROUTES } from "../../utils/constants"

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.HOME}>Inicio</Link>
                </li>
                {CATEGORIES_LIST.map((category) => (
                    <li key={category.id}>
                        <Link to={category.path}>{category.name}</Link>
                    </li>
                ))}
                <li>
                    <Link to={ROUTES.CONTACT}>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}