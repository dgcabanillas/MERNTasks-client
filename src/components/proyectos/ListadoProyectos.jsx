import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    // Extraer proyectos a partir del state global
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect( () => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    if( proyectos.length === 0 ) return <p> No hay proyectos, crea uno ... </p>;
    return ( 
        <ul className="listado-proyectos">
            { proyectos.map( proyecto => <Proyecto key={proyecto.id} proyecto={proyecto}/> ) }
        </ul>
    );
}
 
export default ListadoProyectos;