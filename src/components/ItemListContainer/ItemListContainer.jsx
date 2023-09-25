import { useEffect, useState } from "react";
// import productsJSON from "../JSON/products.json"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

// const mockAPI = (categoryName) => {

//     return new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//             if(categoryName !== undefined) {
//                 const filtro = productsJSON.filter(
//                     (item) => item.category === categoryName
//                 );
//             resolve(filtro)
//             }else{
//                 resolve(productsJSON);
//             }
            
//         },100);
//     });
// };

export default function ItemListContainer  ({greeting}) {
    const [products, setProducts] = useState ([]);
    const {categoryName} = useParams ()
    useEffect (() => {
        const db = getFirestore()

        const productsRef = categoryName 
        ? query(collection(db, "products"), where("category","==", categoryName))
        : collection (db, "products") 

        getDocs(productsRef).then ((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })
                )
            
        })
    }, [categoryName])


    // useEffect(() => {
    //     mockAPI(categoryName).then((data) => setProducts(data));
    // },[categoryName]);
    
    return(
        <div>
            <h2 className="d-flex justify-content-center" >{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

