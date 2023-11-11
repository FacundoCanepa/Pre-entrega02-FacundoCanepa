import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig";


const Productos = () => {
    const db = getFirestore(app);
    const productoCollection = collection(db, "productos");
    const products = getDocs(productoCollection)
    products.then((productos)=>{
        const product =productos.docs.map(doc=>{
            const id = doc.id
            const data = doc.data
            data.id = id
            return data
        }
        )
    })
};

export default Productos;