//Importando paquetes para navegar.
import { useRoutes, BrowserRouter } from "react-router-dom";


//Importando las paginas.
import Home from "../Home"
import NotFound from "../NotFound"
import Service from "../Service"
import About from "../About";

//Importando los componentes.
import NavBar from "../../Components/NavBar"



const AppRoutes = ()=>{

  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/service",
      element: <Service />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])

  return routes
}




const App = () =>{

  return (
    <BrowserRouter>
    <AppRoutes />
    <NavBar />
    </BrowserRouter>
  )
}

export default App
