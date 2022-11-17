import NavBar from "./componentes/nav"
import { Routes, Route } from 'react-router-dom'

import Inicio from './Pages/Inicio'
import Nosotros from './Pages/Nosotros'
import Blog from './Pages/Blog'
import LayoutPublic from "./componentes/layout/LoyoutPublic"
import NotFound from './Pages/Notfound'
import BlogDetails from './Pages/BlogDetails'

const App = () => { 
  
  return <>
    <NavBar />
    <h1>APP</h1>

    <Routes>
      <Route path="/" element={<LayoutPublic/>}>
        <Route  element={<Inicio />} path="/Inicio"></Route>
        <Route  element={<Nosotros />} path="/Nosotros"></Route>
        <Route  element={<Blog />} path="/Blog"></Route>
        <Route  element={<BlogDetails />} path="/Blog/:id"></Route>
        <Route  element={<NotFound />} path="*"></Route>
      </Route>
    </Routes>

  </>
}

/* Tengo que entender que Element es el elemento jsx que creamos en la carpeta pagina, que este debe ser
importado, y que junto al pach me permite indicarle cual es la ruta que le corresponde a ese elemento 
dicha ruta debe conincidir con los elementos del Navbar en el cual utilizamos el recurso Link */

export default App