import React, { useContext, useRef, useState } from "react";
import { contexto } from "../providers/CustomProvider";


function Formulario({ mostrarFinalizarCompra, setMostrarFinalizarCompra, datosFormulario }) {
    const nombreRef = useRef(null);
    const telefonoRef = useRef(null);
    const gmailRef = useRef(null);
    const [nombreError, setNombreError] = useState("");
    const [telefonoError, setTelefonoError] = useState("");
    const [gmailError, setGmailError] = useState("");
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    const { usuario, updateUsuario } = useContext(contexto);


    const handleClick = () => {
        const nombre = nombreRef.current.value;
        const telefono = telefonoRef.current.value;
        const gmail = gmailRef.current.value;
        let isValid = true;

        if (nombre.length < 2) {
            setNombreError("El nombre debe tener al menos 2 caracteres");
            isValid = false;
        } else {
            setNombreError("");
        }

        if (!/^\d{10}$/.test(telefono)) {
            setTelefonoError("El número de teléfono debe contener 10 dígitos numéricos");
            isValid = false;
        } else {
            setTelefonoError("");
        }

        if (!/^\S+@\S+\.\S+$/.test(gmail)) {
            setGmailError("La dirección de correo electrónico no es válida");
            isValid = false;
        } else {
            setGmailError("");
        }

        if (isValid) {
            const datos = { nombre, telefono, gmail };
            updateUsuario(datos);
            setFormularioEnviado(true);
            setMostrarFinalizarCompra(true);
        }
    }

    return (
        <div className="Formulario">
            {formularioEnviado ? (
                <p>¡Formulario enviado con éxito!</p>
            ) : (
                <div  className="Formulario-">
                    <input ref={nombreRef} type="text"  placeholder="Nombre" required />
                    {nombreError && <p >{nombreError}</p>}
                    <input ref={telefonoRef} type="text" placeholder="Telefono" required />
                    {telefonoError && <p className="error-message">{telefonoError}</p>}
                    <input ref={gmailRef} type="text"  placeholder="Gmail" required />
                    {gmailError && <p className="error-message">{gmailError}</p>}
                    <button onClick={handleClick} >
                        Enviar
                    </button>
                </div>
            )}
        </div>
    );
}

export default Formulario;