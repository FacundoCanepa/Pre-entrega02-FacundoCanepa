import { createContext, useState } from "react";

export const contexto = createContext ()

const Provider = contexto.Provider 


const CustomProvider = (props) => {
    const [carrito, setCarrito] = useState([])
    const [usuario, setUsuario] = useState({
        nombre: "",
        telefono: "",
        gmail: "",
        });
    const handleAddCart = (product, cant) => {
        const existingProduct = carrito.find((item) => item.id === product.id);
        
        if (existingProduct) {
        const updatedCarrito = carrito.map((item) => {
            if (item.id === product.id) {
            return { item, cantidad: item.cantidad + cant };
            } else {
            return item;
            }
        });
        setCarrito(updatedCarrito);
        } else {
        const newProduct = { ...product, cantidad: cant };
        setCarrito([...carrito, newProduct]);
        }
    };
    const incrementarCantidad = (productId) => {
        const updatedCarrito = carrito.map((item) => {
        if (item.id === productId) {
            return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
        });
        setCarrito(updatedCarrito);
    };
    const updateUsuario = (userData) => {
        setUsuario(userData);
    };
    const restarCantidad = (productId) => {
        const updatedCarrito = carrito.map((item) => {
        if (item.id === productId && item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 };
        }
        return item;
        });
        setCarrito(updatedCarrito);
    };
    const calcularTotal = (productos) => {
        const total = productos.reduce((accumulator, producto) => {
          return accumulator + producto.cantidad * producto.precio;
        }, 0);
    
        return total;
    };
    const carritoCount = carrito.reduce((total, item) => total + item.cantidad, 0);
    return (
        <Provider value={{handleAddCart , carritoCount , carrito , restarCantidad , incrementarCantidad , calcularTotal, usuario, updateUsuario}}>
            {props.children}
        </Provider> 
    )
}

export default CustomProvider