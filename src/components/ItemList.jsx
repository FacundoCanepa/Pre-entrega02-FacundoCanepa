import React from 'react';
import { useNavigate } from "react-router-dom";
import Item from "./Item";

const ItemList = (props) => {
    const { productos } = props;
    const navigate = useNavigate();
    return (
        <div className="divItemListContainer">
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} navigate={navigate} />
            ))}
        </div>
    );
}

export default ItemList;