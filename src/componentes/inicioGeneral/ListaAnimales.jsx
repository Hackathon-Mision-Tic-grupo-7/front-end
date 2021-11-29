import React , {useState, useEffect} from 'react'
import { BarraNavegacion } from './BarraNavegacion'
import "../../css/inicioGeneral/listaAnimales.css"
import { Link } from 'react-router-dom'
import { obtenerBovinos } from '../../api/api'

export const ListaAnimales = () => {
//    let data = require("../../api/apiPruebaBovinos.json");
    const [bovinos, setBovinos] = useState([])

    useEffect(() => {
        obtenerBovinos(
            (response)=>{
                setBovinos(response.data)
            },
            (error)=>{
                console.error("error", error)
            }
        )
    }, [])



    console.log(bovinos)


    return (
        <>
            <BarraNavegacion />
            <div className="body-list-page center-page">
                <div>
                    <h1>Nombre finca</h1>
                    <table className="table-animals">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha nacimiento</th>
                                <th>Edad</th>
                                <th>Signos vitales</th>
                                <th>Agregar registro</th>
                            </tr>    
                        </thead>
                        <tbody>
                            
                                {bovinos.map((data)=>{
                                    return(
                                        <tr>
                                        <td>{data.ID}</td>
                                        <td>{data.fecha_nacimiento}</td>
                                        <td>{data.edad}</td>
                                        <td><button className="list-btns"><Link to ={ `/resumen/${data._id}`}>Ver mas</Link></button></td>
                                <td><button className="list-btns"> <Link to ={`/regsignosvitales/${data._id}`}>+</Link></button></td>
                                        </tr>
                                    )
                                })}
                                
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

