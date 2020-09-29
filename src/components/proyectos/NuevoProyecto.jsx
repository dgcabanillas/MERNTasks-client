import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario a partir del context
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    // State
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    // Extraer nombre del proyecto
    const { nombre } = proyecto;

    // Leer datos del input
    const onChangeProyecto = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario crea el nuevo Proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar Proyecto
        if( nombre === '' ) {
            mostrarError();
            return;
        }

        // Agregar el state
        agregarProyecto( proyecto );

        // Reiniciar el form
        setProyecto({nombre: ''})
    }

    // Mostrar el formulario
    const onClickFormulario = () => { mostrarFormulario(); }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ onClickFormulario }
            > Nuevo Proyecto </button>

            {formulario ? 
                <form 
                    onSubmit={ onSubmitProyecto }
                    className="formulario-nuevo-proyecto"
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"    
                        value={ nombre }
                        onChange={ onChangeProyecto }
                    />

                    <input 
                        type="submit"
                        className="btn btn-block btn-primario"
                        value="Agregar Proyecto"
                    />

                </form>
                :
                null
            }

            { errorformulario ? <p className="mensaje error"> El nombre del proyecto es obligatorio </p> : null }
        </Fragment>
    );
}
 
export default NuevoProyecto;