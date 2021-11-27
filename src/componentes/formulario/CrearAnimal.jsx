import React from 'react'
import "../../css/Registro/crearAnimalSignosVitales.css"

export const CrearAnimal = () => {
    return (
        <div className="center-body">
            <div className="body-reg">
                <h1>Agregar Bovino</h1>
                <form className="form-control-bovino">
                    <div className="form-label-input-bovino">
                        <label>Numero Identificaión (ID)</label>
                        <input type="text" />
                    </div>

                    <div className="form-label-input-bovino">
                        <label >Fecha Nacimiento</label>
                        <input type="date" />
                    </div>

                    <div className="form-label-input-bovino">
                        <label >Edad</label>
                        <input type='number' />
                    </div>

                    <div className="btn-reg">
                        <button>Agregar bovino</button>
                    </div>

                </form>
            </div>
        </div>
    )
}