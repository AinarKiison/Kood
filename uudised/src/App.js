
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import Avaleht from'./pages/Avaleht'
import Uudised from'./pages/Uudised'
import Kontakt from'./pages/Kontakt'
import Meist from'./pages/Meist'



function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = ()=>{
   if (paroolRef.current.value === "123"){
    muudaSisselogitud("jah");
    muudaSonum("Oled sisselogitud");
  } else{
    muudaSonum("Vale parool");
  }
  }

  return (
    <div>
      <div className='App'>
        <div>{sonum}</div>
        { sisselogitud === "ei" && <div>
          <label>Kasutajanimi</label>
          <input ref={kasutajaNimiRef} type="text" />
          <input ref={paroolRef} type="password" />
      </div>}

        {sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
        {sisselogitud === "jah" && <button onClick={()=> muudaSisselogitud("ei")}>Logi välja</button>}
      </div>
        

      <Link to="/"><button>Avalehele</button></Link>
      <Link to="/uudised"><button>Uudised</button></Link>
      <Link to="/kontakt"><button>Kontakt</button></Link>
      <Link to="/meist"><button>Meist</button></Link>
      
      
      <Routes>
        <Route path='' element={ <Avaleht/> }/>
        <Route path='uudised' element={ <Uudised/> }/>
        <Route path='kontakt' element={ <Kontakt/> }/>
        <Route path='meist' element={ <Meist/> }/>
      </Routes>
    </div>
  );
}

export default App;
