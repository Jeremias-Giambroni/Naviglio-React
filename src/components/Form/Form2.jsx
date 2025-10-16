import { useState } from "react"

export const Form2 = () =>{
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Funciona al fin. Estado: ${nombre}, ${email}`);
        setNombre("");
        setEmail("");
        setPass("");
    };

    return(
        <form onSubmit={handleSubmit} action=""> 
            <input
             type="text"
             placeholder="nombre"
             name="nombre"
             value={nombre}
             onChange={(e) => setNombre(e.target.value)}
            />
            <input
             type="email"
             placeholder="Ingrese email"
             name="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <input 
             type="password"
             placeholder="Ingrese contraseña"
             name="pass"
             value={pass}
             onChange={(e) => setPass(e.target.value)}
            />
            <input
             type="submit"
             value={"Enviar"}
            />
        </form>
    );
};