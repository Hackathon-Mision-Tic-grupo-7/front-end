import React, { useRef} from 'react';
import "../../css/Registro/crearAnimalSignosVitales.css";
import { BarraNavegacion } from '../inicioGeneral/BarraNavegacion';
import {toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const RegSignosVitales = () => {
    const form = useRef(null)

    const mostrartem = (e) =>{
        const fd = new FormData(form.current);
    const nuevoRegistro = {};
    fd.forEach((value, key) => {
      nuevoRegistro[key] = value;
    })
        e.preventDefault();
        if (nuevoRegistro.tem > 39 || nuevoRegistro.tem < 37.7){
         toast.warning('Su bovino presenta valores anormales de temperatura, comuniquese con el veterinario')
        }
        if (nuevoRegistro.lpm > 80 || nuevoRegistro.lpm < 40){
            toast.warning('Su bovino presenta valores anormales de ritmo cardiaco, comuniquese con el veterinario')
        }
        if (nuevoRegistro.rpm > 30 || nuevoRegistro.rpm < 10){
            toast.warning('Su bovino presenta valores anormales de frecuencia respiratoria, comuniquese con el veterinario')
           }

   }


    
    return (
        <>
            <BarraNavegacion />
            <div className="center-body">
                <div className="body-reg">
                    <h1>Agregar signos vitales</h1>
                    <form  ref= {form} className="form-control-bovino" onSubmit={mostrartem}>
                        <div className="form-label-input-bovino">
                            <label >Fecha y hora</label>
                            <input type="datetime-local" name="fecha" />
                        </div>

                        <div className="form-label-input-bovino">
                            <label>Numero Identificaión (ID)</label>
                            <input type="text" name="id" />
                        </div>

                        <div className="form-label-input-bovino">
                            <label >Temperatura (°C)</label>
                            <input type='text' name="tem" />
                        </div>

                        <div className="form-label-input-bovino">
                            <label >Frecuecia cardiaca (Ipm)</label>
                            <input type='number' name="lpm" />
                        </div>

                        <div className="form-label-input-bovino">
                            <label >Frecuecia respiratoria (rpm)</label>
                            <input type='number' name="rpm" />
                        </div>
                        <div className="btn-reg">
                            <button type="submit">Agregar Registro al Bovino</button>
                        </div>

                    </form>
                    <ToastContainer position="bottom-center" autoClose={5000}/>
                </div>
            </div>
        </>
    )
}