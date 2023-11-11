import { useEffect, useState } from "react"
import ItemList from "../components/ItemList"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { app } from "../firebaseConfig"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")
        const producto = getDocs(productosCollection)

        producto.then((resultado) => {
            const productos = resultado.docs.map(doc => {
                const id = doc.id
                const data = doc.data()
                data.id = id
                return data
            })
            setProductos(productos);
            setLoading(false); 
        })
        .catch(error => {
            console.error("Error al obtener productos:", error);
            setLoading(false); 
        })
    }, [])


    return (
        <div>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    )
}

export default ItemListContainer