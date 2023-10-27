import { useEffect, useState } from "react"

import productos  from "../Productos.json"
import ItemList from "../components/ItemList"

const ItemListContainer = () => {
    const [cargando ,setcargando] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setcargando(false)
        },500);
    },[])

    if(cargando){
        return <h2>Cargando los productos ...</h2>
    }
    
    return(
        <ItemList productos={productos}/>
    )
    }

export default ItemListContainer