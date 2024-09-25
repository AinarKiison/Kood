import {useState} from 'react';
import './App.css';

function App() {
  const [kasutajanimi,  muudaKasutajanimi] = useState("Kasutaja1");
  const [kogus, muudaKogus] = useState(5);

  return (
    <div className="App">
      {kasutajanimi}
      {kogus}
      <button onClick={()=>muudaKasutajanimi("MuuKasutaja2")}>Muuda</button>
      <button onClick={()=> muudaKogus(kogus*3)}>Muuda</button>
    </div>
  );
}

export default App;
