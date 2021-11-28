import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/inicio/inicio';
import Registro from './componentes/formulario/Registro'
import { RegistroAdmin } from './componentes/formulario/RegistroAdmin';
import { CrearAnimal } from './componentes/formulario/CrearAnimal';
import {RegSignosVitales} from './componentes/formulario/RegSignosVitales';
import {ListaAnimales} from './componentes/inicioGeneral/ListaAnimales';
import {ListaSolicitudes} from './componentes/inicioGeneral/ListaSolicitudes';
import {Resumen} from './componentes/resumen/Resumen'
import {ResumenVaca} from './componentes/resumen/Resumenvaca'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const {user, isAuthenticated, isLoading} = useAuth0()

  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={isAuthenticated ? <Resumen/> : <Inicio />} />
      <Route path='/registro' element={<Registro/>} />
      <Route path='/registroadmin' element={<RegistroAdmin/>} />
      <Route path='/agregarbovino' element={<CrearAnimal/>}/>
      <Route path='/regsignosvitales/:_id' element={<RegSignosVitales/>} />
      <Route path='/dashboard' element={<Resumen/>}/>
      <Route path ='/bovinos' element={<ListaAnimales/>}/>
      <Route path='/solicitudes' element={<ListaSolicitudes/>}/>     
      <Route path='/resumen/:_id' element={<ResumenVaca/>} />






   

    </Routes>
    </BrowserRouter>
  );
}

export default App;
