import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig";
import { useState, useEffect } from "react";

const CategoryId = () => {
    const navigate = useNavigate();
    const id = useParams().categoryId;
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore(app);
        const productosCollection = collection(db, "productos");
        const producto = getDocs(productosCollection);
        setLoading(true)
        producto.then((resultado) => {
            const productosArray = resultado.docs.map((doc) => {
                const id = doc.id;
                const data = doc.data();
                data.id = id;
                return data;
            });

            const productosEncontrados = productosArray.filter((prod) => prod.categoria === id);
            setProductos(productosEncontrados);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="divItemListContainer">
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                productos.map((producto) => {
                    return (
                        <ul className="ItemListContainer" key={producto.id}>
                            <li>
                                <img src={`../src/assets/${producto.img}`} alt={producto.nombre} />
                            </li>
                            <li>{producto.nombre}</li>
                            <li>${producto.precio}</li>
                            <li>
                                <button onClick={() => navigate(`/item/${producto.id}`)}>Ver mas</button>
                            </li>
                        </ul>
                    );
                })
            )}
        </div>
    );
};

export default CategoryId;