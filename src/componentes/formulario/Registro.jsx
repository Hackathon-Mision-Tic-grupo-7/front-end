import React from 'react'
import '../../css/Registro/registro.css'

export const Registro = () => {
    return (
        <div className="body-reg">
            <h1>Registro nuevo usuario</h1>
            <form className="form-control">
                <div className="form-label-input">
                    <label>Nombres</label>
                    <input type="text" />
                </div>

                <div className="form-label-input">
                    <label >Apellidos</label>
                    <input type="text" />
                </div>

                <div className="form-label-input">
                    <label >Correo</label>
                    <input type='email' />
                </div>

                <div className="form-label-input">
                    <label >Contraseña</label>
                    <input type="password" />
                </div>

                <div className="form-label-input">
                    <label >Celular</label>
                    <input type="text" />
                </div>

                <div className="form-label-input">
                    <label >Identificación</label>
                    <input type="text" />
                </div>

                <div className="form-label-input">
                    <label >Rol</label>
                    <select name="rol">
                        <option defaultChecked>Seleccione un cargo</option>
                        <option value="veterinario">Veterinario</option>
                        <option value="gestor">Gestor de finca</option>
                    </select>
                </div>

                <div className="form-label-input">
                    <label >Codigo finca</label>
                    <input type="text" />
                </div>

                <div className="btn-reg">
                    <button>Registrarse</button>
                </div>

            </form>
        </div>
    )
}

