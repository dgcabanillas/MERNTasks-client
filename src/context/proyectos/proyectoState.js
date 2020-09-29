import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';

import ProyectoContext from './proyectoContext';
import ProyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';


const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual', },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño sitio web' },
        { id: 4, nombre: 'MERN' }
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer( ProyectoReducer, initialState );

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => { dispatch({ type: FORMULARIO_PROYECTO }); }
    const obtenerProyectos = () => { dispatch({ type: OBTENER_PROYECTOS, payload: proyectos }); }
    const agregarProyecto = proyecto => {
        proyecto.id = uuid(); 
        dispatch({ type: AGREGAR_PROYECTO, payload: proyecto });
    }
    const mostrarError = () => { dispatch({ type: VALIDAR_FORMULARIO }); }
    const proyectoActual = proyectoID => { dispatch({ type: PROYECTO_ACTUAL, payload: proyectoID }); }
    const eliminarProyecto = proyectoID => { dispatch({ type: ELIMINAR_PROYECTO, payload: proyectoID }); }

    return (
        <ProyectoContext.Provider
            value={{ 
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarError,
                proyectoActual,
                agregarProyecto,
                obtenerProyectos,
                mostrarFormulario,
                eliminarProyecto
            }}
        >
            { props.children }
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;

