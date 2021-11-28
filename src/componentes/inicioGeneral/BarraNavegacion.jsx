import React from 'react'
import "../../css/inicioGeneral/barraNavegacion.css"
import { NavLink } from 'react-router-dom'
import { LogOutButtom } from './LogOut';

export const BarraNavegacion = () => {




    return (
        <nav className="navBar">
            <div className="logoInicioNav">
                <img src="https://cdn.pixabay.com/photo/2020/04/30/02/47/livestock-5111205_960_720.png" alt="logo pagina" height="100px" />
            </div>
            <div className="navLinks">
                <ul className="nav-ul">
                    <li className="nav-li"><NavLink to={'/dashboard'}>Inicio</NavLink></li>
                    <li className="nav-li"><NavLink to={'/bovinos'}>Lista bovinos</NavLink></li>
                    <li className="nav-li"><NavLink to={'/agregarbovino'}>Agregar bovino</NavLink></li>
                    <li className="nav-li"><NavLink to={'/solicitudes'}>Solicitudes</NavLink></li>
                    <li className="nav-li"><LogOutButtom/></li>
                    {/* <li className="nav-li"><NavLink to={'/'}>Cerrar sesión</NavLink></li> */}
                </ul>
            </div>

        </nav>

    )
}



