import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import productsJSON from "../JSON/products.json"
import ItemDetail from "../ItemDetail/ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore"

// const detailAPI = (itemId) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() =>{
//             if(itemId !== undefined){
//                 const filtro = productsJSON.find(
//                     (item) => item.id == itemId
//                 );
//                 resolve(filtro)
//             }else{
//                 resolve(productsJSON)
//             }
//         },100);
//     });
// };

export default function ItemDetailContainer ({}) {
    const [products , setProducts] = useState ([]);
    const {itemId} = useParams ()
    
    useEffect (() => {
        const db = getFirestore()
        const itemRef = doc(db, "products", itemId)
        getDoc(itemRef).then((snapshot) => {
            setProducts({id:snapshot.id, ...snapshot.data()})
        })
    },[itemId])

    // useEffect (() => {
    //     detailAPI (itemId)
    //     .then((data) => setProducts (data));
    // },[itemId]);

    return (
        <div className="d-flex justify-content-center">
            <ItemDetail product={products}/>
        </div>
    )
}