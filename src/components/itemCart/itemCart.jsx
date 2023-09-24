import { useContext } from "react"
import { CartContext } from "../../context/cartContex"


const CartItem = ({product}) => {
 

    const {removeItem} = useContext(CartContext)
 
    return (
        <>
            <div className='card mb-3 maxWdt'>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={product.imgUrl} className='img-fluid' alt={product.name}/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 >{product.name}</h5>
                            <p>Cantidad: {product.quantity}</p>
                            <p>Precio unitario: {product.price}</p>
                            <p>Precio: {product.price * product.quantity}</p>
                            <button className='btn btn-danger' onClick={()=>removeItem(product.id)}>Eliminar Producto</button>
                        </div>

                    </div>
                </div>
            </div>
               
        </>
    )
}

export default CartItem