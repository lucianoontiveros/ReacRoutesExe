import { Link } from 'react-router-dom'

const NavBar = () => {
    return(

        <div className="navbar navbar-expand-lg bg-dark">
            <Link className="nav-link m-4 text-light" to="/Inicio">Inicio</Link>
            <Link className="nav-link m-4 text-light" to="/Nosotros">Nosotros</Link>
            <Link className="nav-link m-4 text-light" to="/Blog">Blog</Link>
        </div>
    )
}

/* Los link permiten que la pagina no se renderice al hacer un click en ello por completo*/

export default NavBar