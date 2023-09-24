import { useContext } from "react";
import { CartContext } from "../../context/cartContex";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {getQty} = useContext(CartContext)
    return (
        <Link to='/cart'> 
        <li className="pdng colorNav">
            <img src="../images_limit/carrito-de-compras.png" alt="carrito" />
            {getQty()> 0 &&<button className="contador categorias letras">{getQty()} </button>  }
        </li>
        </Link>
    );
};
export default CartWidget