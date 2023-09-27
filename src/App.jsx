import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartContextProvider from "./context/cartContex"
import Cart from "./components/cart/Cartt"
import Checkout from "./components/Checkout/checkout"

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element= {<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route exact path="/category/:categoryName" element = {<ItemListContainer/>}/>
          <Route exact path="/item/:itemId" element = {<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
