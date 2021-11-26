import React from 'react'

import "../../css/inicioGeneral/listaAnimales.css"

export const ListaAnimales = () => {
    return (
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
                    <tr>
                        <td>1234</td>
                        <td>15/11/2015</td>
                        <td>37</td>
                        <td><button className="list-btns">Ver mas</button></td>
                        <td><button className="list-btns">+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
