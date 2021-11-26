import React, {useEffect} from 'react'
import '../../css/inicio/inicio.css'
const Inicio = () => {
    return (
        <div className = "otra">
            <span>
                NOMBRE APLICATIVO
            </span>
         <div className="inicio">
            <div className ="fotos">
                <p>
                La identificación oportuna de enfermedades siempre ha sido un problema para el ganadero, es por esto que se hace necesario hacer seguimiento a los signos vitales  de los individuos y de esa forma poder determinar si se encuentran en buen estado de salud o en el caso de las hembras, determinar si están en celo. El aumento de temperatura, por ejemplo, se puede dar por parásitos, presencia de enfermedades infecto-contagiosas, intoxicaciones, entre otros.
                </p>
                <p>
                    Es entonces este el aplicativo que le permite solucionar ese problema, pues podrá monitorear el estado de sus animales y tendra un contacto directo con el veterinario de confianza.
                </p>
            </div>
            <div className="iniciosesion">
                <span className="span">
                    INICIO SESION
                </span>
                <form>
                    <div className="form">
                    <input type="email" placeholder="algo@algo.com"></input>
                    </div>
                    <div className="form">
                    <input  type="password" placeholder ="contraseña"></input>
                    </div>
                    <div >
                        <button className="btn">Inciar sesion</button>
                        <span className="aun">¿Aun no tienes cuenta?,</span>
                        <button className="registrate"> Registrate</button>
                    </div>
                </form>

            </div>
        </div>           
        </div>

    )
}

export default Inicio
