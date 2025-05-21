import { useState } from 'react';

function App(){
  const [menssage, setMenssage] = useState('Hello World');
  return(
    <div>
      <h1>{menssage}</h1>
      <button onClick={
        () => setMenssage('Olá Mundo')
      }
        >mudar texto</button>
    </div>
  );
}

export default App;