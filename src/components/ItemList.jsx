import {useNavigate } from "react-router-dom"
const ItemList = (prop) => {  
    const productos = prop.productos
    const navigate = useNavigate()
    return (
        <div className="divItemListContainer">
            {productos.map ((productos)=>{
                return (
                    <ul className="ItemListContainer">
                        <li><img src={`./src/assets/${productos.img}`}/></li>
                        <li>{productos.nombre}</li>
                        <li>${productos.precio}</li>
                        <li><button onClick={() => navigate(`/item/${productos.id}`)}>Ver mas</button></li>
                    </ul>
                )
            })}
        </div>
    )
}


export default ItemList