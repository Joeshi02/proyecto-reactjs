const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light p-0">
            <div class="container-fluid color">
                <a class="navbar-brand" href="#"><image><img src="../images_limit/agua_import.png" class = "logo img-fluid" alt="logo" /> </image></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav fs-5">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">INICIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">NOSOTROS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PRODUCTOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SERVICIOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACTO</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link pt-1" href="#"><img src="../images_limit/carrito-de-compras.png" alt="carrito"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar