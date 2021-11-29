import React, { useRef, useEffect,useState} from 'react';
import "../../css/Registro/crearAnimalSignosVitales.css";
import { BarraNavegacion } from '../inicioGeneral/BarraNavegacion';
import {toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { crearBovino, crearRegistro, obtenerRegistroBovino } from '../../api/api'
import emailjs from 'emailjs-com'

export const RegSignosVitales = () => {
    const { _id } = useParams();
//    let data = require("../../api/apiPruebaBovinos.json");
    const [vaca, setVaca] = useState([])


useEffect(() => {
  obtenerRegistroBovino(
       _id,
      (response)=>{
          setVaca(response.data)
      },
      (error)=>{
          console.error("error", error)
      }
  )
}, [])

    const datafilter = vaca.find(element => element.idbovino === _id);
    const [algo, setAlgo] = useState("")


    const form = useRef(null);
    const mostrartem = async (e) =>{
       const fd = new FormData(form.current);
       const nuevoRegistro = {};
       fd.forEach((value, key) => {
       nuevoRegistro[key] = value;
       })
        e.preventDefault();
                if (nuevoRegistro.temperatura > 39 || nuevoRegistro.temperatura < 37.7){
                    toast.warning('Su bovino presenta valores anormales de temperatura, comuniquese con el veterinario')
                    setAlgo(`La vaca con ID: ${nuevoRegistro.idbovino} presenta valores anormales de temperatura, el valor de temperatura actual es ${nuevoRegistro.temperatura}, contacte al administrador`)
                    emailjs.sendForm('service_yzxmbbr',
                    'template_xpnlr77', 
                    e.target, 
                    'user_br3ldvQFxVEfmzyHKXuUS')
                    .then(res=>{
                        console.log(res);
                    }).catch(err =>{
                        console.error(err);
                    })
                }
                if (nuevoRegistro.FC > 80 || nuevoRegistro.FC < 40){
                       toast.warning('Su bovino presenta valores anormales de ritmo cardiaco, comuniquese con el veterinario')
                       setAlgo(`La vaca con ID: ${nuevoRegistro.idbovino} presenta valores anormales de ritmo cardiaco, el valor actual de ritmo cardiaco es ${nuevoRegistro.FC}, contacte al administrador`)
                    emailjs.sendForm('service_yzxmbbr',
                       'template_xpnlr77', 
                       e.target, 
                       'user_br3ldvQFxVEfmzyHKXuUS')
                       .then(res=>{
                           console.log(res);
                       }).catch(err =>{
                           console.error(err);
                       })   
                }
               if (nuevoRegistro.FR > 30 || nuevoRegistro.FR < 10){
                    toast.warning('Su bovino presenta valores anormales de frecuencia respiratoria, comuniquese con el veterinario')
                       setAlgo(`La vaca con ID: ${nuevoRegistro.idbovino} presenta valores anormales de frecuencia respiratoria, el valor actual de frecuencia respiratoria es ${nuevoRegistro.FR}, contacte al administrador`)
                       emailjs.sendForm('service_yzxmbbr',
                       'template_xpnlr77', 
                       e.target, 
                       'user_br3ldvQFxVEfmzyHKXuUS')
                       .then(res=>{
                           console.log(res);
                       }).catch(err =>{
                           console.error(err);
                       })   
                }

            await(crearRegistro({
                idbovino:nuevoRegistro.idbovino,
                temperatura: nuevoRegistro.temperatura,
                FC: nuevoRegistro.FC,
                FR:nuevoRegistro.FR,
                fecha_muestra: nuevoRegistro.fecha_muestra
            },(response)=> {
                console.log(response.data);  
                toast.success("Registro creado con exito")             
              },
              (error)=>{
                console.error(error);
                toast.error("Error creando el registro")
              }))
            form.current.reset()  

        };


    
    return (
        <>
            <BarraNavegacion />
            <div className="center-body">
                <div className="body-reg">
                    <h1>Agregar signos vitales</h1>
                    <form  ref= {form} className="form-control-bovino" onSubmit={mostrartem}>
                        <div className="form-label-input-bovino">
                            <label >Fecha y hora</label>
                            <input type="datetime-local" name="fecha_muestra" />
                        </div>

                        <div className="form-label-input-bovino">
                            <label>Numero Identificaión (ID)</label>
                            <input type="text" name="idbovino" value={_id}/>
                        </div>

                        <div className="form-label-input-bovino">
                            <label >Temperatura (°C)</label>
                            <input type='text' name="temperatura" />
                        </div>

                        <div className="form-label-input-bovino">
                            <label >Frecuecia cardiaca (Ipm)</label>
                            <input type='number' name="FC" />
                        </div>

                        <div className="form-label-input-bovino">
                            <label >Frecuecia respiratoria (rpm)</label>
                            <input type='number' name="FR" />
                        </div>
                        <input type='hidden' name="name" value={"Jeovan"}/>
                        <input type='hidden' name="correo" value={"jeovanis@outlook.com"} />
                        <input type='hidden' name="message" value={algo} />
                        <input type='hidden' name="from_name" value={"Tu Finca"} />


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