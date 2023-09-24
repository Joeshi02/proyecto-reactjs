import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light p-0">
            <div className="container-fluid color">
                <Link className="navbar-brand" to="/"><img src="../images_limit/agua_import.png" className = "logo img-fluid" alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav fs-5 d-flex align-items-center">
                        <li className="nav-item">
                            <Link to="/category/motores" className="nav-link letras" >MOTORES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/suspencion" className="nav-link letras" >SUSPENCIONES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/volantes" className="nav-link letras" >VOLANTES</Link>
                        </li>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar