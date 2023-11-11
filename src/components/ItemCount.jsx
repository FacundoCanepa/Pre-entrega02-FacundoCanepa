import { useState } from "react"

function  ItemCount (props) {   
    
    const [contador,setContador] = useState(props.initial)
    const handleSumar = () => {
        setContador(contador + 1)
    }
    const handleRestar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }
    const handleConfirmar = () => {
        props.onAdd(contador)
    }

    
    return (
        <>
            <h2>Cantidad : {contador}</h2>
            <button onClick={handleSumar} >sumar</button>
            <button onClick={handleRestar} >restar</button>
            <button onClick={handleConfirmar} >confirmar cantidad</button>
        </>
    )
}

export default ItemCount