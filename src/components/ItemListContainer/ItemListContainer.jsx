import { useEffect, useState } from "react";
import productsJSON from "../JSON/products.json"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const mockAPI = (categoryName) => {

    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            if(categoryName !== undefined) {
                const filtro = productsJSON.filter(
                    (item) => item.category === categoryName
                );
            resolve(filtro)
            }else{
                resolve(productsJSON);
            }
            
        },1000);
    });
};

export default function ItemListContainer  ({greeting}) {
    const [products, setProducts] = useState ([]);
    const {categoryName} = useParams ()

    useEffect(() => {
        mockAPI(categoryName).then((data) => setProducts(data));
    },[categoryName]);
    
    return(
        <div>
            <h2 className="d-flex justify-content-center" >{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

