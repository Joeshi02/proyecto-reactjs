import NavBar from "./components/NavBar/NavBar"
import CartWidget from "./components/CartWidget/CartWidget"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
function App() {

  return (
    <>
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route exact path="/" element= {<ItemListContainer greeting={'Bienvenidos'}/>}/>
        <Route exact path="/category/:categoryName" element = {<ItemListContainer/>}/>
        <Route exact path="/item/:itemId" element = {<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>   
    </>
  )
}

export default App
