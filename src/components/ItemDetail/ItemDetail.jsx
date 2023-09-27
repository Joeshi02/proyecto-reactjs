import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContex";
export default function ItemDetail ({ product }) {
    const [cantidad , setCantidad] = useState (0)
    const {addItem} = useContext(CartContext)
    const handleOnAdd = (count)  =>{
        setCantidad(count)
        addItem(product, count)
    console.log('se agregaron ',count , 'unidades del producto ', product.name );
        }
    return (
        <div className="productos text-center border border-2 ">
            
            <Link to={`/item/${product.id}`}><img src={product.imgUrl} className="imgProducts img-fluid" alt={product.name} /></Link>
            <h5 className="d-flex justify-content-center categorias letras margen">{product.name}</h5>
            <p className="d-flex justify-content-center categorias letras">CATEGORIA: {product.category}</p>
            <p className="d-flex justify-content-center categorias letras">$ {product.price}</p>
            <p className="d-flex justify-content-center categorias letras">DESCRIPCION: {product.description}</p>
            <p className="d-flex justify-content-center categorias letras">STOCK: {product.stock}</p>
            {cantidad > 0  ? <Link to ={"/Cart"}><button className="contador categorias letras">Finalizar Compra</button></Link> : <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd}/> }
            <Link to = '/'><button className="contador categorias letras">Seguir comprando</button> </Link>
        </div>
    );
}
