
import './App.css'
import Coisa from './components/coisa'
import { useState } from 'react';

function App(){
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  function sum(a, b){
    return Number(a) + Number(b);
  }
  return (
    <div id="container">
      <h1>app</h1>
      <p>a soma de 
        <input type="number" name="num1" id="num1" onChange={(e) => setA(e.target.value)}
      />
       e 
       <input type="number" name="num2" id="num2" onChange={(e) => setB(e.target.value)}
      />
        é: {sum(a, b)}
      </p>
        <Coisa />
    </div>
  );
}

export default App;