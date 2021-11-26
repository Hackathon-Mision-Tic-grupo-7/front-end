import React from 'react'
import "../../css/inicioGeneral/barraNavegacion.css"

export const BarraNavegacion = () => {
    return (
        <nav className="navBar">
            <div className="logoInicioNav">
                <img src="https://cdn-icons.flaticon.com/png/512/1984/premium/1984367.png?token=exp=1637942976~hmac=51a6804da864055260adf69c933c4dc6" alt="logo pagina" height="100px" />
            </div>
            <div className="navLinks">
                <ul className="nav-ul">
                    <li className="nav-li"><a href="#">Lista de animales</a></li>
                    <li className="nav-li"><a href="#">Crear animal</a></li>
                    <li className="nav-li"><a href="#">Solicitudes</a></li>
                    <li className="nav-li"><a href="#">Cerrar sesión</a></li>
                </ul>
            </div>

        </nav>

    )
}



