import './App.css';
import {Testimonio}  from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio 
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='2'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Esto es una prueba de testimonio de nuestros alumnos que para este caso es de Juana'/>

        <Testimonio
        nombre='Manuel Jiménez'
        pais='Singapur'
        imagen=''
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='Esto es una prueba de testimonio de nuestros alumnos que para este caso es manuel'/>

        <Testimonio
        nombre='Gonzalo García'
        pais='Camerún'
        imagen='3'
        cargo='Ingeniero de Software'
        empresa='ChatDesk'
        testimonio='Esto es una prueba de testimonio de nuestros alumnos que para este caso es Gonzálo'/>
      </div>
    </div>
  );
}

export default App;
