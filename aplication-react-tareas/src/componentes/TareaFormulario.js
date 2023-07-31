import React, {useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';


function TareaFormulario(props) {

    const [input, setInput] = useState(''); //asigna un estado

    const manejarCambio = e => {
        setInput(e.target.value); //Recorre los caracteres que escribes uno a uno
        
    }

    // inserta un nuevo id a la nueva tarea junto con el texto asignado
    const manejarEnvio = e => {
        e.preventDefault();
        console.log("Enviando formulario...")
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

    return (
        <form 
            className='tarea-formulario'
            // llama al metodo manejarEnvio en el botón de Agregar tarea
            onSubmit={manejarEnvio}>
                
            <input 
            // llama al metodo de manejar cambio que almacena los caracteres que insertamos en el input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar tarea
            </button>
        </form>
    )
}

export default TareaFormulario;