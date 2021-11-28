import React from 'react'

import "../../css/inicioGeneral/listaAnimales.css"
import { BarraNavegacion } from './BarraNavegacion'

export const ListaSolicitudes = () => {
    return (
        <>
            <BarraNavegacion />
            <div className="body-list-page center-page">
                <div>
                    <h1>Lista de solicitudes</h1>
                    <table className="table-animals">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Nombre</th>
                                <th>Estado</th>
                                <th>Cargo</th>
                                <th>Aceptar / Rechazar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1234</td>
                                <td>15/11/2015</td>
                                <td>37</td>
                                <td>CARGO</td>
                                <td><button className="list-btns-check">
                                    &#10003;</button> <button className="list-btns-x">x</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
