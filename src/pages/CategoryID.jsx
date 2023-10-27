import { useParams , useNavigate } from "react-router-dom"
import productos2  from "../Productos.json" 


const CategoryId = () => { 
    const navigate = useNavigate()

    const id = useParams().categoryId;
    const productos = productos2.filter(productos => productos.categoria === id);
    return(
        <div className="divItemListContainer">
            {productos.map ((productos )=>{
                return (
                    <ul className="ItemListContainer">
                        <li><img src={`../src/assets/${productos.img}`}/></li>
                        <li>{productos.nombre}</li>
                        <li>${productos.precio}</li>
                        <li><button onClick={() => navigate(`/item/${productos.id}`)}>Ver mas</button></li>
                    </ul>
                )
            })}
        </div>
    )
    
}

export default CategoryId