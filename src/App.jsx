import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form from './form';
import Inicio from './pantallas/inicio';
import Registro from './pantallas/registro';
import Sesion from './pantallas/iniciodesesion';
import Footer from './componentes/footer';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/iniciodesesion' element={<Sesion />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
         
      <Footer />
    </Router>
  );
}



export default App;
