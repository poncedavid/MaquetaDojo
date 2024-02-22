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
                <NavLink to="/procesando">EnProceso</NavLink>
            </li>
            <li>pagina 01</li>
            <li>pagina 02</li>
        </ul>


        <ul className="flex items-center gap-3 cursor-pointer">
            <li className=" text-black/60">micorreo@correo.com</li>
            <li>mis ordenes</li>
            <li>perfil</li>
            <li>salir</li>

        </ul>
        </nav>
    );
}

export default Navbar;