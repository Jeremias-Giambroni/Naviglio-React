import { useState } from "react";
import "./Form.css";


export const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${user.name}, su mensaje fue enviado correctamente`);
    setUser({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            required
          />
          <input 
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
            required
          />
          <input className="input-message"
            type="text"
            name="message"
            value={user.message}
            onChange={handleChange}
            placeholder="Escriba su mensaje "
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

