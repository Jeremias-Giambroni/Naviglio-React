import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Seguinos en redes</h3>

        <div className="footer-icons">
          <a
            href="https://www.instagram.com/naviglio.pasteleria/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Naviglio — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};