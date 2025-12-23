import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CATEGORIES_LIST, ROUTES } from "../../utils/constants";
import "./MobileMenu.css";

export const MobileMenu = ({ isOpen, onClose }) => {
    const handleLinkClick = () => {
        onClose();
    };

    return (
        <>
            {/* Overlay oscuro */}
            <div 
                className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />
            
            {/* Menú lateral */}
            <aside className={`mobile-menu ${isOpen ? 'open' : ''}`} aria-label="Menú de navegación móvil">
                <div className="mobile-menu-header">
                    <h2>Menú</h2>
                    <button 
                        className="close-menu-btn" 
                        onClick={onClose}
                        aria-label="Cerrar menú"
                        type="button"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <nav className="mobile-nav">
                    <ul>
                        <li>
                            <Link to={ROUTES.HOME} onClick={handleLinkClick}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to={CATEGORIES_LIST[0].path} onClick={handleLinkClick}>
                                {CATEGORIES_LIST[0].name}
                            </Link>
                        </li>
                        <li>
                            <Link to={CATEGORIES_LIST[1].path} onClick={handleLinkClick}>
                                {CATEGORIES_LIST[1].name}
                            </Link>
                        </li>
                        <li>
                            <Link to={CATEGORIES_LIST[2].path} onClick={handleLinkClick}>
                                {CATEGORIES_LIST[2].name}
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES.CONTACT} onClick={handleLinkClick}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};