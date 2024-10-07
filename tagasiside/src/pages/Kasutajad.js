import { useState } from 'react';
import kasutajadFail from "../kasutajad.json"

function Kasutajad() {
  const[kasutajad, uuendaKasutajad] = useState(kasutajadFail);

  const resetKasutajad = () => {
    uuendaKasutajad(kasutajadFail);
}

  const n2itaKasutajad10 = () => {
      const vastus = kasutajad.filter(kasutaja => kasutaja.username.length >=10);
      uuendaKasutajad(vastus);
  }

  const leiaIndexJaDelete = (kasutaja) => {
    const index = kasutajad.indexOf(kasutaja);
    kasutajad.splice(index,1);
    uuendaKasutajad(kasutajad.slice());
  }


  //!!!!!!!!!
  const esimeneNimiC = () => {
    const leitud = kasutajad.find(kasutaja => kasutaja.name.substring(0,1) === "C");
    console.log(leitud);
  }



  return (
    <div><br />Kasutajad: 
    <br />
    <button onClick={resetKasutajad} style={{ margin: "10px" }}>1. Reset</button>
    <button onClick={()=> n2itaKasutajad10()}>2. Kuva kasutajad, kelle kasutajanimi on robhkem kui 10 tähte</button>
    <button onClick={()=> leiaIndexJaDelete()}>3. Kustuta rea viimane</button>
    <button onClick={()=> esimeneNimiC()}>5. Kasutaja nimi algab C-ga </button>

    
    
    <br />
        {kasutajad.map(kasutaja => 
        <div>
           <div>{kasutaja.id}</div>
           <div>{kasutaja.name}</div> 
           <div>{kasutaja.username}</div> 
           <div>{kasutaja.email}</div> 
           <div>{kasutaja.address.street}</div> 
           <div>{kasutaja.phone}</div> 
           <div>{kasutaja.website}</div> 
          
          
            <br />
        </div> )}
    </div>
  )
}

export default Kasutajad