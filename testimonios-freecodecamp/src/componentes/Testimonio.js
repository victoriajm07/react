import React from 'react';

export function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require('../imagenes/testimonio2.png')}
          alt='Foto de Juana'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Juana Bostian en Suecia</p>
          <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
          <p className='texto-testimonio'>Esto es una prueba del testimonio de Juana</p>
        </div>
    </div>
  );
}

