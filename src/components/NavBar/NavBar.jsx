import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light p-0">
            <div className="container-fluid color">
                <a className="navbar-brand" href="#"><img src="../images_limit/agua_import.png" className = "logo img-fluid" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav fs-5">
                        <li className="nav-item colorNav">
                            <a className="nav-link" aria-current="page" href="#">INICIO</a>
                        </li>
                        <li className="nav-item colorNav">
                            <a className="nav-link" href="#">NOSOTROS</a>
                        </li>
                        <li className="nav-item colorNav">
                            <a className="nav-link" href="#">PRODUCTOS</a>
                        </li>
                        <li className="nav-item colorNav">
                            <a className="nav-link" href="#">SERVICIOS</a>
                        </li>
                        <li className="nav-item colorNav">
                            <a className="nav-link" href="#">CONTACTO</a>
                        </li>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar