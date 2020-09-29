import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';

export default (state, action) => { 
    switch( action.type ) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter( tarea => tarea.proyectoID === action.payload )
            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [ action.payload, ...state.tareas ],
                errortarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }
        case ELIMINAR_TAREA:
            let tarea = null;
            if( state.tareaseleccionada !== null ) {
                tarea = state.tareaseleccionada.id === action.payload ? null : state.tareaseleccionada;
            } 
            return {
                ...state,
                tareas: state.tareas.filter( tarea => tarea.id !== action.payload ),
                tareaseleccionada: tarea
            }
        case ESTADO_TAREA:
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map( tarea => tarea.id === action.payload.id ? action.payload : tarea ),
                tareaseleccionada: null
            }
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload
            }
        default: 
            return state;
    }
}  