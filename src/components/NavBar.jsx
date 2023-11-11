import { NavLink ,} from "react-router-dom"

import CartContext from "./CartContext"

const  NavBar = () => {
    return (
        <nav>
        <NavLink to="/"><h2>Inicio</h2></NavLink>
        <NavLink to="/category/ravioles"><h2>Ravioles</h2></NavLink>
        <NavLink to="/category/fideos"><h2>Fideos</h2></NavLink>
        <NavLink to="/category/ñoquis"><h2>Ñoquis</h2></NavLink>
        <NavLink to="/category/postres"><h2>Postres</h2></NavLink>
        <NavLink to="/cartContext"><CartContext></CartContext></NavLink>
        </nav>
    )
}

export default NavBar