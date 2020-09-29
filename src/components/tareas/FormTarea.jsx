import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // Obtener el proyecto actual a partir del context
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtenemos las tareas a partir del estado global
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, obtenerTareas, agregarTarea, validarTarea, actualizarTarea } = tareasContext;

    useEffect(() => {
        if( tareaseleccionada !== null ) setTarea( tareaseleccionada );
        else setTarea({ nombre:'' });
    }, [tareaseleccionada]);

    const [tarea, setTarea] = useState({
        nombre: ''
    })

    if( !proyecto ) return null;

    // Array destructuring para obtener el proyecto actual
    const [proyectoActual] = proyecto;

    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }
    const { nombre } = tarea;

    const onSubmit = e => {
        e.preventDefault();
        
        if( nombre.trim() === '' ){
            validarTarea();
            return;
        }

        if( tareaseleccionada === null ) {
            tarea.proyectoID = proyectoActual.id;
            tarea.estado = false;
            agregarTarea( tarea );
        } else {
            actualizarTarea( tarea );
        }
        
        obtenerTareas( proyectoActual.id );
        setTarea({ nombre:'' });
    }

    return (  
        <div className="formulario">
            <form
                onSubmit={ onSubmit }
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea ..."
                        name="nombre"    
                        value= { nombre }
                        onChange={ handleChange }
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={ tareaseleccionada ? "Editar Tarea" : "Agregar Tarea" }
                    />
                </div>
            </form>
            { errortarea ? <p className="mensaje error"> El nombre de la tarea es obligatorio </p> : null }
        </div>
    );
}
 
export default FormTarea;