import { useContext } from "react"
import { CartContext } from "../../context/cartContex"
import { Link } from 'react-router-dom';
import ItemCart from "../itemCart/itemCart";

const Cart = () => {
    const {cartList, clear ,getTotal} = useContext(CartContext)
    return(
        <>
        {cartList.length !== 0 ? 
        (   
        <div>
            <div className='productos '>
                <h2 className="d-flex justify-content-center">Tu Carrito</h2>
                {cartList.map((e) => <ItemCart key={e.id} product={e} />)}
                    <div className="cartDisplay">
                        <p>{`Total:  $ ${getTotal()}`}</p>
                        <button className="mb-2"  onClick={clear}>Vaciar Carrito</button>
                        <Link to='/checkout'><button className="categorias letras">Finalizar Compra</button></Link>  
                    </div>
            </div>
            
        </div>  
        ) 
        : (
          <div>
            <h3 className="d-flex justify-content-center">El carrito esta vacio</h3>
            <Link className="contador d-flex justify-content-center" to='/'><button>Volver a la tienda</button></Link>
          </div>
        )
    }
        </>
    )
}
export default Cart