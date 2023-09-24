import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    console.log('carrito: ', cartList);
    const addItem = (item, quantity) => {
        let itemQty = {...item,quantity}
        if (!isInCart(item.id)){
            setCartList([...cartList, itemQty])
        }else {
            const newProducts = cartList.map(prod => {
                if (prod.id === item.id){
                    const newProduct = {
                        ...prod,
                        quantity: prod.quantity + quantity
                    }
                    return newProduct
                }else{
                    return prod
                }
            })
            setCartList(newProducts)
        }
    };
    
    const removeItem = (itemId) => {
        const updatedCart = cartList.filter((item) => item.id !== itemId);
        setCartList(updatedCart);
    };
    const clear = () => {
        setCartList([]);
    };
    const isInCart = (itemId) => {
        return cartList.some((item) => item.id === itemId);
    };
    const getQty = () => {
        let cant = 0
        cartList.forEach((e) => cant += e.quantity)
        return cant
    };
    
    const getTotal = () => {
        let total = 0
        cartList.forEach((e) => total += (e.quantity*e.price))
        return total        
    };
    
    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, isInCart, getQty, getTotal }}>
            {children}
        </CartContext.Provider>
    );
    
};
export default CartContextProvider;