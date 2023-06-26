import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {

  const manejarClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log("reiniciar")
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freecodeCamp'/>
      </div>

      <div className='contenedor-principal'>
        <Boton 
         texto='Clic'
         csBotonDeClic={true}
         manejarClic={manejarClic}/>
        <Boton 
         texto='Reiniciar'
         csBotonDeClic={false}
         manejarClic={reiniciarContador}/>
      </div>
      
    </div>
  );
}

export default App;
