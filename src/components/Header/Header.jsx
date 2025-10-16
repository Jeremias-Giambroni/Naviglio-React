import "./Header.css";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Header = () => {
  // Simulamos un contador (luego podés reemplazarlo con el real del contexto o estado global)
  const {getTotalItems} = useCartContext()

  return (
    <header className="header">
      <Link to={"/"}>
        <img className="logo" src="/images/logo.png" alt="Logo" />
      </Link>

      <Nav />

      <Link to={"/cart"} className="cart-link">
        <div className="cart-container">
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
          {getTotalItems() > 0 && (
            <span className="cart-count">{getTotalItems()}</span>
          )}
        </div>
      </Link>
    </header>
  );
};