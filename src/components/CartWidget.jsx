
const CartWidget = () => {
    const itemCount = 6;
    return (
        <div className="Carrito" >
            <img className='' src="../src/assets/carrito-de-compras.png" alt="" width="50" />
            <span>{itemCount}</span>
        </div>
    );
};

export default CartWidget;