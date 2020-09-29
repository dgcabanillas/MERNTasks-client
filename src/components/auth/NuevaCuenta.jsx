import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    // State para iniciar sesión
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer de usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacíos

        // Password mínimo de 6 caracteres

        // Los 2 password son iguales

        // Pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1> Obtener una cuenta </h1>
                <form 
                    onSubmit={ onSubmit }
                >
                    <div className="campo-form">
                        <label htmlFor="nombre"> Nombre </label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Someone Lastname"
                            value={ nombre }
                            onChange={ onChange }
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email"> Email </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@domain.com"
                            value={ email }
                            onChange={ onChange }
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password"> Password </label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={ password }
                            onChange={ onChange }
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar"> Confirmar Password </label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="re-password"
                            value={ confirmar }
                            onChange={ onChange }
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <Link to='/' className='enlace-cuenta'> Ya tengo una cuenta </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;