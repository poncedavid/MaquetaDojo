import { NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-ligth" >
        <ul className="flex items-center gap-3 cursor-pointer">
            <li className=" font-semibold text-lg">NombreAPP</li>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/service">Service</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>en breve...</li>

        </ul>


        <ul className="flex items-center gap-3 cursor-pointer">
            <li className=" text-black/60">micorreo@correo.com</li>
            <li>
                <NavLink to="/login">Iniciar sesión</NavLink>
            </li>
            <li>
                <NavLink to="/register">Registrarse</NavLink>
            </li>
            <li>
                <NavLink to="/cart">Carrito</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Perfil</NavLink>
            </li>
        </ul>
        </nav>


    );
}

export default Navbar;