import './App.css';
import Button from './component/Button';
import Screen from './component/Screen';
import ButtonClear from './component/ButtonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'


function App() {

const [input, setInput] = useState('');

const addInput = val => {
  setInput(input + val);
};

const calcularResultado = () =>{
  if (input){
  setInput(evaluate(input));
  } else {
    alert("Porfavor ingrese numeros para realizar la operación");
  }
};

  return (
    <div className='App'>
      <title className='titulo'> Calculadora</title>
      <div className='contenedor-calculadora'>
        <Screen input={input} />
        <div className='fila' >
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>
        <div className='fila' >
        <Button manejarClic={addInput}>4</Button>
        <Button manejarClic={addInput}>5</Button>
        <Button manejarClic={addInput}>6</Button>
        <Button manejarClic={addInput}>-</Button>
        </div>
        <div className='fila' >          
        <Button manejarClic={addInput}>7</Button>
        <Button manejarClic={addInput}>8</Button>
        <Button manejarClic={addInput}>9</Button>
        <Button manejarClic={addInput}>*</Button>
</div>
        <div className='fila' >
        <ButtonClear manejarClear={()=> setInput('')}>
          C
         </ButtonClear>
        <Button manejarClic={addInput}>0</Button>
        <Button manejarClic={addInput}>.</Button>
        <Button manejarClic={addInput}>/</Button>
        </div>
        <div className='fila' >
        <Button manejarClic={calcularResultado}>=</Button>
         
        </div>


      </div>

    </div>
  );
}

export default App;
