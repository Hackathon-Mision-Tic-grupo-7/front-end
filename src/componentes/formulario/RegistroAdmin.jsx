import React from 'react'
import '../../css/Registro/registro.css'

export const RegistroAdmin = () => {
    return (
        <div className="center-body">
            <div className="body-reg">
                <h1>Registro nuevo administrador</h1>
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

                    <div className="form-label-input sec-finca">
                        <label >Nombre de la finca</label>
                        <input type="text" />
                    </div>

                    <div className="btn-reg">
                        <button>Registrarse</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

