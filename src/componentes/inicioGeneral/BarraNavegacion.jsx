import React from 'react'
import "../../css/inicioGeneral/barraNavegacion.css"
import { NavLink } from 'react-router-dom'

export const BarraNavegacion = () => {
    return (
        <nav className="navBar">
            <div className="logoInicioNav">
                <img src="https://cdn.pixabay.com/photo/2020/04/30/02/47/livestock-5111205_960_720.png" alt="logo pagina" height="100px" />
            </div>
            <div className="navLinks">
                <ul className="nav-ul">
                    <li className="nav-li"><NavLink to={'/resumen'}>Resumen</NavLink></li>
                    <li className="nav-li"><NavLink to={'/animales'}>Lista de animales</NavLink></li>
                    <li className="nav-li"><NavLink to={'/crearanimal'}>Crear animal</NavLink></li>
                    <li className="nav-li"><NavLink to={'/solicitudes'}>Solicitudes</NavLink></li>
                    <li className="nav-li"><NavLink to={'/'}>Cerrar sesión</NavLink></li>
                </ul>
            </div>

        </nav>

    )
}



