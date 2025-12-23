import "./Header.css";
import { Nav } from "../Nav/Nav";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useEffect, useState } from "react";

export const Header = () => {
  const { getTotalItems } = useCartContext();
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [prevCount, setPrevCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentCount = getTotalItems();

  // Animar cuando cambia la cantidad de items
  useEffect(() => {
    if (currentCount > prevCount) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 600);
    }
    setPrevCount(currentCount);
  }, [currentCount, prevCount]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <Link to={"/"}>
          <img className="logo" src="/images/logo.png" alt="Logo Naviglio Pastelería" />
        </Link>

        {/* Nav desktop - oculto en mobile */}
        <Nav />

        <div className="header-actions">
          {/* Botón hamburguesa - solo visible en mobile */}
          <button 
            className="hamburger-btn"
            onClick={toggleMobileMenu}
            aria-label="Abrir menú"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Botón cambiar tema */}
          <ThemeToggle />

          <Link to={"/carrito"} className="cart-link">
            <div className={`cart-container ${animate ? 'cart-animate' : ''}`}>
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
              {currentCount > 0 && (
                <span className="cart-count">{currentCount}</span>
              )}
            </div>
          </Link>

          {user && (
            <button 
              onClick={handleLogout} 
              className="logout-btn"
              aria-label="Cerrar sesión"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="logout-icon" />
              <span className="logout-text">Salir</span>
            </button>
          )}
        </div>
      </header>

      {/* Menú mobile */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};