import React, { useContext, useState } from "react";
import { contexto } from "../providers/CustomProvider";
import Formulario from "./Formulario";
import {
    addDoc,
    collection,
    getFirestore,
    serverTimestamp,
} from "firebase/firestore";
import { app } from "../firebaseConfig";

const CartWidget = () => {
    const valorDelContexto = useContext(contexto);
    const productos = valorDelContexto.carrito;
    const { incrementarCantidad, restarCantidad, calcularTotal } = valorDelContexto;
    const total = calcularTotal(productos);
    const [mostrarCarrito, setMostrarCarrito] = useState(true);
    const [resultadoId, setResultadoId] = useState(null);
    const { usuario, updateUsuario } = useContext(contexto);

    const handleFinalizarCompra = () => {
        const compra = {
            carrito: [{ productos }],
            usuario: { usuario },
            precioTotal: total,
            created_at: serverTimestamp(),
        };
        const db = getFirestore(app);
        const comprasCollection = collection(db, "compras");
        const consulta = addDoc(comprasCollection, compra);
        consulta
            .then((resultado) => {
                setResultadoId(resultado.id);
                setMostrarCarrito(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleFormularioSubmit = () => {
        setMostrarCarrito(false);
    };

    if (mostrarCarrito) {
        return (
            <>
                <h1 className="Compras">Carrito de Compras</h1>
                <div className="cartWidget">
                    {productos.map((producto) => (
                        <div key={producto.id}>
                            <ul>
                                <li>
                                    <img src={`./src/assets/${producto.img}`} alt={producto.nombre} />
                                </li>
                                <li>
                                    <h2>{producto.nombre}</h2>
                                </li>
                                <li>
                                    <h3>${producto.precio} x unidad</h3>
                                </li>
                                <li>
                                    <button onClick={() => restarCantidad(producto.id)}>-</button>
                                    {producto.cantidad}
                                    <button onClick={() => incrementarCantidad(producto.id)}>+</button>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <h3>El total a pagar: ${total}</h3>
                <Formulario
                    mostrarFinalizarCompra={mostrarCarrito}
                    setMostrarFinalizarCompra={setMostrarCarrito}
                    onSubmit={handleFormularioSubmit}
                />
                <div className="b-Cart">
                <button onClick={handleFinalizarCompra} >Finalizar Compra</button>
                </div>
            </>
        );
    } else {
        return (
            <div className="cartWidget-end">
                <h2>Gracias por su compra </h2>
                <h3>Numero de referencia : {resultadoId}</h3>
            </div>
        );
    }
};

export default CartWidget;
