import './App.css';
import { useState } from 'react';
import { Boton } from '../Boton/index';
import { Contador } from '../Contador/index'

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const click = () => {
    setNumClicks(numClicks + 1);

  }

  const reset = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='contenedor-principal'>

        <Contador
         numClicks={numClicks}
        />

        <Boton
         texto="Click"
         esBotonDeClick={true}
         manejarClick={ click }
        />

      <Boton
       texto="Reset"
       esBotonDeClick={false}
       manejarClick={ reset }
      />
          
      </div>
    </div>
  );
}

export default App;
