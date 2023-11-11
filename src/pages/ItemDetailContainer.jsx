import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { app } from "../firebaseConfig"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true); // Estado para controlar la carga
    const params = useParams();

    useEffect(() => {
        const db = getFirestore(app);
        const productosCollection = collection(db, "productos");
        const productoPromise = getDocs(productosCollection);

        productoPromise
            .then((resultado) => {
                const productos = resultado.docs.map(doc => {
                    const id = doc.id;
                    const data = doc.data();
                    data.id = id;
                    return data;
                });
                const productoEncontrado = productos.find((prod) => prod.id === params.itemId);
                
                if (productoEncontrado) {
                    setProducto(productoEncontrado);
                } else {
                    console.log('Producto no encontrado');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al obtener productos" , error);
                setLoading(false); 
            });
    }, []);
    return (
        <div className="item">
            {loading ? <p>Cargando...</p> : <ItemDetail item={producto} />}
        </div>
    );
}

export default ItemDetailContainer;