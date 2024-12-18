
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import Avaleht from'./pages/Avaleht'
import Uudised from'./pages/Uudised'
import Kontakt from'./pages/Kontakt'
import Meist from'./pages/Meist'
import LisaUudis from'./pages/LisaUudis'
import HaldaUudiseid from'./pages/HaldaUudiseid'
import YksUudis from'./pages/YksUudis'
import MuudaUudis from'./pages/MuudaUudis'
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';



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
      <Link to="/lisa-uudis"><button>Lisa uudis</button></Link>
      <Link to="/halda-uudiseid"><button>Halda uudiseid</button></Link>
     
      
      
      <Routes>
        <Route path='' element={ <Avaleht/> }/>
        <Route path='uudised' element={ <Uudised/> }/>
        <Route path='kontakt' element={ <Kontakt/> }/>
        <Route path='meist' element={ <Meist/> }/>
        <Route path='lisa-uudis' element={ <LisaUudis/> }/>
        <Route path='halda-uudiseid' element={ <HaldaUudiseid/> }/>
        <Route path='uudis/:index' element={ <YksUudis/> }/>
        <Route path='muuda/:index' element={ <MuudaUudis/> }/>
        <Route path='kasutaja-postitus/:kasutajaId' element={ <KasutajaPostitus/> }/>
        <Route path='vaata-postitus/:postitused' element={ <YksPostitus/> }/>


      </Routes>
    </div>
  );
}

export default App;
