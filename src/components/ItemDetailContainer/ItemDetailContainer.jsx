import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsJSON from "../JSON/products.json"
import ItemDetail from "../ItemDetail/ItemDetail";

const detailAPI = (itemId) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(itemId !== undefined){
                const filtro = productsJSON.find(
                    (item) => item.id == itemId
                );
                resolve(filtro)
            }else{
                resolve(productsJSON)
            }
        },1000);
    });
};

export default function ItemDetailContainer ({}) {
    const [products , setProducts] = useState ([]);
    const {itemId} = useParams ()
    
    useEffect (() => {
        detailAPI (itemId)
        .then((data) => setProducts (data));
    },[itemId]);

    return (
        <div>
            <ItemDetail product={products}/>
        </div>
    )
}