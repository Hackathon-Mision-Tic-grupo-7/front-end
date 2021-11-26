import React from 'react'
import "../../css/inicioGeneral/barraNavegacion.css"

export const BarraNavegacion = () => {
    return (
        <nav className="navBar">
            <div className="logoInicioNav">
                <img src="https://cdn.pixabay.com/photo/2020/04/30/02/47/livestock-5111205_960_720.png" alt="logo pagina" height="100px" />
            </div>
            <div className="navLinks">
                <ul className="nav-ul">
                    <li className="nav-li"><a>Lista de animales</a></li>
                    <li className="nav-li"><a>Crear animal</a></li>
                    <li className="nav-li"><a>Solicitudes</a></li>
                    <li className="nav-li"><a>Cerrar sesión</a></li>
                </ul>
            </div>

        </nav>

    )
}



