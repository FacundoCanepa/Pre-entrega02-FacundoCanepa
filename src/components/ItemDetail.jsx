import { useState , useContext } from "react"
import {contexto} from "../providers/CustomProvider"
import ItemCount from "./ItemCount"


const ItemDetail = (prop) => {  
    const producto = prop.item
    const valorDelContexto = useContext(contexto)
    
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)
    const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);
    const handle = (cantidadCarrito) => {
    setCantidadSeleccionada(cantidadCarrito)
    }
    const handleClick = () => {
        valorDelContexto.handleAddCart(producto , cantidadSeleccionada)
        setAgregadoAlCarrito(true);
    }
    if (agregadoAlCarrito){
        return (
            <ul className="item">
        <li><img src={`../src/assets/${producto.img}`} alt="" /></li>
        <li><h1>{producto.nombre}</h1></li>
        <li><h2>{producto.descripcion}</h2></li>
        <li><h3> ${producto.precio} x {producto.porcion}</h3></li>
        <li><h1>Producto agregado al carrito</h1></li>
        </ul>
        )
    }
    else if(cantidadSeleccionada > 0 ){
        return (
            <ul className="item">
                <li><img src={`../src/assets/${producto.img}`} alt="" /></li>
                <li><h1>{producto.nombre}</h1></li>
                <li><h2>{producto.descripcion}</h2></li>
                <li><h3> ${producto.precio} x {producto.porcion}</h3></li>
                <li><h2>{cantidadSeleccionada} Unidades seleccionadas</h2></li>
                <li><button onClick={handleClick}>agregar al carrito</button></li>
            </ul>
        )
    }else {
        return (
            <ul className="item">
                <li><img src={`../src/assets/${producto.img}`} alt="" /></li>
                <li><h1>{producto.nombre}</h1></li>
                <li><h2>{producto.descripcion}</h2></li>
                <li><h3> ${producto.precio} x {producto.porcion}</h3></li>
                <li><ItemCount initial={1} onAdd={handle} /></li>
            </ul>
        )
    }

}


export default ItemDetail