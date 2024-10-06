import { useState } from 'react';
import tegevusteFail from "../tegevused.json";

function Tegevused() {
    const[tegevused, uuendaTegevused] = useState(tegevusteFail);
    const n2itaKasutajaYks = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus);
    }
    const n2itaKasutajaKaks = () => {
        const vastus = tegevused.filter(element => element.userId === 2);
        uuendaTegevused(vastus);
    }
    const n2itaKasutajaKolm = () => {
        const vastus = tegevused.filter(element => element.userId === 3);
        uuendaTegevused(vastus);
    }
    const n2itaK6iki = () => {
        uuendaTegevused(tegevusteFail);
    }

  return (
    <div>
        
        <button onClick={() => n2itaKasutajaYks()}>Kova kõik kasutaja ID 1 tegevused</button>
        <button onClick={() => n2itaKasutajaKaks()}>Kova kõik kasutaja ID 2 tegevused</button>
        <button onClick={() => n2itaKasutajaKolm()}>Kova kõik kasutaja ID 3 tegevused</button>
        <button>Kova kõik valmis tegevused</button>
        <button>Kova kõik mittevalmis tegevused</button>
        <button>Kova kõik "t" tähega tegevused</button>
        <button>Kova kõik tegevused millel on rohkem kui 20 tähmärki</button>
        <button onClick={()=>n2itaK6iki()}>Kova kõik tegevused tagasi</button>
        {tegevused.map(element => 
        <div>
            <div>{element.userId}</div>
            <div>{element.id}</div>
            <div>{element.title}</div>
            <div>{element.completed}</div>
            <br />
        </div> )}
    </div> );
}

export default Tegevused;