import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
    // condición de que si la condición de completada se cumple, la clase sera tarea-contenedor completada
    // si no se cumple la clase será tarea-contenedor
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className='tarea-texto'
                onClick={() => completarTarea(id)}>
                {texto}
            </div>

             
            <div 
                className='tarea-contenedor-iconos'
                onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono'/>
            </div>
        </div>
    )//// al clicar sobre el icono de la cruz, elimina la tarea
}

export default Tarea;