import React from 'react';

const Item = ({ producto, navigate }) => {
return (
    <ul className="ItemListContainer">
    <li><img src={`./src/assets/${producto.img}`} alt={producto.nombre} /></li>
    <li>{producto.nombre}</li>
    <li>${producto.precio}</li>
    <li><button onClick={() => navigate(`/item/${producto.id}`)}>Ver mas</button></li>
    </ul>
);
}

export default Item;