import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'


export const LogOutButtom = () => {
    const {logout} = useAuth0()
    
    return (
        <button
        onClick={() => logout({returnTo: window.location.origin})}>
            Cerrar sesión
        </button>
    )
}