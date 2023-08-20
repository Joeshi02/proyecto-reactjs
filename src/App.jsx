import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget/CartWidget"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div>
        <ItemListContainer greeting={'Bienvenidos'} />
      </div>
    </>
  )
}

export default App
