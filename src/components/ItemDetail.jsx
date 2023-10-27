const ItemDetail = (prop) => {  
    const producto = prop.item
    return (
        <ul className="item">
            <li><img src={`../src/assets/${producto.img}`} alt="" /></li>
            <li><h1>{producto.nombre}</h1></li>
            <li><h2>{producto.descripcion}</h2></li>
            <li><h3> ${producto.precio} x {producto.porcion}</h3></li>
            <li><button>agregar a carrito</button></li>
        </ul>
        
    )
}


export default ItemDetail