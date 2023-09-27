import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore"

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

    return (
        <div className="d-flex justify-content-center">
            <ItemDetail product={products}/>
        </div>
    )
}