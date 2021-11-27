import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/inicio/inicio';
import Registro from './componentes/formulario/Registro'
import { RegistroAdmin } from './componentes/formulario/RegistroAdmin';
import { CrearAnimal } from './componentes/formulario/CrearAnimal';
import { RegSignosVitales } from './componentes/formulario/RegSignosVitales';
import { ListaAnimales } from './componentes/inicioGeneral/ListaAnimales';
import { ListaSolicitudes } from './componentes/inicioGeneral/ListaSolicitudes';
import { Resumen } from './componentes/resumen/Resumen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Inicio />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/registroadmin' element={<RegistroAdmin />} />
        <Route path='/crearanimal' element={<CrearAnimal />} />
        <Route path='/regsignosvitales' element={<RegSignosVitales />} />
        <Route path='/resumen' element={<Resumen />} />
        <Route path='/animales' element={<ListaAnimales />} />
        <Route path='/solicitudes' element={<ListaSolicitudes />} />








      </Routes>
    </BrowserRouter>
  );
}

export default App;
