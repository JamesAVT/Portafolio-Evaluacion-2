import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import ProyectoDetalle from './pages/ProyectoDetalle';
import './styles/pages/Global.css'
import SobreMi from './pages/SobreMi';
import Noticias from './pages/Noticias';
import NoticiaDetalle from './pages/NoticiaDetalle';

function App() {
 return (
   <>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/proyectos" element={<Proyectos />} />
       <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
       <Route path="/sobre-mi" element={<SobreMi />} />
       <Route path="/noticias" element={<Noticias />} />
       <Route path="/noticias/:id" element={<NoticiaDetalle />} />
     </Routes>
   </>
 );
}

export default App;
