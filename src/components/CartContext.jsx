
import { useContext } from "react";
import {contexto} from "../providers/CustomProvider";


const CartContext = () => {
    const valorDelContexto= useContext(contexto);

    if(valorDelContexto.carritoCount === 0){
        return (
            <div className="Carrito" >
                <img className='' src="../src/assets/carrito-de-compras.png" alt="" width="50" />
            </div>
        );
    }
    else{
        return (
            <div className="Carrito" >
                <img className='' src="../src/assets/carrito-de-compras.png" alt="" width="50" />
                <span>{valorDelContexto.carritoCount}</span>

            </div>
        );
    }

};

export default CartContext;