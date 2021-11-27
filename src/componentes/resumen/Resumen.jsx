import React from 'react'
import { BarraNavegacion } from '../inicioGeneral/BarraNavegacion'
import '../../css/resumen/resumen.css'
import { Line } from 'react-chartjs-2'

export const Resumen = () => {



    return (
        <div className= 'body-list-page center-page'>
            <BarraNavegacion/>
            <div className="resumen">
                <h2>Resumen General</h2>                 
            </div>
                <div className="wrapper">
                    <div className="one"> 
                        <h2> Promedio diario animales de la finca</h2>
                    </div>
                    <div className="two">dos</div>
                    <div className="tres">tres</div>
                    <div className="cuatro">cuatro</div>
                </div>

        </div>
    )
}


