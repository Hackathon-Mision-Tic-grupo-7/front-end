import React,{useRef}from 'react'
import { crearBovino } from '../../api/api'
import "../../css/Registro/crearAnimalSignosVitales.css"
import { BarraNavegacion } from '../inicioGeneral/BarraNavegacion'

export const CrearAnimal = () => {
    const form = useRef(null)

    const crearBovi = async(e)=>{
        e.preventDefault();
        const fd = new FormData(form.current);
        const nuevoBovino = {};
        await crearBovino(
           
            fd.forEach((value, key) => {
              nuevoBovino[key] = value;
            })
        )
    }




    return (
        <>
            <BarraNavegacion />
            <div className="center-body">
                <div className="body-reg">
                    <h1>Agregar Bovino</h1>
                    <form ref={form} onSubmit={crearBovi} className="form-control-bovino">
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
                            <button type="submit">Agregar bovino</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}