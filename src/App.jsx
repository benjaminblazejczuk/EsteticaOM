import './App.css';
import Inicio from './pantallas/inicio';
import Registro from './pantallas/registro';
import Sesion from './pantallas/iniciodesesion';
import Agenda from './pantallas/agenda';
import Tratamientos from './pantallas/tratamientos';
import InfoPersonal from './pantallas/infopersonal';
import Footer from './componentes/footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Habilita el uso de rutas */}
      <Routes> {/* Contenedor de todas las rutas */}
        {/* Rutas principales */}
        <Route path="/" element={<Inicio />} />
        <Route path="/iniciodesesion" element={<Sesion />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rutas adicionales */}
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/infopersonal" element={<InfoPersonal />} />
      </Routes>

      {/* Footer siempre visible */}
      <Footer />
    </Router>
  );
}

export default App;
