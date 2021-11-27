import React from 'react'
import "../../css/Registro/crearAnimalSignosVitales.css"
import { BarraNavegacion } from '../inicioGeneral/BarraNavegacion'

export const RegSignosVitales = () => {
    return (
        <>
            <BarraNavegacion />
            <div className="center-body">
                <div className="body-reg">
                    <h1>Agregar signos vitales</h1>
                    <form className="form-control-bovino">
                        <div className="form-label-input-bovino">
                            <label >Fecha y hora</label>
                            <input type="datetime-local" />
                        </div>

                        <div className="form-label-input-bovino">
                            <label>Numero Identificaión (ID)</label>
                            <input type="text" />
                        </div>

                        <div className="form-label-input-bovino">
                            <label >Temperatura (°C)</label>
                            <input type='number' />
                        </div>

                        <div className="form-label-input-bovino">
                            <label >Frecuecia cardiaca (Ipm)</label>
                            <input type='number' />
                        </div>

                        <div className="form-label-input-bovino">
                            <label >Frecuecia respiratoria (rpm)</label>
                            <input type='number' />
                        </div>
                        <div className="btn-reg">
                            <button>Agregar bovino</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}