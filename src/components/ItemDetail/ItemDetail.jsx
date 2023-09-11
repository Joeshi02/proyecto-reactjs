import { Link } from "react-router-dom";

export default function ItemDetail ({ product }) {
    return (
        <div className="productos text-center border border-2 ">
            
            <Link to={`/item/${product.id}`}><img src={product.imgUrl} className="imgProducts img-fluid" alt={product.name} /></Link>
            <h5 className="d-flex justify-content-center categorias letras margen">{product.name}</h5>
            <p className="d-flex justify-content-center categorias letras">CATEGORIA: {product.category}</p>
            <p className="d-flex justify-content-center categorias letras">$ {product.price}</p>
            <p className="d-flex justify-content-center categorias letras">DESCRIPCION: {product.description}</p>
            <p className="d-flex justify-content-center categorias letras">STOCK: {product.stock}</p>
            
            
        </div>
    );
}
