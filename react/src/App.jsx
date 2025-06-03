
import './App.css'
import Coisa from './components/coisa'
import SeyMN from './components/seyMyName'
import { useState } from 'react'

function App(){
  const [nome, setNome] = useState('myName')
  return (
    <div id="container">
      <h1 class='bg-red-300 text-blue-500'>app</h1>
        <Coisa />
        <input type="text" name="ntxt" id="ntxt" 
        value = {nome}
        onChange={(e) => setNome(e.target.value)}
        
        />
        <SeyMN name={nome}/>
    </div>
  );
}

export default App;