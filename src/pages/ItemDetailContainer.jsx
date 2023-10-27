import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos  from "../Productos.json"; 
import ItemDetail from "../components/ItemDetail";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading , setloading] = useState(true)
    const params = useParams();
    useEffect(() => {
        setTimeout(()=>{
            setloading (false)
            productos.forEach(producto=> {
                if(producto.id === parseInt(params.itemId)){
                    setProducto(producto)
                }
            })
        },500)
    }, []);
    
    if(loading){
        return <h1>Cargando...</h1>
    }
    return(
        <div className="item">
            <ItemDetail item={producto}/>
        </div>
    )
}
export default ItemDetailContainer