import { Route , Routes , } from "react-router-dom";
import Carrito from "../pages/Carrrito";
import ItemListContainer from "../pages/ItemListContainer";
import CategoryId from "../pages/CategoryID";
import ItemDetailContainer from "../pages/ItemDetailContainer";


const Rutas = () =>{
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:categoryId" element={<CategoryId/>}/>
                <Route path="/cartWidget" element={<Carrito/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="*" element={<h2>Error 401</h2>} />
            </Routes>
        </main>
    )

}
export default Rutas