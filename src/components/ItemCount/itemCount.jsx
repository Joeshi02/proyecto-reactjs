import { useState } from "react"

export default function ItemCount ({stock, initial, onAdd}) {
    const[count, setCount]= useState(initial)
    
    function subtrac () {
        if (count > initial){
        setCount(count - 1)
    }
    }
    function add (){
        if(count < stock){
        setCount(count + 1)
        }
    }
    
    return (
        <div>
            <button className="categorias letras" onClick={subtrac}>-</button>
            <span className="contador">{count}</span>
            <button className="categorias letras" onClick={add}>+</button>
            
            <button className="contador categorias letras" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}