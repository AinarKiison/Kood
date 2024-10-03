import {useState, useRef} from "react";
import andjateFail from "../nimed.json";


function TagasisideAndjad() {
  const [andjad, uuendaAndjad] = useState(andjateFail);

  const filtreeriM = ()=> {
    const vastus = andjad.filter(element => element.startsWith("M"));
    uuendaAndjad(vastus);
  }
  const filterSixLetters =  ()=> {
    const vastus = andjad.filter(element => element.length === 6);
    uuendaAndjad(vastus);
  }
  const filterEndingY =  ()=> {
    const vastus = andjad.filter(element => element.endsWith("y"));
    uuendaAndjad(vastus);
  }
  const sortZA = ()=>{
    andjad.sort();
    andjad.reverse();
    uuendaAndjad(andjad.slice());
  }
  const insertEST=()=>{
    const vastus = andjad.map(element => "EST-" + element);
    uuendaAndjad(vastus);
  }
  const kustuta = (index)=>{
    andjad.splice(index,1)
    uuendaAndjad(andjad.slice());
  }
  const andjaRef = useRef();

  const lisa = ()=> {
    andjad.push(andjaRef.current.value);
    uuendaAndjad(andjad.slice());
  }

  return ( <div>
    <div>Kuva palöju nimesid on .length abil {andjad.length} tk</div>
    <button onClick={filtreeriM}>Filtreeri alles M-tähega</button>
    <button onClick={filterSixLetters}>Filtreeri alles 6-tähega</button>
    <button onClick={filterEndingY}>Filtreeri alles Y tähega lõppevad</button>
    <button onClick={sortZA}>Sorteeri Z-A</button>
    <button onClick={insertEST}>Proovi .map funktsiooni - kirjuta iga nime ette "EST-"</button>
    {andjad.map((element,index) =>
      <div key={element}>
        {element} <button onClick={() => kustuta(index)}>võimalda kustutada igaüht</button>
        </div>
  )}
  <label>Võimalda uut nime lõppu lisada</label><br />
    <input ref={andjaRef} type="text" /><br />
    <button onClick={lisa}>Lisa</button>
    </div>
  );
}

export default TagasisideAndjad