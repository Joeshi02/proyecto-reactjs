import { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/cartContex";
import { Link } from "react-router-dom";

export default function Checkout () {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [phone , setPhone] = useState("")
    
    const[orderId, setOrderId] = useState()
    const {cartList, getTotal, clear } = useContext(CartContext)
    
    function crearOrder () {
        const db = getFirestore()
        const totalAmount = getTotal()
        const itemCarts = cartList.map (e=> {return{id:e.id, name:e.name, price:e.price, quantity:e.quantity}})
        const order = {
            buyer: {
                name,
                email,
                phone
            },
            items: itemCarts
            ,
            total: {
                totalAmount
            }
        }
        const ordenerRef = collection(db, "ordenes")
        addDoc(ordenerRef, order).then((result) => {
            setOrderId(result.id)
        })
    }
    if(orderId){
        return (
            <div>
                <h2 className="d-flex justify-content-center">{`Gracias por su compra, el id de tu compra es ${orderId}` }</h2>
                <Link className="contador d-flex justify-content-center" to='/'><button onClick={clear}>Volver a la tienda</button></Link>
            </div>
        
        )
    }

    return (
        <div>
          <h3>Ingresa tus datos para finalizar</h3>
        <form onSubmit={(event) => event.preventDefault()} className="formulario card mt-3">
            <label className="mt-2"
                >Nombre:
                    <input type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="mt-2">
                Email:
                    <input type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="mt-2">
                Celular:
                    <input type="text" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} />
                </label>
            <button onClick={crearOrder} className="mt-2 categorias letras">Finalizar Compra</button>
        </form>  
        </div>
        
    )
}