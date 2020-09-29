import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    // Obtener el proyecto actual a partir del context
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // Obtenemos las tareas a partir del estado global
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;

    const seleccionarProyecto = id => {
        proyectoActual( id ); 
        obtenerTareas( id );
    }

    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => seleccionarProyecto( proyecto.id ) }
            > {proyecto.nombre} </button>
        </li>
    );
}
 
export default Proyecto;